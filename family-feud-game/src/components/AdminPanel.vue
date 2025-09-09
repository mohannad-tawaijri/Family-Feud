<template>
  <div class="control-panel p-4 bg-gray-800 border-t-4 border-yellow-400">
    <div class="flex flex-wrap justify-center gap-4">
      <!-- Admin Controls -->
      <div class="admin-section">
        <h3 class="text-lg font-bold text-yellow-400 mb-2 text-center">إدارة اللعبة</h3>
        <div class="flex gap-2">
          <button 
            @click="revealAllAnswers"
            class="game-button px-4 py-2 text-sm"
          >
            كشف جميع الإجابات
          </button>
          
          <button 
            @click="clearRevealed"
            class="game-button px-4 py-2 text-sm"
          >
            إخفاء الإجابات
          </button>
          
          <button 
            @click="resetStrikes"
            class="game-button px-4 py-2 text-sm"
          >
            مسح الضربات
          </button>
        </div>
      </div>

      <!-- Quick Team Score Management -->
      <div class="score-management">
        <h3 class="text-lg font-bold text-yellow-400 mb-2 text-center">إدارة النقاط</h3>
        <div class="flex gap-2">
          <div class="flex items-center gap-2">
            <span class="text-white text-sm">{{ team1Name }}:</span>
            <button @click="adjustScore(1, -10)" class="score-btn">-10</button>
            <button @click="adjustScore(1, 10)" class="score-btn">+10</button>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-white text-sm">{{ team2Name }}:</span>
            <button @click="adjustScore(2, -10)" class="score-btn">-10</button>
            <button @click="adjustScore(2, 10)" class="score-btn">+10</button>
          </div>
        </div>
      </div>

      <!-- Sound Controls -->
      <div class="sound-controls">
        <h3 class="text-lg font-bold text-yellow-400 mb-2 text-center">الأصوات</h3>
        <div class="flex gap-2">
          <button @click="playSound('correct')" class="sound-btn">🔔 إجابة صحيحة</button>
          <button @click="playSound('wrong')" class="sound-btn">❌ خطأ</button>
          <button @click="playSound('applause')" class="sound-btn">👏 تصفيق</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useGameStore } from '../stores/game'
import { playCorrect, playStrike, playApplause } from '../utils/audio'

const gameStore = useGameStore()
const { team1Name, team2Name, currentQuestionData } = storeToRefs(gameStore)

function revealAllAnswers() {
  if (currentQuestionData.value) {
    for (let i = 0; i < currentQuestionData.value.answers.length; i++) {
      gameStore.revealAnswer(i)
    }
  }
}

function clearRevealed() {
  gameStore.revealedAnswers = []
  gameStore.currentRoundPoints = 0
}

function resetStrikes() {
  gameStore.strikes = 0
}

function adjustScore(team, points) {
  if (team === 1) {
    gameStore.team1Score = Math.max(0, gameStore.team1Score + points)
  } else {
    gameStore.team2Score = Math.max(0, gameStore.team2Score + points)
  }
}

function playSound(type) {
  try {
    if (type === 'correct') return playCorrect()
    if (type === 'wrong') return playStrike()
    if (type === 'applause') return playApplause()
  } catch {}
}
</script>

