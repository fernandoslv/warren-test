# Warren Transacoes - Test

Projeto desenvolvido para o teste de seleção de Frontend Developer da Warren.
O projeto consiste numa aplicação que consome uma API de Transações Financeira, com um endpoint que retorna uma lista Transações e outro com o Detalhamento da Transação.

Conforme documentação disponibilizada, os requisitos da aplicação são:
- Apresentar a lista de Transações ordenadas por Data;
- Exibir o Detalhamento da Transação numa janela modal;
- Filtrar transações por Título;
- Filtrar transações por Status.

Seguindo o protótipo inicial disponibilizado na documentação do desafio, criei um nova representação visual da aplicação por meio do AdobeXD o que permitiu testar alguns conceitos de design e UX antes de implementar a solução.
Para visualizar o design criado, acesse: https://xd.adobe.com/view/2786cb8f-e999-4180-b9d5-d771325a0eae-72d5/?fullscreen

A aplicação foi desenvolvida utilizando:
- VueJS 3.2;
- Vuex 4.0;
- SCSS;
- ES6;
- Testes E2E com Cypress 9.7.
- Testes Unitários com Jest 28.1
- NodeJS
- VSCode
- GitHub

Para visualizar a aplicação em produção acesse: https://warren-test.vercel.app/


## Setup do Projeto
```
npm install
```

### Iniciar a Aplicação
```
npm run serve
```

### Build para Produção
```
npm run build
```

### Rodar testes automatizado com Cypress
```
npm run cypress:open
```

### Rodar testes automatizados com Jest
```
npm run jest
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
