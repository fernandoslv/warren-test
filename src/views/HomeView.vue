<template>
  <HeaderApp />
  <TituloPagina titulo="Minhas Transações"/>
  <div class="container">
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
};
</script>
