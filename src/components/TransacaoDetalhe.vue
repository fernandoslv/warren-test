<template>
  <div        
    class="backdrop"
    :class="{ 'backdrop--block': isBlock }"
  >
    <div class="modal" :class="{ 'modal--block': isBlock }">
      <div class="modal__header">        
        <h3 class="titulomodal fs-5 text--uppercase text--center text--normal">
            Detalhes da Transação
        </h3>
        <span class="close" @click.stop="hideModal()">x</span>
      </div>
      <div v-if ='detalhe' class="modal__body">
        <h4 v-if ='detalhe' class="titulodetalhe fs-3 text--uppercase text--center text--normal">
          {{ detalhe.title }}
        </h4>        
        <TransacaoStatusBar :status="detalhe.status" />
        <TransacaoValores
          :amount="detalhe.amount"
          :from="detalhe.from"
          :to="detalhe.to"
          :date="detalhe.date"
        />        
      </div>
        <TransacaoErroMensagem v-if="erroMensagem" :mensagemErro="erroMensagem"/>
    </div>    
  </div>
</template>

<script>
import { mapState } from "vuex";
import TransacaoStatusBar from "./TransacaoStatusBar.vue";
import TransacaoValores from "./TransacaoValores.vue";
import TransacaoErroMensagem from "./TransacaoErroMensagem.vue";

export default {
  name: "TransacaoDetalhe",
  components: { TransacaoStatusBar, TransacaoValores, TransacaoErroMensagem },
  props: ["transacaoId"],
  data() {
    return {
      isBlock: null,
      detalhe: null,
    };
  },
  computed: mapState(["transacao", "erroMensagem"]),
  mounted() {},
  updated() {},
  methods: {
    hideModal() {
      this.isBlock = false;
    },
    async showModal(id) {
      this.detalhe = null;
      this.isBlock = true;
      await this.$store.dispatch("carregarDetalhe", id);
      this.detalhe = this.$store.state.transacao;      
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.close {
  padding: 5px;
  cursor: pointer;
}

.backdrop {
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  display: none;
}
.backdrop--block {
  display: flex;
}

.modal {
  border-radius: 5px 5px 5px 5px;
  box-shadow: 0px 0px 15px 5px #888;
  background-color: #fff;
  position: relative;
  display: none;
  .modal__header {
    padding: 20px 20px 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $silver;
    border-bottom: 1px solid $secondary;
    .close {
      background-color: $silver;
      color: $white;
      border-radius: 16px;
      width: 32px;
      height: 32px;
      padding: 7px 10px;
    }
  }
  .modal__body {
    height: 280px;
    padding: 20px 30px;    
  }  
}

@media only screen and (min-width: 601px) {
  .modal {
    width: 500px;
  }
}
@media only screen and (max-width: 600px) {
  .modal {
    width: 100%;
  }
}

.modal--block {
  display: block;
}
</style>