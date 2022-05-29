describe('Warren - Minhas Transações', () => {
  before(() => {
    cy.visit('http://localhost:8080/')
  })

  context('Window', () => {
    it('Elementos básicos da tela', () => {
      cy.title().should('include', 'Warren - Minhas Transações');
    })
  })

  context('Verifica campos de filtro na tela', () => {
    it('Campos de filtro', () => {
      cy.get('.inputsearch').should('be.visible');
      cy.get('.selectstatus').should('be.visible');
    })
  })

  context('Verifica valores iniciais de filtro', () => {
    it('Valores iniciais dos campos de filtro', () => {
      cy.get('.inputsearch').should('have.not.text');
      cy.get('.selectstatus option:nth-child(1)').should('have.text', 'Todos os Status');
      cy.get('.selectstatus option:nth-child(2)').should('have.text', 'Solicitado');
      cy.get('.selectstatus option:nth-child(3)').should('have.text', 'Processado');
      cy.get('.selectstatus option:nth-child(4)').should('have.text', 'Concluído');
      cy.get('.selectstatus option:selected').should('have.attr', 'value').and('equal', '0');
    })
  })

  context('Verifica primeiros resultados na tela', () => {
    it('Valores iniciais de resultado', () => {
      cy.get('.thead > tr > :nth-child(1)').should('have.text', 'Título');
      cy.get('.thead > tr > :nth-child(2)').should('have.text', 'Data');
      cy.get('.thead > tr > :nth-child(3)').should('have.text', 'Descrição');
      cy.get('.thead > tr > :nth-child(4)').should('have.text', 'Status');
      cy.get('.thead > tr > :nth-child(5)').should('have.text', 'Valor');
      cy.get('tbody > tr').should('have.length', 21)
    })
  })

  context('Verifica detalhes da transação', () => {
    it('Click na primeira linha dos resultados iniciais', () => {
      cy.get('tbody > :nth-child(1)').click();
      cy.get('.titulodetalhe').should('have.text', 'Resgate')
      cy.get('.statusbar__label > :nth-child(1)').should('have.class', 'fs-5')
      cy.get('.start > span').should('have.text', 'Aposentadoria')
      cy.get('.start > .fs-5').contains('2.078,66')
      cy.get('.end > span').should('have.text', 'Conta Warren')
      cy.get('.end > .fs-5').contains('2.078,66')
    })
    it('Botão fechar modal', () => {
      cy.get('.close').should('be.visible');
      cy.get('.close').click()
    })
  })

  context('Ações com filtro - Preenchimento campo input e select status = Todos os Status', () => {
    beforeEach(() => {
      cy.get('.inputsearch').clear()
      cy.get('.selectstatus').select('Todos os Status')
    })
    it('Digitar resgate no campo input e selecionar status Todos os Status', () => {
      cy.get('.inputsearch').type('resgate').should('have.value','resgate')      
      cy.get('tbody > tr').should('have.length', 13)
    })
    it('Digitar movimentação no campo input e selecionar status Todos os Status', () => {
      cy.get('.inputsearch').type('movimentação').should('have.value','movimentação')
      cy.get('tbody > tr').should('have.length', 5)
    })

    it('Digitar deposito no campo input e selecionar status Todos os Status', () => {
      cy.get('.inputsearch').type('deposito').should('have.value','deposito')
      cy.get('tbody > tr').should('have.length', 3)
    })
  })

  context('Ações com filtro - Preenchimento campo input e select status = Solicitado', () => {
    beforeEach(() => {
      cy.get('.inputsearch').clear()
      cy.get('.selectstatus').select('Solicitado')
    })
    it('Digitar resgate no campo input e selecionar status Solicitado', () => {
      cy.get('.inputsearch').type('resgate').should('have.value','resgate')      
      cy.get('tbody > tr').should('have.length', 4)
    })
    it('Digitar movimentação no campo input e selecionar status Solicitado', () => {
      cy.get('.inputsearch').type('movimentação').should('have.value','movimentação')
      cy.get('tbody > tr').should('have.length', 2)
    })

    it('Digitar deposito no campo input e selecionar status Solicitado', () => {
      cy.get('.inputsearch').type('deposito').should('have.value','deposito')
      cy.get('tbody > tr').should('have.length', 1)
    })
  })

  context('Ações com filtro - Preenchimento campo input e select status = Processado', () => {
    beforeEach(() => {
      cy.get('.inputsearch').clear()
      cy.get('.selectstatus').select('Processado')
    })
    it('Digitar resgate no campo input e selecionar status Processado', () => {
      cy.get('.inputsearch').type('resgate').should('have.value','resgate')      
      cy.get('tbody > tr').should('have.length', 5)
    })
    it('Digitar movimentação no campo input e selecionar status Processado', () => {
      cy.get('.inputsearch').type('movimentação').should('have.value','movimentação')
      cy.get('tbody > tr').should('have.length', 1)
    })

    it('Digitar deposito no campo input e selecionar status Processado', () => {
      cy.get('.inputsearch').type('deposito').should('have.value','deposito')
      cy.get('tbody > tr').should('have.length', 1)
    })
  })

  context('Ações com filtro - Preenchimento campo input e select status = Concluído', () => {
    beforeEach(() => {
      cy.get('.inputsearch').clear()
      cy.get('.selectstatus').select('Concluído')
    })
    it('Digitar resgate no campo input e selecionar status Concluído', () => {
      cy.get('.inputsearch').type('resgate').should('have.value','resgate')      
      cy.get('tbody > tr').should('have.length', 4)
    })
    it('Digitar movimentação no campo input e selecionar status Concluído', () => {
      cy.get('.inputsearch').type('movimentação').should('have.value','movimentação')
      cy.get('tbody > tr').should('have.length', 2)
    })

    it('Digitar deposito no campo input e selecionar status Concluído', () => {
      cy.get('.inputsearch').type('deposito').should('have.value','deposito')
      cy.get('tbody > tr').should('have.length', 1)
    })
  })

  context('Ações com filtro - Preenchimento campo input com valor inexistente na coluna Título', () => {
    beforeEach(() => {
      cy.get('.inputsearch').clear()
      cy.get('.selectstatus').select('Todos os Status')
    })
    it('Digitar abcd no campo input', () => {
      cy.get('.inputsearch').clear()
      cy.get('.inputsearch').type('abcd').should('have.value','abcd')
      cy.get('.mensagem').should('be.visible')
      cy.get('.mensagem span').should('have.text', 'Nenhuma transação corresponde aos filtros utilizados.')
    })
  })

  context('Ações com filtro - Limpeza do formulario de filtros', () => {
    beforeEach(() => {
      cy.get('.inputsearch').clear()
      cy.get('.selectstatus').select('Todos os Status')
    })
    it('Clicar no botão Limpar. Apenas input preenchido', () => {
      cy.get('.inputsearch').type('Movimen').should('have.value','Movimen')
      cy.get('tbody > tr').should('have.length', 5)
      cy.get('.limpar').should('be.visible')
      cy.get('.limpar').click()
      cy.get('.inputsearch').should('have.text', '')
      cy.get('.selectstatus option:selected').should('have.attr', 'value').and('equal', '0');
      cy.get('tbody > tr').should('have.length', 21)
    })
    it('Clicar no botão Limpar. Apenas select alterado', () => { 
      cy.get('.selectstatus').select('Concluído')     
      cy.get('tbody > tr').should('have.length', 7)
      cy.get('.limpar').should('be.visible')
      cy.get('.limpar').click()
      cy.get('.inputsearch').should('have.text', '')
      cy.get('.selectstatus option:selected').should('have.attr', 'value').and('equal', '0');
      cy.get('tbody > tr').should('have.length', 21)
    })
    it('Clicar no botão Limpar. Input e Select alterados', () => { 
      cy.get('.selectstatus').select('Solicitado')     
      cy.get('tbody > tr').should('have.length', 7)
      cy.get('.limpar').should('be.visible')
      cy.get('.inputsearch').type('Resg').should('have.value','Resg')
      cy.get('tbody > tr').should('have.length', 4)
      cy.get('.limpar').click()
      cy.get('.selectstatus option:selected').should('have.attr', 'value').and('equal', '0');
      cy.get('tbody > tr').should('have.length', 21)
    })
  })

})