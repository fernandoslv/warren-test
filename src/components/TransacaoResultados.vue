<template>
  <TransacaoFiltro v-on:filtarPorStatusPorTitulo="TransacoesPorStatusPorTitulo"/>
  <LoaderSearch v-if="!transacoes" />
  <table v-if="transacoes" class="table">
    <thead class="thead">
      <tr>
        <th class="th text--white text--normal text--uppercase fs-5">Título</th>
        <th class="th text--white text--normal text--uppercase fs-5">Descrição</th>
        <th class="th text--white text--normal text--uppercase fs-5">Status</th>
        <th class="th text--white text--normal text--uppercase fs-5">Valor</th>
      </tr>
    </thead>
    <tbody>
      <tr
        @click="selecionarTransacao(item.id)"
        v-for="item in transacoes"
        :key="item.id"
      >
        <td class="td">{{ item.title }}</td>
        <td class="td">{{ item.description }}</td>
        <td class="td">{{ item.status }}</td>
        <td class="td">{{ item.amount }}</td>
      </tr>
    </tbody>
  </table>
  <TransacaoDetalhe ref="modal" />
</template>

<script>
import { mapGetters, mapState } from "vuex";
import LoaderSearch from "./LoaderSearch.vue";
import TransacaoDetalhe from "./TransacaoDetalhe.vue";
import TransacaoFiltro from "./TransacaoFiltros.vue";

export default {
  name: "TransacaoResultados",
  components: { LoaderSearch, TransacaoDetalhe, TransacaoFiltro },
  data() {
    return {
      transacaoId: null,
      modal: false,
      transacoes: null,
    };
  },
  computed: {
    ...mapState,
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
    TransacoesPorStatusPorTitulo(filtros){      
      this.transacoes = this.$store.getters.transacoesPorStatusPorTitulo(filtros.statusValue, filtros.inputValue);      
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
      this.$store.dispatch("carregarDetalhe", id);
      this.$refs.modal.showModal();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

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
      padding: 12px 12px;
      border: 1px solid #ddd;
    }
  }
  tbody {
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
    padding: 12px 10px;
    font-size: 0.85rem;
    cursor: pointer;
  }
}
</style>