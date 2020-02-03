<template>
  <div class="overview">
    <div class="bytes">
      Current Gold <br><span>{{ bytes }}</span>
    </div>
    <div class="bps">
      Gold Per Second: <br> <span>{{ bps }}</span>
    </div>
    <div class="level">
      Current Level: <br> <span>{{ level }}</span>
    </div>
    <div class="next-level">
      Gold Until Next Level: <br> <span>{{ bytesUntilLevelUp }}</span>
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

  .bytes {
    min-width: 230px;
    max-width: fit-content;
    padding: 15px 25px;
    background-color: #36393f;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    font-weight: 500;
    font-size: 17px;
    color: hsla(0,0%,100%,.6);
    text-align: center;
    margin-bottom: 30px;

    span {
      color: #fff;
      font-size: 60px;
      font-weight: 900;
    }
  }

  .bps,
  .level,
  .next-level {
    margin-bottom: 15px;
    color: hsla(0,0%,100%,.6);
    padding: 15px 25px;
    background-color: #36393f;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    min-width: 230px;
    font-size: 17px;
    font-weight: 500;
    text-align: center;

    span {
      color: #fff;
      margin-left: 5px;
      font-weight: 900;
      font-size: 25px;
    }
  }
}
</style>