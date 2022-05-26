<template>
<LoaderSearch v-if="loading"/>

  <table v-if="!loading" class="table">
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
      <tr @click="selecionarTransacao(item.id)" v-for="item in results" :key="item.id">
        <td class="td">{{ item.title }}</td>
        <td class="td">{{ item.description }}</td>
        <td class="td">{{ item.status }}</td>
        <td class="td">{{ item.amount }}</td>
      </tr>
    </tbody>
  </table>
  <TransacaoDetalhe/>
</template>

<script>
import axios from "axios";
import LoaderSearch from './LoaderSearch.vue'
import TransacaoDetalhe from './TransacaoDetalhe.vue'

export default {
  name: "TransacaoResultados",
  components:{LoaderSearch, TransacaoDetalhe},
  emits: ['transacao-selecionada'],
  data() {
    return {
      results: null,
      loading: true,
      transacaoId: null
    };
  },  
  mounted() {
    this.carregarTransacoes();
  },
  methods: {
    async carregarTransacoes() {
      this.loading = true;      
      axios
        .get("https://warren-transactions-api.herokuapp.com/api/transactions")
        .then((response) => {
          this.results = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
    },
    selecionarTransacao(id){
      this.transacaoId = id;
      TransacaoDetalhe.methods.carregarDetalhe(id);      
    }
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