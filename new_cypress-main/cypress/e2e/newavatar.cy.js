describe('Покупка нового автара', function () {

    it('Покупка нового автара для своего тренера ', function () {
         cy.visit('https://pokemonbattle.ru/login');
         cy.get('.style_1_popup_white_title').contains('Битва покемонов');// Проверка, что элемент содержит текст 'Битва покемонов'
         cy.get('.style_1_popup_white_title').should('be.visible'); //Проверка что текст 'Битва покемонов' виден пользователю
         cy.get('#k_email').type('USER_LOGIN')   // Найти поле логина и ввести верный логин
         cy.get('#k_password').type('USER_PASSWORD')       // Найти поле пароля и ввести верный пароль 
         cy.get('button[type="submit"]').click();              // Нажал кнопку "войти"
         cy.get('.header_card_trainer').should('be.visible');
         cy.get('.header_card_trainer').click();       // Нажал кнопку "профиль"
         cy.get('.k_mobile > :nth-child(5)').should('be.visible');
         cy.get('.k_mobile > :nth-child(5)').click();   // Нажал кнопку "Сменить аватара"
         cy.get('.shop__list li:nth-child(2) > .shop__button').should('be.visible');
         cy.get('.shop__list li:nth-child(2) > .shop__button').click();// Нажал кнопку "Купить"
         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').should('be.visible');
         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4620869113632996')  // Найти поле с номером карты и ввести номер карты
         cy.get(':nth-child(1) > .style_1_base_input').type('1226') // Найти поле с датой карты и ввести дату
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125') // Найти поле с кодом и ввести код сvv
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('german dolnikov') // Найти поле с именем и ввести имя
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // Нажал кнопку "оплатить"
         cy.get('.style_1_base_input').should('be.visible');
         cy.get('.style_1_base_input').type('56456') // Найти поле и ввести код из смс
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').should('be.visible');
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();// Нажал кнопку "оплатить"
         cy.get('.payment_status_top_title').should('be.visible')
         cy.get('.payment_status_top_title').contains('Покупка прошла успешно');// Проверка, что элемент содержит текст 'Покупка прошла успешно'
         cy.get('.payment_status_top_title').should('be.visible'); //Проверка что текст 'Покупка прошла успешна' виден пользователю
         cy.get('.style_1_base_link_blue').click(); // Нажал кнопку "вернуться в магазин"
         
     }) 
 }) 