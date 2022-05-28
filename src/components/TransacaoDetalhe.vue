<template>
  <div
    v-if="transacao"
    class="backdrop"
    :class="{ 'backdrop--block': isBlock }"
  >
    <div class="modal" :class="{ 'modal--block': isBlock }">
      <div class="modal__header">
        <h3 class="fs-4 text--uppercase text--center text--normal">{{ transacao.title }}</h3>
        <span class="close" @click.stop="hideModal()">x</span>
      </div>
      <div class="modal__body">
        <TransacaoStatusBar :status="transacao.status" />
        <TransacaoValores
          :amount="transacao.amount"
          :from="transacao.from"
          :to="transacao.to"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TransacaoStatusBar from "./TransacaoStatusBar.vue";
import TransacaoValores from "./TransacaoValores.vue";
//import axios from "axios";

export default {
  name: "TransacaoDetalhe",
  components: { TransacaoStatusBar, TransacaoValores },
  props: ["transacaoId"],
  data() {
    return {
      isBlock: null,
    };
  },
  computed: mapState(["transacao"]),
  mounted() {},
  updated() {},
  methods: {
    hideModal() {
      this.isBlock = false;
    },
    showModal() {      
      this.isBlock = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

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
    justify-content:space-between;
    align-items: center;
    color: $silver;
    border-bottom: 1px solid $silver;
    .close{        
        background-color: $silver;        
        color: $white;
        border-radius: 16px;
        width: 32px;      
        height: 32px;
        padding: 7px 10px;        
    }
  }
  .modal__body {
    height: 240px;
    padding: 20px 30px;
  }
}

@media only screen and (min-width: 601px){
    .modal{
        width: 500px;        
    }
}
@media only screen and (max-width: 600px){
    .modal{
        width: 100%;        
    }
}

.modal--block {
  display: block;
}
</style>