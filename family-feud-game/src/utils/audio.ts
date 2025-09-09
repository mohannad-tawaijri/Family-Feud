// Audio utility with WebAudio fallback. If /sounds/*.mp3 exist, plays them; otherwise, beeps.

let ac: AudioContext | null = null
function ctx() {
  if (!ac) ac = new (window.AudioContext || (window as any).webkitAudioContext)()
  return ac!
}

function beep(freq: number, durationMs: number, type: OscillatorType = 'sine', gain = 0.1) {
  try {
    const audio = ctx()
    const osc = audio.createOscillator()
    const g = audio.createGain()
    osc.type = type
    osc.frequency.value = freq
    g.gain.value = gain
    osc.connect(g).connect(audio.destination)
    const now = audio.currentTime
    osc.start(now)
    osc.stop(now + durationMs / 1000)
  } catch {}
}

function tryPlayUrl(url: string, onFail: () => void) {
  try {
    const a = new Audio(url)
    a.volume = 1
    const fail = () => {
      try { a.pause() } catch {}
      onFail()
    }
    a.onerror = fail
    a.play().catch(fail)
  } catch {
    onFail()
  }
}

export function playCorrect() {
  tryPlayUrl('/sounds/correct.mp3', () => {
    // simple "ding"
    beep(880, 180, 'sine', 0.15)
  })
}

export function playStrike() {
  tryPlayUrl('/sounds/strike.mp3', () => {
    // buzzer-like
    beep(220, 250, 'square', 0.12)
  })
}

export function playApplause() {
  tryPlayUrl('/sounds/applause.mp3', () => {
    // small arpeggio
    beep(523, 120, 'sine', 0.08)
    setTimeout(() => beep(659, 120, 'sine', 0.08), 130)
    setTimeout(() => beep(784, 160, 'sine', 0.1), 260)
  })
}
