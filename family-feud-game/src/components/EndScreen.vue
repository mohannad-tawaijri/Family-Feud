<template>
  <div class="end-screen-wrapper">
    <div class="end-card">
      <h2 class="end-title">مبروك انتهاء اللعبة!</h2>
      <div class="scores">
        <div class="team-box">
          <div class="team-name">{{ team1Name }}</div>
          <div class="team-score">{{ team1Score }}</div>
        </div>
        <div class="team-box">
          <div class="team-name">{{ team2Name }}</div>
          <div class="team-score">{{ team2Score }}</div>
        </div>
      </div>
      <div class="winner" v-if="winner">
        الفائز: <span class="winner-name">{{ winner }}</span>
      </div>
      <div class="actions">
        <button class="game-button" @click="backToMenu">العودة إلى الألعاب</button>
        <button class="game-button" @click="playAgain">بدء جولة جديدة</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useGameStore } from '@/stores/game'

const game = useGameStore()
const { team1Name, team2Name, team1Score, team2Score } = storeToRefs(game)

const winner = computed(() => {
  if (team1Score.value === team2Score.value) return 'تعادل'
  return team1Score.value > team2Score.value ? team1Name.value : team2Name.value
})

function backToMenu() {
  game.exitToMenu()
}

function playAgain() {
  // إبقاء نفس اللعبة المختارة، إعادة الضبط
  game.resetGame()
  game.showEndScreen = false
}
</script>

<style scoped>
.end-screen-wrapper {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(0,0,0,0.75);
  backdrop-filter: blur(6px);
  z-index: 60;
}
.end-card {
  width: 100%;
  max-width: 860px;
  background: linear-gradient(145deg, var(--surface) 0%, var(--surface-light) 100%);
  border: 6px solid var(--feud-gold-600);
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.6);
  color: white;
  padding: 2rem;
  text-align: center;
}
.end-title {
  font-size: 2rem;
  font-weight: 900;
  color: var(--feud-gold-500);
  margin-bottom: 1rem;
}
.scores {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}
.team-box {
  background: linear-gradient(145deg, var(--surface) 0%, var(--surface-dark) 100%);
  border: 4px solid var(--feud-gold-600);
  border-radius: 16px;
  padding: 1rem;
}
.team-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--feud-gold-500);
}
.team-score {
  font-size: 2.5rem;
  font-weight: 900;
}
.winner {
  margin: 0.5rem 0 1rem;
  font-size: 1.25rem;
}
.winner-name {
  font-weight: 900;
  color: var(--feud-gold-500);
}
.actions {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
}
@media (min-width: 768px) {
  .actions { grid-template-columns: repeat(2, 1fr); }
}
</style>