describe( 'teste na tela de login', ()=> {
    beforeEach(() => {
        cy.visit('http://www.aprendendotestar.com.br/treinar-automacao.php');
       
    })
    it('realiza cadastro sem preencher o usuario ', () =>{

        cy.get('input[name="form_senha"]').type('123456');
        cy.get('input[name="form_nome"]').type('SarahR');
        cy.get('input[class="btn btn-info"]').click();
        cy.get('input[name="form_usuario"]').should('be.empty');

        cy.wait(15);

    })
    it('realiza cadastro sem preencher o nome   ', () =>{

        cy.get('input[name="form_usuario"]').type('@sarahrodrigues')
        cy.get('input[name="form_senha"]').type('123456');
        cy.get('input[class="btn btn-info"]').click();
        cy.contains ('Existem campos em branco').should('be.visible');

        cy.wait(15);

    })
    it('realiza cadastro sem preencher a senha ', () =>{

        cy.get('input[name="form_usuario"]').type('@sarahrodrigues')
        cy.get('input[name="form_nome"]').type('SarahR');
        cy.get('input[class="btn btn-info"]').click();
        cy.get('input[name="form_senha"]').should('be.empty');

        cy.wait(15);

    })
    it('realiza cadastro completo ', () =>{

        cy.get('input[name="form_usuario"]').type('@sarahrodrigues')
        cy.get('input[name="form_senha"]').type('123456');
        cy.get('input[name="form_nome"]').type('SarahR');
        cy.get('input[class="btn btn-info"]').click();

        cy.wait(15);
    
    })
    it('Apaga dados ', () =>{

        cy.contains('a', 'Apagar').click();

        cy.wait(15);
    
    })
})