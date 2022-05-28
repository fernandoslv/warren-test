import { createStore } from 'vuex'
import axios from "axios";
const utils = require('../utils/index.js');

export default createStore({
  state: {
    listaTransacoes: null,
    transacao: null
  },
  getters: {
    transacoesPorStatusTodos(state) {
      return state.listaTransacoes;
    },
    transacoesPorStatusSolicitada(state) {
      return state.listaTransacoes?.filter(transacao => transacao.status == "created")
    },
    transacoesPorStatusProcessada(state) {
      return state.listaTransacoes?.filter(transacao => transacao.status == "processing")
    },
    transacoesPorStatusConcluida(state) {
      return state.listaTransacoes?.filter(transacao => transacao.status == "processed")
    },
    transacoesPorStatusPorFiltro(state) {
      return state.listaTransacoes?.filter(t => t.status == "processed")?.filter(t => t.title.includes('Resgate'));
    },
    transacoesPorStatusPorTitulo: (state) => (status, titulo) => {
      let filtrado = state.listaTransacoes.filter(t => utils.removerAcentos(t.title).toUpperCase().includes( utils.removerAcentos(titulo.toUpperCase())));
      if(status!='0'){
        filtrado = filtrado?.filter(t => t.status == status);      
      }
      return filtrado;
    }
  },
  mutations: {
    carregarTransacoes(state, listaTransacoes) {
      state.listaTransacoes = listaTransacoes;
    },
    carregarDetalhe(state, transacao) {
      state.transacao = transacao;
    }
  },
  actions: {
    async carregarTransacoes({ commit }) {
      await axios.get("https://warren-transactions-api.herokuapp.com/api/transactions")
        .then((response) => {
          commit('carregarTransacoes', response.data);
        })
    },
    async carregarDetalhe({ commit }, id) {
      await axios.get(`https://warren-transactions-api.herokuapp.com/api/transactions/${id}`)
        .then((response) => {
          commit('carregarDetalhe', response.data);
        })
    }
    
  },
  modules: {
  }
})
