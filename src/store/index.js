import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    listaTransacoes: null,
    transacao: null
  },
  getters: {
    transacoesPorStatusTodos(state) {
      return state.listaTransacoes
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
      return state.listaTransacoes?.filter(t => t.status == "processed")?.filter( t => t.title.includes('Resgate'));
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
    carregarTransacoes({ commit }) {
      axios.get("https://warren-transactions-api.herokuapp.com/api/transactions")
        .then((response) => {
          commit('carregarTransacoes', response.data);
        })
    },
    carregarDetalhe({ commit }, id) {
      axios.get(`https://warren-transactions-api.herokuapp.com/api/transactions/${id}`)
        .then((response) => {
          commit('carregarDetalhe', response.data);
        })
    },
  },
  modules: {
  }
})
