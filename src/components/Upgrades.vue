<template>
  <div class="upgrades">
    <div 
      v-for="(upgrade, index) in upgrades" 
      :key="index" 
      class="upgrade"
    >
      <button :class="`btn btn-light btn-lg ${upgrade.disabled ? 'disabled' : ''}`" @click="(buyUpgrade($event, index))">
        <!--<i :class="upgrade.logo"></i>--> {{ upgrade.name }} {{ upgrade.disabled ? `(lvl: ${upgrade.unlocksAt})` : '' }}
      </button>
      <div class="details">
        <div class="cost"><i class="fas fa-coins fa-fw"></i> Cost: <span>{{ upgrade.cost }}</span></div>
        <div class="quantity">Quantity: <span>{{ upgrade.quantity }}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'upgrades',
  computed: {
    upgrades () {
      return this.$store.getters.availableUpgrades;
    }
  },
  methods: {
    buyUpgrade (event, index) {
      if (event.screenX > 0 ){
        this.$store.commit('buyUpgrade', {
          index,
          amount: 1
        });
      }
    }
  }
}
</script>

<style lang="scss">
.upgrades {
  background-color: #36393f;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,.2);
  border-radius: .50rem;
  padding: 25px;

  .upgrade {
    display: flex;
    justify-content: center;
    align-items: center;

    &:last-child {
      margin-bottom: 0;
    }

    .button,
    .cost,
    .quantity {
      margin: 0 15px;
      color: #ccc;

      span {
        color: #fff;
        margin-left: 5px;
        font-weight: 900;
      }
    }

    .details {
      flex: 1 1 100%;
    }
    .btn {
      width: 100%;
      margin: 10px 0;
      transition: .2s;

      &:focus {
        box-shadow: none;
        background-color: #ecf0f1;
      }

      &.disabled {
        color: #222;
        background-color: #ccc;
        border: 1px solid #ccc;
        pointer-events: none;
      }
    }
  }
}
</style>