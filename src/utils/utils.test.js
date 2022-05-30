const funcoesTransacao = require('./FuncoesTransacoes.js');
const normalizaDados = require('./NormalizarDados.js');

const transacoes = [    
    {
        "id": "5f89f9f271e4213092bd4e41",
        "title": "Depósito",
        "description": "excepteur veniam proident irure pariatur",
        "status": "created",
        "amount": 148856.29,
        "date": "2017-07-23",
        "from": "Trade",
        "to": "Conta Warren"
    },    
    {
        "id": "5f89f9f257fe42957bf6dbfd",
        "title": "Resgate",
        "description": "et labore proident aute nulla",
        "status": "processing",
        "amount": 2078.66,
        "date": "2018-12-22",
        "from": "Aposentadoria",
        "to": "Conta Warren"
    },
    {
        "id": "5f89f9f2f318e70ff298f528",
        "title": "Movimentação interna",
        "description": "eu officia laborum labore aute",
        "status": "processed",
        "amount": 25092.8,
        "date": "2016-08-25",
        "from": "Férias",
        "to": "Trade"
    },
]

test('Remoção de acentos', () => {
    expect(normalizaDados.removerAcentos(transacoes[2].title)).toBe('Movimentacao interna');
});

test('Converter Data para padrão pt-BR', () => {
    expect(normalizaDados.normalizarData(transacoes[1].date)).toBe('22/12/2018');
});

test('Converter Valor para padrão pt-BR', () => {
    expect(normalizaDados.normalizarValor(transacoes[1].amount)).toBe("R$ 2.078,66");
});


/*Conversão Status*/
test('Converter Status para Português - Created > Solicitado', () => {
    expect(normalizaDados.normalizarStatus(transacoes[0].status)).toBe("Solicitada");
});

test('Converter Status para Português - Processing > Processado', () => {
    expect(normalizaDados.normalizarStatus(transacoes[1].status)).toBe("Processada");
});

test('Converter Status para Português - Processed > Concluído', () => {
    expect(normalizaDados.normalizarStatus(transacoes[2].status)).toBe("Concluída");
});

/*Ordenação por Data*/
test('Ordenar transações por Data', () => {
    expect(funcoesTransacao.ordernarTransacoesPorData(transacoes)).toEqual(
        [
            {
                "id": "5f89f9f257fe42957bf6dbfd",
                "title": "Resgate",
                "description": "et labore proident aute nulla",
                "status": "processing",
                "amount": 2078.66,
                "date": "2018-12-22",
                "from": "Aposentadoria",
                "to": "Conta Warren"
            },
            {
                "id": "5f89f9f271e4213092bd4e41",
                "title": "Depósito",
                "description": "excepteur veniam proident irure pariatur",
                "status": "created",
                "amount": 148856.29,
                "date": "2017-07-23",
                "from": "Trade",
                "to": "Conta Warren"
            },
            {
                "id": "5f89f9f2f318e70ff298f528",
                "title": "Movimentação interna",
                "description": "eu officia laborum labore aute",
                "status": "processed",
                "amount": 25092.8,
                "date": "2016-08-25",
                "from": "Férias",
                "to": "Trade"
            }
        ]
    );
});

test('Normalizar dados transação', () => {
    expect(funcoesTransacao.normalizarDadosTransacoes(transacoes[2])).toEqual(
        {
            "id": "5f89f9f2f318e70ff298f528",
            "title": "Movimentação interna",
            "description": "eu officia laborum labore aute",
            "status": "Concluída",
            "amount": "R$ 25.092,80",
            "date": "25/08/2016",
            "from": "Férias",
            "to": "Trade"
        }
    );
});
