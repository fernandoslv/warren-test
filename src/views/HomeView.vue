<template>
  <HeaderApp />
  <TituloPagina titulo="Minhas Transações"/>
  <div class="container container--mb">
    <TransacaoResultados />
  </div>  
</template>

<script>
// @ is an alias to /src
import HeaderApp from "@/components/HeaderApp.vue";
import TransacaoResultados from "@/components/TransacaoResultados.vue";
import TituloPagina from "@/components/TituloPagina.vue";

export default {
  name: "HomeView",
  components: {
    HeaderApp,
    TransacaoResultados,
    TituloPagina  
  },
  mounted() {
    document.title = 'Warren - Minhas Transações'
  }
};
</script>
<style lang="scss" scoped>
.container{
  &--mb{
    margin-bottom: 100px;
  }
}
</style>
