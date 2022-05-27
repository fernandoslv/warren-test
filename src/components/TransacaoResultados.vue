<template>
  <LoaderSearch v-if="!listaTransacoes" />

  <table v-if="listaTransacoes" class="table">
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
        v-for="item in listaTransacoes"
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
import { mapState } from "vuex";
import LoaderSearch from "./LoaderSearch.vue";
import TransacaoDetalhe from "./TransacaoDetalhe.vue";

export default {
  name: "TransacaoResultados",
  components: { LoaderSearch, TransacaoDetalhe },  
  data() {
    return {      
      transacaoId: null,
      modal:false
    };
  },
  computed: mapState(["listaTransacoes"]),
  async mounted() {
    this.carregarTransacoes();
  },
  methods: {
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