
// examples to be stored as example-${exampleID}-model-${modelId}.mp3 (!)
function audioExamples() {
  return {
    models: [
      { id: 0, name: "Original ASVSpoof2019" },
      { id: 1, name: "EnCodec" },
      { id: 2, name: "Lyra-V2" },
      { id: 3, name: "Descript Audio Codec" },
      { id: 4, name: "L3AC" },
      { id: 5, name: "Speech Tokenizer" },
      // add more models as needed
    ],
    examples: [
      { id: 1, label: "LA_E_2005096" },
      { id: 2, label: "LA_E_2055100" },
      { id: 3, label: "LA_E_5897967" },
      { id: 4, label: "LA_E_7566841" },
    ],

    // track which cell is currently playing: { exampleId, modelId } or null
    current: null,

    getAudioSrc(exampleId, modelId) {
      // adjust path/extension as needed
      return `static/audio/example-${exampleId}-model-${modelId}.mp3`;
    },

    audioId(exampleId, modelId) {
      return `audio-e${exampleId}-m${modelId}`;
    },

    isPlaying(exampleId, modelId) {
      return (
        this.current &&
        this.current.exampleId === exampleId &&
        this.current.modelId === modelId
      );
    },

    stopCurrent() {
      if (!this.current) return;
      const id = this.audioId(this.current.exampleId, this.current.modelId);
      const audio = document.getElementById(id);
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      this.current = null;
    },

    toggle(exampleId, modelId) {
      // if clicking the currently playing cell -> stop it
      if (this.isPlaying(exampleId, modelId)) {
        this.stopCurrent();
        return;
      }

      // stop any other playing audio
      this.stopCurrent();

      // play the new one
      const id = this.audioId(exampleId, modelId);
      const audio = document.getElementById(id);
      if (audio) {
        audio.play();
        this.current = { exampleId, modelId };
        // when it ends, clear state
        audio.onended = () => {
          if (this.isPlaying(exampleId, modelId)) {
            this.current = null;
          }
        };
      }
    },
  };
}
