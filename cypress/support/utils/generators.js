const randomString = (label = 'value') =>
  `${label}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`

const companyList = [
  'NovaTech Solutions',
  'PrimeCore Group',
  'Altavista Consultoria',
  'Horizon Digital',
  'Vale Norte Indústrias',
  'Lumina Sistemas',
  'BlueWave Corp',
  'Autentica Serviços Integrados',
  'Bravox Holdings',
  'NextPoint Enterprise',
]

const storeList = [
  'Casa & Conforto',
  'Mundo Express',
  'Central das Ofertas',
  'MegaFone Store',
  'Tudo em Casa Shop',
  'Urban Fashion',
  'Prime Eletrônicos',
  'Ponto da Beleza',
  'SuperLar Utilidades',
  'TopTech Informática',
]

const emailDomains = [
  'novatech.com',
  'urbanfashion.com',
  'primecoregroup.com',
  'toptechinfo.com',
  'mundosexpress.com',
  'megafonestore.com',
  'valenorte.com.br',
  'bluewavecorp.com',
  'horizondigital.co',
  'autenticaservicos.com',
]

export const randomEmail = () =>
  `${randomString('user')}@${emailDomains[Math.floor(Math.random() * emailDomains.length)]}`

export const randomPassword = (length = 16) => {
  const charset =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  return Array.from({ length }, () =>
    charset.charAt(Math.floor(Math.random() * charset.length)),
  ).join('')
}

export const randomCompanyName = () =>
  companyList[Math.floor(Math.random() * companyList.length)]

export const randomStoreName = () =>
  storeList[Math.floor(Math.random() * storeList.length)]

export const randomLastName = () => randomString('Lastname')
