interface IndexedDatabaseInfo {
  name?: string
}

const deleteAllIndexedDatabases = (win: Cypress.AUTWindow): void => {
  const indexedDb = win.indexedDB as typeof win.indexedDB & {
    databases?: () => Promise<IndexedDatabaseInfo[]>
  }

  indexedDb.databases?.().then((databases) => {
    databases.forEach((database) => {
      if (database.name) {
        indexedDb.deleteDatabase(database.name)
      }
    })
  })
}

export const clearBrowserState = (): void => {
  cy.window().then((win) => {
    deleteAllIndexedDatabases(win)
  })

  cy.clearLocalStorage()
  cy.clearCookies()
}
