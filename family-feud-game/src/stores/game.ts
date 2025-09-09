import { defineStore } from 'pinia'
import { games as gamesData } from '@/data/questions'

type Answer = { text: string; points: number }
type Question = { question: string; answers: Answer[] }

// Normalize answers' points so each question totals exactly 100 points.
function normalizeQuestion(q: Question): Question {
  const answers = q.answers
  const total = answers.reduce((s, a) => s + (Number.isFinite(a.points) ? a.points : 0), 0)

  // If already 100, return as-is
  if (total === 100) return q

  // Defensive copy
  const cloned: Answer[] = answers.map(a => ({ text: a.text, points: a.points }))

  if (total <= 0) {
    // Distribute equally if totals are invalid
    const n = cloned.length || 1
    const base = Math.floor(100 / n)
    let rem = 100 - base * n
    return {
      question: q.question,
      answers: cloned.map((a, i) => ({ text: a.text, points: base + (i < rem ? 1 : 0) }))
    }
  }

  // Largest remainder method
  const scaled = cloned.map(a => (a.points * 100) / total)
  const floored = scaled.map(v => Math.floor(v))
  let sum = floored.reduce((s, v) => s + v, 0)
  let remainder = 100 - sum

  // Pair indexes with fractional parts
  const withFrac = scaled.map((v, i) => ({ i, frac: v - Math.floor(v) }))
  withFrac.sort((a, b) => b.frac - a.frac) // descending by fractional part

  for (let k = 0; k < remainder; k++) {
    floored[withFrac[k % withFrac.length].i] += 1
  }

  return {
    question: q.question,
    answers: cloned.map((a, i) => ({ text: a.text, points: floored[i] }))
  }
}

const normalizedGamesData: Question[][] = gamesData.map(game => game.map(normalizeQuestion))

export const useGameStore = defineStore('game', {
  state: () => ({
    // null = لم يتم اختيار لعبة بعد
    selectedGameIndex: null as number | null,
    currentQuestion: 0,
    team1Score: 0,
    team2Score: 0,
    team1Name: 'الفريق الأول',
    team2Name: 'الفريق الثاني',
    strikes: 0,
    maxStrikes: 3,
    currentRoundPoints: 0,
    revealedAnswers: [] as number[],
    showAwardModal: false,
  showEndScreen: false,
  games: normalizedGamesData,
  }),

  getters: {
    isGameSelected: (state) => state.selectedGameIndex !== null,
    currentGameQuestions: (state) =>
      state.selectedGameIndex !== null ? state.games[state.selectedGameIndex] : null,
    currentQuestionData: (state) => {
      if (state.selectedGameIndex === null) return null
      return state.games[state.selectedGameIndex]?.[state.currentQuestion] || null
    },
    totalAnswers: (state) => {
      if (state.selectedGameIndex === null) return 0
      const question = state.games[state.selectedGameIndex]?.[state.currentQuestion]
      return question ? question.answers.length : 0
    },
    maxPointsForQuestion: (state) => {
      if (state.selectedGameIndex === null) return 0
      const question = state.games[state.selectedGameIndex]?.[state.currentQuestion]
      if (!question) return 0
      return question.answers.reduce((sum: number, answer: { points: number }) => sum + answer.points, 0)
    }
  },

  actions: {
    selectGame(index: number) {
      if (index < 0 || index >= this.games.length) return
      this.selectedGameIndex = index
      this.currentQuestion = 0
      this.resetRound()
      // لا نغير أسماء الفرق هنا
      this.team1Score = 0
      this.team2Score = 0
    },
    exitToMenu() {
      this.resetRound()
      this.currentQuestion = 0
      this.selectedGameIndex = null
      this.team1Score = 0
      this.team2Score = 0
  this.showEndScreen = false
    },
  revealAnswer(index: number) {
      if (this.revealedAnswers.includes(index)) return false
      
      this.revealedAnswers.push(index)
      const question = this.currentQuestionData
      if (question && question.answers[index]) {
        this.currentRoundPoints += question.answers[index].points
      }
      return true
    },

    addStrike() {
      if (this.strikes < this.maxStrikes) {
        this.strikes++
    return this.strikes >= this.maxStrikes
      }
      return false
    },

  awardPoints(team: 1 | 2) {
      if (team === 1) {
        this.team1Score += this.currentRoundPoints
      } else if (team === 2) {
        this.team2Score += this.currentRoundPoints
      }
      this.resetRound()
    },

    nextQuestion() {
      if (this.currentQuestion < 5) {
        this.currentQuestion++
        this.resetRound()
      }
    },

    resetRound() {
      this.strikes = 0
      this.currentRoundPoints = 0
      this.revealedAnswers = []
      this.showAwardModal = false
    },

    resetGame() {
      this.currentQuestion = 0
      this.team1Score = 0
      this.team2Score = 0
      this.resetRound()
      // لا نغير اختيار اللعبة
    },

    endGame() {
      // إظهار شاشة النهاية مع النتائج
      this.showAwardModal = false
      this.showEndScreen = true
    },

  updateTeamNames(team1Name?: string, team2Name?: string) {
      this.team1Name = team1Name || 'الفريق الأول'
      this.team2Name = team2Name || 'الفريق الثاني'
    }
  }
})
