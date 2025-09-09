<template>
  <div class="min-h-screen p-6">
    <h1 class="text-4xl font-bold family-feud-logo text-center mb-6">قائمة الألعاب</h1>
    <p class="text-center mb-4 text-white">اختر لعبة (1 إلى 10)، كل لعبة تحتوي 6 أسئلة</p>

    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
      <button
        v-for="n in 10"
        :key="n"
        class="game-card px-6 py-6 text-2xl"
        @click="start(n - 1)"
      >
        <div class="flex items-center justify-between">
          <span class="badge">{{ n }}</span>
          <span class="font-feud">لعبة</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from '../stores/game'

const game = useGameStore()

function start(index: number) {
  game.selectGame(index)
}
</script>
