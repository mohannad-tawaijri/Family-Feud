<template>
  <div class="min-h-screen p-4">
    <!-- Header -->
  <div class="text-center mb-6">
      <div class="logo-oval inline-block mb-2">
        <h1 class="text-6xl font-bold family-feud-logo font-feud tracking-wider" style="margin:0;">
          FAMILY FEUD
        </h1>
      </div>
      <div class="flex justify-center items-center gap-8">
        <div class="round-display w-24 h-24 flex items-center justify-center">
          <div class="text-center">
      <div class="text-sm font-bold">اللعبة</div>
      <div class="text-2xl font-bold">{{ (selectedGameIndex ?? 0) + 1 }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Question Display -->
    <div class="question-display p-6 mb-6 text-center">
      <h2 class="text-3xl font-bold mb-2">السؤال {{ currentQuestion + 1 }} من 6</h2>
      <p class="text-2xl">{{ currentQuestionData?.question || 'جاري التحميل...' }}</p>
    </div>

    <!-- Game Board -->
    <div class="feud-board p-8 mb-6 max-w-4xl mx-auto">
      <div class="grid grid-cols-2 gap-4 answers-grid">
        <div 
          v-for="(answer, index) in (currentQuestionData?.answers || [])" 
          :key="index"
          class="answer-slot p-4 text-center cursor-pointer"
          tabindex="0"
          :class="{ 
            'revealed': revealedAnswers.includes(index),
            'answer-reveal-animation': revealedAnswers.includes(index)
          }"
          @click="handleAnswerClick(index)"
          @keydown.enter.prevent="handleAnswerClick(index)"
          @keydown.space.prevent="handleAnswerClick(index)"
        >
          <div class="flex justify-between items-center">
            <span class="answer-index-badge">{{ index + 1 }}</span>
            <span v-if="revealedAnswers.includes(index)" class="text-xl font-bold">
              {{ answer.text }}
            </span>
            <span v-else class="placeholder-bar" aria-hidden="true"></span>
            <span v-if="revealedAnswers.includes(index)" class="answer-points-badge">
              {{ answer.points }}
            </span>
            <span v-else class="placeholder-bar small" aria-hidden="true"></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Strikes and Current Points -->
    <div class="flex justify-center items-center gap-8 mb-6">
      <div class="strikes-display flex gap-2">
        <div 
          v-for="n in maxStrikes" 
          :key="n"
          class="w-16 h-16 border-4 border-red-500 rounded-lg flex items-center justify-center bg-black"
        >
          <span v-if="n <= strikes" class="strike-x strike-animation">✗</span>
        </div>
      </div>
      
      <div class="current-points px-8 py-4 points-counter">
        <div class="text-center">
          <div class="text-lg font-bold">النقاط الحالية</div>
          <div class="text-3xl font-bold">{{ currentRoundPoints }}</div>
        </div>
      </div>
    </div>

    <!-- Control Buttons -->
    <div class="flex justify-center gap-4 mb-6">
      <button 
        @click="addStrike"
        class="game-button strike-button px-6 py-3 text-xl font-bold"
        :disabled="strikes >= maxStrikes"
      >
        Strike ✗
      </button>
      
      <button 
        @click="showAwardModal = true"
        class="game-button px-6 py-3 text-xl font-bold"
        :disabled="currentRoundPoints === 0"
      >
        منح النقاط
      </button>
      
      <button 
        @click="nextQuestion"
        class="game-button px-6 py-3 text-xl font-bold"
      >
        السؤال التالي
      </button>
      
      <button 
        @click="resetGame"
        class="game-button px-6 py-3 text-xl font-bold"
      >
        بداية جديدة
      </button>
      <button 
        @click="endNow"
        class="game-button px-6 py-3 text-xl font-bold"
      >
        إنهاء اللعبة
      </button>
    </div>

    <!-- Team Scores -->
    <div class="flex justify-center gap-8">
      <div class="team-score p-6 text-center min-w-200">
        <input 
          v-model="team1Name" 
          @blur="updateTeamNames(team1Name, team2Name)"
          class="text-2xl font-bold mb-2 bg-transparent text-center border-b-2 border-yellow-400 text-yellow-400 focus:outline-none"
          placeholder="الفريق الأول"
        />
        <div class="text-4xl font-bold">{{ team1Score }}</div>
        <button 
          v-if="showAwardModal"
          @click="awardPoints(1)"
          class="mt-4 game-button px-4 py-2 text-lg"
        >
          منح النقاط
        </button>
      </div>
      
      <div class="team-score p-6 text-center min-w-200">
        <input 
          v-model="team2Name"
          @blur="updateTeamNames(team1Name, team2Name)"
          class="text-2xl font-bold mb-2 bg-transparent text-center border-b-2 border-yellow-400 text-yellow-400 focus:outline-none"
          placeholder="الفريق الثاني"
        />
        <div class="text-4xl font-bold">{{ team2Score }}</div>
        <button 
          v-if="showAwardModal"
          @click="awardPoints(2)"
          class="mt-4 game-button px-4 py-2 text-lg"
        >
          منح النقاط
        </button>
      </div>
    </div>

    <!-- Award Points Modal -->
    <div v-if="showAwardModal" class="award-points-modal">
      <div class="modal-content">
        <h3 class="modal-title">منح النقاط</h3>
        <p class="modal-subtitle">
          إجمالي النقاط: <span class="points-value">{{ currentRoundPoints }}</span>
        </p>
        <div class="team-buttons">
          <button 
            @click="awardPoints(1)"
            class="game-button modal-team-button"
          >
            {{ team1Name }}
          </button>
          <button 
            @click="awardPoints(2)"
            class="game-button modal-team-button"
          >
            {{ team2Name }}
          </button>
        </div>
        <button 
          @click="showAwardModal = false"
          class="game-button modal-cancel-button"
        >
          إلغاء
        </button>
      </div>
    </div>

    <!-- Admin Panel -->
    <AdminPanel />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useGameStore } from '../stores/game'
import AdminPanel from './AdminPanel.vue'
import { playCorrect, playStrike } from '../utils/audio'

const gameStore = useGameStore()

const {
  currentQuestion,
  team1Score,
  team2Score,
  team1Name,
  team2Name,
  strikes,
  maxStrikes,
  currentRoundPoints,
  revealedAnswers,
  showAwardModal,
  currentQuestionData,
  selectedGameIndex
} = storeToRefs(gameStore)

const {
  revealAnswer,
  addStrike: addStrikeAction,
  awardPoints,
  nextQuestion,
  resetGame,
  updateTeamNames
} = gameStore

function handleAnswerClick(index) {
  const revealed = revealAnswer(index)
  if (revealed) {
    // تشغيل صوت الإجابة الصحيحة
    try { playCorrect() } catch {}
    console.log('Answer revealed:', currentQuestionData.value.answers[index])
  }
}

function addStrike() {
  const gameEnded = addStrikeAction()
  // تشغيل صوت السترايك
  try { playStrike() } catch {}
  console.log('Strike added. Total strikes:', strikes.value)
}

function endNow() {
  gameStore.endGame()
}
</script>
