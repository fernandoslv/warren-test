<template>
  <div class="container container--center">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: "LoaderSearch",
};
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.loader {
  border: 10px solid $secondary; /* Light grey */
  border-top: 10px solid $silver; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>