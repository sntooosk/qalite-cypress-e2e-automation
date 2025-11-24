const randomString = (label = 'value') =>
  `${label}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`

export const randomEmail = (domain = 'example.test') =>
  `${randomString('user')}@${domain}`

export const randomPassword = (length = 16) => {
  const charset =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  return Array.from({ length }, () =>
    charset.charAt(Math.floor(Math.random() * charset.length)),
  ).join('')
}

export const randomCompanyName = () => `${randomString('Company')} Ltd`

export const randomLastName = () => randomString('Lastname')
