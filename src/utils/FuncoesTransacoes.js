const normalizaDados = require('./NormalizarDados.js');
module.exports = {
    ordernarTransacoesPorData: (transacoes) => {
        return transacoes.sort((a, b) => {
            if (new Date(a.date) > new Date(b.date)) {
                return -1;
            } else {
                return true;
            }
        })
    },
    normalizarDadosTransacoes: (transacao) => {
        transacao.date = normalizaDados.normalizarData(transacao.date)
        transacao.amount = normalizaDados.normalizarValor(transacao.amount)
        return transacao;
    }
}