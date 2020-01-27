import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bytes: 0,
    totalBytes: 0,

    // Bytes per second
    bps: 0,

    // Bytes per keypress
    bpk: 1,

    player: {
      name: "",
      level: 0,

      // Bytes needed for next level
      nextLevel: 100,

      // After each level increase by 3 - EG: 3*100 = 300 so 200 bytes for next level
      increase: 3
    },
    power_ups: [],
    // upgrades: [
    //   {
    //     name: "Intern",
    //     cost: 50,
    //     increase: 1.15,
    //     bps: 0.1,
    //     quantity: 0,
    //     unlocksAt: 0
    //   },
    //   {
    //     name: "Junior Developer",
    //     cost: 100,
    //     increase: 1.2,
    //     bps: 0.5,
    //     quantity: 0,
    //     unlocksAt: 1
    //   },
    //   {
    //     name: "Web Developer",
    //     cost: 300,
    //     increase: 1.4,
    //     bps: 1,
    //     quantity: 0,
    //     unlocksAt: 2
    //   },
    //   {
    //     name: "Senior Developer",
    //     cost: 500,
    //     increase: 1.4,
    //     bps: 3,
    //     quantity: 0,
    //     unlocksAt: 3
    //   }
    // ],

    // Fantasy Theme
    upgrades: [
      {
        logo: "fas fa-shield-alt",
        name: "Pleb",
        cost: 50,
        increase: 1.15,
        bps: 2,
        quantity: 0,
        unlocksAt: 0
      },
      {
        name: "Warrior",
        cost: 100,
        increase: 1.2,
        bps: 4,
        quantity: 0,
        unlocksAt: 1
      },
      {
        name: "Archer",
        cost: 300,
        increase: 1.4,
        bps: 8,
        quantity: 0,
        unlocksAt: 2
      },
      {
        name: "Knight",
        cost: 500,
        increase: 1.4,
        bps: 14,
        quantity: 0,
        unlocksAt: 3
      },
      {
        name: "Juggernaut",
        cost: 700,
        increase: 1.4,
        bps: 20,
        quantity: 0,
        unlocksAt: 4
      },
      {
        name: "Tower",
        cost: 1000,
        increase: 1.4,
        bps: 35,
        quantity: 0,
        unlocksAt: 5
      },
      {
        name: "Fort",
        cost: 1600,
        increase: 1.4,
        bps: 70,
        quantity: 0,
        unlocksAt: 6
      },
      {
        name: "Castle",
        cost: 3000,
        increase: 1.4,
        bps: 120,
        quantity: 0,
        unlocksAt: 7
      },
      {
        name: "Fortress",
        cost: 6000,
        increase: 1.4,
        bps: 300,
        quantity: 0,
        unlocksAt: 8
      }
    ]
  },
  mutations: {
    incrementBytes: (state, increment) => {
      state.bytes += increment;
      state.totalBytes += increment;
    },
    levelUp: state => {
      state.player.level++;
      state.player.nextLevel *= state.player.increase;
    },
    buyUpgrade: (state, {index, amount}) => {
      if (state.bytes >= state.upgrades[index].cost) {
        state.bytes -= state.upgrades[index].cost;
        state.upgrades[index].quantity += amount;
        state.upgrades[index].cost = Math.round(state.upgrades[index].cost * state.upgrades[index].increase);
      } else {
        Vue.toasted.show('<i class="fas fa-exclamation-circle"></i> You need more gold!', {
          theme: "bubble",
          position: "bottom-center",
          duration: 5000
        });
      }
    },
    bytesPerSecond: state => {
      state.bps = 0;
      state.upgrades.forEach(upgrade => {
        state.bps += (upgrade.bps * upgrade.quantity);
        state.bytes += (upgrade.bps * upgrade.quantity) / 60;
        state.totalBytes += (upgrade.bps * upgrade.quantity) / 60;
      });
    }
  },
  getters: {
    bytesUntilLevelUp: state => {
      return Math.round(state.player.nextLevel - state.totalBytes);
    },
    availableUpgrades: state => {
      return state.upgrades.filter(upgrade => {
        if (upgrade.unlocksAt <= state.player.level) {
          upgrade.disabled = false;
          return upgrade;
        } else if (upgrade.unlocksAt - 1 == state.player.level) {
          upgrade.disabled = true;
          return upgrade;
        }
      });
    }
  }
})
