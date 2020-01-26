<template>
  <div class="overview">
    <h3>Current Gold</h3>
    <div class="bytes">
      {{ bytes }}
    </div>
    <div class="bps">
      Gold Per Second: {{ bps }}
    </div>
    <div class="level">
      Current Level: {{ level }}
    </div>
    <div class="next-level">
      Gold Until Next Level: {{ bytesUntilLevelUp }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'overview',
  computed: {
    bytes () {
      return Math.round(this.$store.state.bytes);
    },
    bps () {
      return (this.$store.state.bps).toFixed(1);
    },
    level () {
      return this.$store.state.player.level;
    },
    bytesUntilLevelUp () {
      return this.$store.getters.bytesUntilLevelUp;
    }
  }
}
</script>

<style lang="scss" scoped>
.overview {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 0 25px 25px 25px;

  h3 {
    color: #fff;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 15px;
  }

  .bytes {
    width: 100%;
    min-width: 200px;
    max-width: fit-content;
    padding: 15px 25px;
    background-color: #36393f;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    color: #fff;
    font-size: 60px;
    font-weight: 900;
    text-align: center;
    margin-bottom: 30px;
  }

  .bps,
  .level,
  .next-level {
    margin-bottom: 15px;
    color: hsla(0,0%,100%,.6);
    font-size: 18px;
    font-weight: 500;
    text-align: center;
  }
}
</style>