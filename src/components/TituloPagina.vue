<template>
  <div class="container container--border container--space">
    <div class="fs">
      <h1 class="titulo fs-1 text--left">{{ titulo }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "TituloPagina",
  props: ["titulo"],
};
</script>
<style lang="scss" scoped>
.container{
    &--border{        
        border-bottom: 1px solid #ddd;
    }
    &--space{
        padding: 0 0 10px 0;
    }
}
</style>