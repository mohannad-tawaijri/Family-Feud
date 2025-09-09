<script setup>
import { storeToRefs } from 'pinia'
import { useGameStore } from './stores/game'
import GameBoard from './components/GameBoard.vue'
import EndScreen from './components/EndScreen.vue'
import GameMenu from './components/GameMenu.vue'

const game = useGameStore()
const { isGameSelected } = storeToRefs(game)

function backToMenu() {
  game.exitToMenu()
}
</script>

<template>
  <div id="app">
    <template v-if="isGameSelected">
      <div class="p-4" style="text-align:center;">
        <button class="game-button px-4 py-2" @click="backToMenu">رجوع إلى القائمة</button>
      </div>
  <GameBoard />
  <EndScreen v-if="game.showEndScreen" />
    </template>
    <template v-else>
      <GameMenu />
    </template>
  </div>
</template>

<style>
#app {
  width: 100%;
  height: 100vh;
  overflow-x: auto;
}
</style>
