module.exports = {
    removerAcentos: (str) => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    },
    normalizarData: (data) => {
        let dataformatada = new Date(data.replace('-', '/')).toLocaleDateString()
        return dataformatada
    },
    normalizarValor: (valor) => {
        let valorFormatado = valor.toLocaleString('pt-br', { minimumFractionDigits: 2 });
        return `R$ ${valorFormatado}`
    },
    normalizarStatus: (status) => {
        let statusFormatado = ''
        switch (status) {
            case 'created':
                statusFormatado = 'Solicitada';
                break;
            case 'processing':
                statusFormatado = 'Processada';
                break;
            case 'processed':
                statusFormatado = 'Concluída';
                break;            
        }
        return statusFormatado;
    }
}
