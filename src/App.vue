<template>
  <div id="game">
    <div class="container">
      <div class="header">
        <img src="./assets/logo.png" class="img-fluid" alt="logo">
        <h1>Clicker Game</h1>
      </div>
      <div class="row">
        <div class="col-md-6">
          <Upgrades />
        </div>
        <div class="col-md-6">
          <Overview />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Overview from './components/Overview';
import Upgrades from './components/Upgrades';

export default {
  name: 'app',
  components: {
    Overview,
    Upgrades
  },
  methods: {
    coding () {
      this.$store.commit('incrementBytes', this.$store.state.bpk);
    },
    loop () {
      // GAME LOOP
      this.$store.commit('bytesPerSecond');
      this.levelManager();
      requestAnimationFrame(this.loop);
    },
    levelManager () {
      if (this.$store.getters.bytesUntilLevelUp <= 0) {
        this.$store.commit('levelUp');
      }
    }
  },
  created () {
    this.loop();
    window.addEventListener('keypress', this.coding);
  },
  destroyed () {
    window.removeEventListener('keypress', this.coding);
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #2f3136 !important;
}

#game {
  margin-top: 5vh;

  .header {
    text-align: center;
    color: #fff;
    margin-bottom: 100px;

    img {
      margin-bottom: 20px;
    }
  }
}
</style>
