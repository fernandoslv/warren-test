module.exports = {
    removerAcentos: (str) => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    },
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
        transacao.date = new Date(transacao.date).toLocaleDateString();
        transacao.amount = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(transacao.amount);        
        return transacao;
    }

}