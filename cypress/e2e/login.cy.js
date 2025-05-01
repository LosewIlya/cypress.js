import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json"
import * as recovery_password_page from "../locators/recovery_password_page.json"
import * as result_page from "../locators/result_page.json"

describe('Проверка авторизации на сайте', function () {
   beforeEach('Начало теста', function () {
      cy.visit('/'); //Зайти на сайт https://login.qa.studio
        });
   afterEach('Конец теста', function () {
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Крестик есть и он виден для пользователю
     });
   
    it('Правильный пароль и правильный логин', function () {
       cy.get(main_page.title).contains('Форма логина');// Проверка, что элемент содержит текст 'форма логина'
       cy.get(main_page.title).should('be.visible'); //Проверка что текст 'форма логина' виден пользователю
       cy.get(main_page.email).type(data.login)   // Найти поле логина и ввести верный логин
       cy.get(main_page.password).type(data.password)       // Найти поле пароля и ввести верный пароль
       cy.get(main_page.login_button).click();              // Нажал кнопку "войти"
       cy.get(result_page.title).contains('Авторизация прошла успешно'); // Проверка, что элемент содержит текст
       cy.get(result_page.title).should('be.visible'); //Проверка что текст виден пользователю
     })
     it('Логика восстановления пароля', function () {
        cy.get(main_page.fogot_pass_btn).click(); //Нажать на кнопку восстановить пароль
        cy.get(recovery_password_page.title).contains('Восстановите пароль'); // Проверка, что элемент содержит
        cy.get(recovery_password_page.title).should('be.visible'); //Проверка что текст виден пользователю текст
        cy.get(recovery_password_page.email).type(data.login)   // Найти поле логина и ввести верный логин
        cy.get(recovery_password_page.close).should('be.visible'); //Крестик есть и он виден для пользователю
        cy.get(recovery_password_page.send_button).click();              // Нажал кнопку "отправить код"
        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail'); // Проверка, что элемент содержит текст Успешно отправили пароль на e-mail
        cy.get(result_page.title).should('be.visible')//Проверка что текст виден пользователю Успешно отправили пароль на e-mail
     })
     it('Правильный логин и неправильный пароль', function () {
       cy.get(main_page.title).contains('Форма логина');// Проверка, что элемент содержит текст 'форма логина'
       cy.get(main_page.title).should('be.visible'); //Проверка что текст 'форма логина' виден пользователю
       cy.get(main_page.email).type(data.login)   // Найти поле логина и ввести верный логин
       cy.get(main_page.password).type('iLoveqastudio5')       // Найти поле пароля и ввести неверный пароль
       cy.get(main_page.login_button).click();              // Нажал кнопку "войти"
       cy.get(result_page.title).contains('Такого логина или пароля нет');// Проверка, что элемент содержит текст 'Такого логина или пароля нет'
       cy.get(result_page.title).should('be.visible'); //Проверка что текст 'Такого логина или пароля нет' виден пользователю
   })
   it('Неправильный логин и правильный пароль', function () {
       cy.get(main_page.title).contains('Форма логина');// Проверка, что элемент содержит текст 'форма логина'
       cy.get(main_page.title).should('be.visible'); //Проверка что текст 'форма логина' виден пользователю
       cy.get(main_page.email).type('german@dlnikov.ru')   // Найти поле логина и ввести неверный логин
       cy.get(main_page.password).type(data.password)       // Найти поле пароля и ввести верный пароль
       cy.get(main_page.login_button).click();              // Нажал кнопку "войти"
       cy.get(result_page.title).contains('Такого логина или пароля нет');// Проверка, что элемент содержит текст 'Такого логина или пароля нет'
       cy.get(result_page.title).should('be.visible'); //Проверка что текст 'Такого логина или пароля нет' виден пользователю
   })
   it('Логин без @', function () {
       cy.get(main_page.title).contains('Форма логина');// Проверка, что элемент содержит текст 'форма логина'
       cy.get(main_page.title).should('be.visible'); //Проверка что текст 'форма логина' виден пользователю
       cy.get(main_page.email).type('germandolnikov.ru')   // Найти поле логина и ввести неверный логин без @
       cy.get(main_page.password).type(data.password)       // Найти поле пароля и ввести верный пароль
       cy.get(main_page.login_button).click();              // Нажал кнопку "войти"
       cy.get(result_page.title).contains('Нужно исправить проблему валидации');// Проверка, что элемент содержит текст 'Нужно исправить проблему валидации'
       cy.get(result_page.title).should('be.visible'); //Проверка что текст 'Нужно исправить проблему валидации' виден пользователю
   })
   it('Ввести логин строчные буквы', function () {
       cy.get(main_page.title).contains('Форма логина');// Проверка, что элемент содержит текст 'форма логина'
       cy.get(main_page.title).should('be.visible'); //Проверка что текст 'форма логина' виден пользователю
       cy.get(main_page.email).type('GerMan@Dolnikov.ru')   // Найти поле логина и ввести логин c строчными буквами 
       cy.get(main_page.password).type(data.password)       // Найти поле пароля и ввести верный пароль
       cy.get(main_page.login_button).click();              // Нажал кнопку "войти"
       cy.get(result_page.title).contains('Авторизация прошла успешно');// Проверка, что элемент содержит текст 'Авторизация прошла успешно'
       cy.get(result_page.title).should('be.visible'); //Проверка что текст 'Авторизация прошла успешно' виден пользователю
   })
})
