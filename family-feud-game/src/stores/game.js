// This JS shim re-exports the TypeScript Pinia store to avoid duplicate definitions.
// Ensures all imports from '../stores/game' resolve to the TS implementation.
export { useGameStore } from './game.ts'
