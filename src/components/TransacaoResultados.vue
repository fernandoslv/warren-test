<template>
  <TransacaoFiltro
    v-on:filtarPorStatusPorTitulo="TransacoesPorStatusPorTitulo"
  />
  <LoaderSearch v-if="!transacoes && !erroMensagem" />
  <div class="responsive" v-else>
    <table class="table">
      <thead class="thead">
        <tr>
          <th class="th text--white text--normal text--uppercase fs-6">
            Título
          </th>
          <th class="th text--white text--normal text--uppercase fs-6">Data</th>
          <th class="th text--white text--normal text--uppercase fs-6">
            Descrição
          </th>
          <th class="th text--white text--normal text--uppercase fs-6">
            Status
          </th>
          <th class="th text--white text--normal text--uppercase fs-6">
            Valor
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="transacoes?.length">
          <tr
            @click="selecionarTransacao(item.id)"
            v-for="item in transacoes"
            :key="item.id"
          >
            <td class="td text--left text--uppercase">{{ item.title }}</td>
            <td class="td text--left text--uppercase">{{ item.date }}</td>
            <td class="td text--left">{{ item.description }}</td>
            <td
              class="td text--center text--white text--uppercase text--bold"
              :class="{
                'bg--concluida': item.status == 'processed',
                'bg--processada': item.status == 'processing',
                'bg--solicitada': item.status == 'created',
              }"
            >
              {{ item.status }}
            </td>
            <td class="td text--bold text--right">{{ item.amount }}</td>
          </tr>
          <TransacaoDetalhe ref="modal" />
        </template>
        <tr v-else>
          <td colspan="5">
            <TransacaoErroMensagem
              v-if="erroMensagem"
              :mensagemErro="erroMensagem"
            />
            <TransacaoErroMensagem
              v-else
              mensagemErro="Nenhuma transação corresponde aos filtros utilizados."
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import LoaderSearch from "./LoaderSearch.vue";
import TransacaoDetalhe from "./TransacaoDetalhe.vue";
import TransacaoFiltro from "./TransacaoFiltros.vue";
import TransacaoErroMensagem from "./TransacaoErroMensagem.vue";

export default {
  name: "TransacaoResultados",
  components: {
    LoaderSearch,
    TransacaoDetalhe,
    TransacaoFiltro,
    TransacaoErroMensagem    
  },
  data() {
    return {
      transacaoId: null,
      modal: false,
      transacoes: null,
    };
  },
  computed: {
    ...mapState(["erroMensagem"]),
    ...mapGetters([
      "transacoesPorStatusPorFiltro",
      "transacoesPorStatusTodos",
      "transacoesPorStatusSolicitada",
      "transacoesPorStatusProcessada",
      "transacoesPorStatusConcluida",
    ]),
  },
  async mounted() {
    await this.carregarTransacoes();
  },
  methods: {
    TransacoesPorStatusPorTitulo(filtros) {
      this.transacoes = this.$store.getters.transacoesPorStatusPorTitulo(
        filtros.statusValue,
        filtros.inputValue
      );
    },
    TransacoesPorStatusTodos() {
      this.transacoes = this.$store.getters["transacoesPorStatusTodos"];
    },
    TransacoesPorStatusSolicitada() {
      this.transacoes = this.$store.getters["transacoesPorStatusSolicitada"];
    },
    TransacoesPorStatusProcessada() {
      this.transacoes = this.$store.getters["transacoesPorStatusProcessada"];
    },
    TransacoesPorStatusConcluida() {
      this.transacoes = this.$store.getters["transacoesPorStatusConcluida"];
    },
    async carregarTransacoes() {
      await this.$store.dispatch("carregarTransacoes");
      this.transacoes = this.$store.state.listaTransacoes;
    },
    async selecionarTransacao(id) {
      this.$refs.modal.showModal(id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.table {
  caption-side: bottom;
  border-collapse: collapse;
  border: 0;
  width: 100%;

  -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 0.5s; /* Firefox < 16 */
  -ms-animation: fadein 0.5s; /* Internet Explorer */
  -o-animation: fadein 0.5s; /* Opera < 12.1 */
  animation: fadein 0.5s;
  .thead {
    vertical-align: bottom;
    th {
      background: $silver;
      padding: 8px 8px;
      border: 1px solid $silver;
    }
  }
  tbody {
    tr:hover {
      background: #bcc8d6 !important;
    }
    tr:nth-child(even) {
      background: #fff;
    }
    tr:nth-child(odd) {
      background: #ebf1f8;
    }
  }
  .th {
    display: table-cell;
    vertical-align: inherit;
    font-weight: bold;
  }
  .td {
    display: table-cell;
    border: 1px solid #ddd;
    padding: 8px 10px;
    font-size: 0.85rem;
    cursor: pointer;
  }
}
</style>