import LoginPage from './pages/Login'
import users from '../fixtures/users.json'

const hasFirebaseSession = () => {
  return cy.window().then((win) => {
    return Object.keys(win.localStorage).some((k) =>
      k.startsWith('firebase:authUser:'),
    )
  })
}

const performLogin = (email, password) => {
  LoginPage.open()
  LoginPage.fillCredentials({ email, password })
  LoginPage.submit()
  LoginPage.expectSuccessfulLogin()
}

Cypress.Commands.add(
  'login',
  (email = users.email, password = users.password) => {
    cy.visit('/admin')

    cy.url().then((url) => {
      if (!url.includes('/login')) {
        LoginPage.expectSuccessfulLogin()
        return
      }

      hasFirebaseSession().then((exists) => {
        if (exists) {
          cy.visit('/admin')
        } else {
          performLogin(email, password)
        }
      })
    })
  },
)

Cypress.Commands.add('logout', () => {
  cy.window().then((win) => {
    win.indexedDB?.databases?.().then((dbs) => {
      dbs.forEach((db) => win.indexedDB.deleteDatabase(db.name))
    })

    win.localStorage.clear()
  })

  cy.clearCookies()
})
