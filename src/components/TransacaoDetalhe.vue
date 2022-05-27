<template>
  <div
    v-if="transacao"
    class="backdrop"
    :class="{ 'backdrop--block': isBlock }"
  >
    <div class="modal" :class="{ 'modal--block': isBlock }">
      <div class="modal__header">
        <h3 class="fs-3 text--uppercase text--normal">{{ transacao.title }}</h3>
        <span class="close fs-3" @click.stop="hideModal()">x</span>
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
  width: 600px;
  border-radius: 5px 5px 5px 5px;
  box-shadow: 0px 0px 15px 5px #888;
  background-color: #fff;
  position: relative;
  display: none;
  .modal__header {
    padding: 30px 40px 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $silver;
  }
  .modal__body {
    height: 300px;
    padding: 30px 70px;
  }
}

.modal--block {
  display: block;
}
</style>