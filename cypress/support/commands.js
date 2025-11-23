import Login from './pages/Login'
import users from '../fixtures/users.json'

const persistFirebaseAuth = () =>
  cy.window().then(
    ({ indexedDB, localStorage }) =>
      new Cypress.Promise((resolve) => {
        const request = indexedDB.open('firebaseLocalStorageDb')

        request.onerror = () => resolve()

        request.onsuccess = () => {
          const transaction = request.result.transaction(
            'firebaseLocalStorage',
            'readonly',
          )
          const store = transaction.objectStore('firebaseLocalStorage')
          const getAllRequest = store.getAll()

          getAllRequest.onerror = () => resolve()

          getAllRequest.onsuccess = () => {
            getAllRequest.result.forEach(({ fbase_key, value }) =>
              localStorage.setItem(fbase_key, value),
            )

            resolve()
          }
        }
      }),
  )

const validateSession = () => {
  cy.visit('/admin')
  Login.validateAuthenticatedState()
}

const performLoginFlow = ({ email, password }) => {
  Login.loginWithCredentials({ email, password })
  persistFirebaseAuth()
  validateSession()
}

Cypress.Commands.add(
  'login',
  (email = users.email, password = users.password) => {
    const credentials = { email, password }

    cy.session(
      credentials,
      () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        performLoginFlow(credentials)
      },
      {
        cacheAcrossSpecs: true,
        validate: () => {
          validateSession()
        },
      },
    )

    validateSession()
  },
)
