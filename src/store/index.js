import { createStore } from 'vuex'
import axios from "axios";
const utils = require('../utils/index.js');

export default createStore({
  state: {
    listaTransacoes: null,
    transacao: null,
    erroMensagem:''
  },
  getters: {    
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
      state.listaTransacoes = utils.ordernarTransacoesPorData(listaTransacoes);
      state.listaTransacoes.map((transacao) => {return utils.normalizarDadosTransacoes(transacao)});
      state.erroMensagem = '';
    },
    carregarDetalhe(state, transacao) {
      state.transacao = transacao;
      utils.normalizarDadosTransacoes(state.transacao);
      state.erroMensagem = '';
    },
    erroCarregarTransacoes(state, error){
      console.log(error);
      state.listaTransacoes = null;
      state.erroMensagem = 'Ops! Não foi possível exibir suas transações.'
    },
    erroCarregarDetalhe(state, error){
      console.log(error);
      state.listaTransacoes = null;
      state.erroMensagem = 'Ops! Não foi possível exibir detalhes da transação.'
    }
  },
  actions: {
    async carregarTransacoes({ commit }) {
      await axios.get("https://warren-transactions-api.herokuapp.com/api/transactions")
        .then((response) => {
          commit('carregarTransacoes', response.data);
        }).catch((error) => {
          commit('erroCarregarTransacoes', error);
        })
    },
    async carregarDetalhe({ commit }, id) {
      await axios.get(`https://warren-transactions-api.herokuapp.com/api/transactions/${id}`)      
        .then((response) => {
          commit('carregarDetalhe', response.data);
        }).catch((error) =>{
          commit('erroCarregarDetalhe', error);
        })
    }
    
  },
  modules: {
  }
})
