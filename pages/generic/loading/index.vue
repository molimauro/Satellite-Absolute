<template src="./Loading.html"></template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LoadingScreen',
  data() {
    return {
      step: 'Preloading',
      totalSteps: 3,
      stepsCompleted: 0,
    }
  },
  computed: {
    // In the rare case our state isn't bound yet
    // (Can happen with persistedStates)
    // Go ahead and load it.
    loadedState(): Boolean {
      return (
        this.$store.state.prerequisites &&
        this.$store.state.prerequisites.stateLoaded
      )
    },
    // Ensure we're bound to the P2P servers
    peer2peerBound(): Boolean {
      return this.$store.state.prerequisites.peer2PeerBound
    },
    // Ensure the blockchain is bound
    blockchainBound(): Boolean {
      return this.$store.state.prerequisites.blockchainBound
    },
    // Helper method for prettier loading messages
    loadingStep(): String {
      return `${this.$data.stepsCompleted}/${this.$data.totalSteps} ${this.step}`
    },
  },
  watch: {
    peer2peerBound(val) {
      if (val) {
        this.completeP2P()
      }
    },
    blockchainBound(val) {
      if (val) {
        this.$data.step = 'Blockchain Bound'
        this.$data.stepsCompleted += 1
      }
    },
  },
  mounted() {
    // Check on mount, this prevents race conditions.
    if (this.loadedState) this.completeState()
    if (this.peer2peerBound) this.completeP2P()
    if (this.blockchainBound) this.completeBlockchain()
  },
  methods: {
    completeP2P() {
      this.$data.step = 'Peer 2 Peer Bound'
      this.$data.stepsCompleted += 1
    },
    completeBlockchain() {
      this.$data.step = 'Blockchain Bound'
      this.$data.stepsCompleted += 1
    },
    completeState() {
      this.$data.step = 'State Initalized'
      this.$data.stepsCompleted += 1
    },
  },
})
</script>

<style lang="less" scoped src="./Loading.less"></style>
