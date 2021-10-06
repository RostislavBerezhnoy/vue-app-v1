<template>
  <div class="fixed-action-btn">
    <router-link class="btn-floating btn-large blue" to="/electricity-metering-points/create">
      <i class="large material-icons">add</i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "AddButton"
}
</script>

<style scoped>
  .btn-floating.btn-large i {
    line-height: 65px !important;
  }

  .btn-floating.btn-large {
    width: 65px !important;
    height: 65px !important;
  }

  .fixed-action-btn {
    right: 40px !important;
    bottom: 40px !important;
  }

  .btn-large i {
    font-size: 2rem !important;
  }
</style>
