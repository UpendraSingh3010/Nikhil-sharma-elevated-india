// Ambient soundscape synthesizer using native Web Audio API
// Generates an ethereal, warm Indian palace twilight drone (gentle tanpura harmonic resonance)

class AmbientSoundscape {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.oscillators = [];
    this.masterGain = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
  }

  start() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) return;

    const now = this.ctx.currentTime;
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.001, now);
    this.masterGain.gain.exponentialRampToValueAtTime(0.08, now + 3); // Soft ambient volume
    this.masterGain.connect(this.ctx.destination);

    // Warm Tanpura C# Drone harmonics (138.59 Hz base, plus overtone fifth 207.65 Hz and octave 277.18 Hz)
    const baseFreq = 138.59;
    const freqs = [baseFreq, baseFreq * 1.5, baseFreq * 2, baseFreq * 3.01];

    this.oscillators = freqs.map((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = i === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(f, now);

      // Subtle warm detuning / slow chorusing for authentic living atmosphere
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.1 + i * 0.07, now);
      lfoGain.gain.setValueAtTime(0.8, now);
      lfo.connect(osc.frequency);
      lfo.start();

      const relativeGain = 0.25 / (i + 1);
      gain.gain.setValueAtTime(relativeGain, now);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start();

      return { osc, lfo };
    });

    this.isPlaying = true;
  }

  stop() {
    if (!this.isPlaying || !this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

    setTimeout(() => {
      this.oscillators.forEach(({ osc, lfo }) => {
        try {
          osc.stop();
          lfo.stop();
          osc.disconnect();
        } catch {
          // ignore already stopped
        }
      });
      this.oscillators = [];
      this.isPlaying = false;
    }, 1600);
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

export const soundscape = new AmbientSoundscape();
