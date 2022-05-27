<template>
  <TransacaoFiltro v-on:filtarPorSolicitada="apenasTransacoesPorStatusSolicitada"/>
  <LoaderSearch v-if="!transacoesPorStatusTodos" />

  <table v-if="transacoesPorStatusTodos" class="table">
    <thead class="thead">
      <tr>
        <th class="th text--white text--normal text--uppercase fs-5">Título</th>
        <th class="th text--white text--normal text--uppercase fs-5">
          Descrição
        </th>
        <th class="th text--white text--normal text--uppercase fs-5">Status</th>
        <th class="th text--white text--normal text--uppercase fs-5">Valor</th>
      </tr>
    </thead>
    <tbody>
      <tr
        @click="selecionarTransacao(item.id)"
        v-for="item in transacoesPorStatusTodos"
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
import { mapGetters } from "vuex";
import LoaderSearch from "./LoaderSearch.vue";
import TransacaoDetalhe from "./TransacaoDetalhe.vue";
import TransacaoFiltro from "./TransacaoFiltros.vue";

export default {
  name: "TransacaoResultados",
  components: { LoaderSearch, TransacaoDetalhe, TransacaoFiltro },  
  data() {
    return {      
      transacaoId: null,
      modal:false,
      transacoes:null
    };
  },
  computed:{    
    //mapState(["listaTransacoes"]),    
    ...mapGetters(["transacoesPorStatusPorFiltro","transacoesPorStatusTodos", "transacoesPorStatusSolicitada", "transacoesPorStatusProcessada", "transacoesPorStatusConcluida"])
  },  
  async mounted() {
    this.carregarTransacoes();
  },
  methods: {
    apenasTransacoesPorStatusSolicitada(){      
      this.transacoes = this.$store.transacoesPorStatusSolicitada;
    },
    async carregarTransacoes() {
      await this.$store.dispatch("carregarTransacoes")        
    },
    async selecionarTransacao(id) {    
      await this.$store.dispatch("carregarDetalhe", id);
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

  -webkit-animation: fadein .5s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein .5s; /* Firefox < 16 */
  -ms-animation: fadein .5s; /* Internet Explorer */
  -o-animation: fadein .5s; /* Opera < 12.1 */
  animation: fadein .5s;
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