<template>
  <div class="mensagem mensagem--erro">
    <span class="fs-5 text--silver">
      {{ mensagemErro }}
    </span>
  </div>
</template>
<script>
export default {
  name: "TransacaoErroMensagem",
  props: ["mensagemErro"],
};
</script>
<style lang="scss" scoped>
.mensagem {  
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  border-radius: 5px;
  &--erro {
    border: 2px solid #e5a2a5;
    background-color: #fed9db;
  }
  span{     
  }
}
</style>