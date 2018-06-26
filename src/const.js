const API_HOST = () => {
  let host = window.location.host
  if (host.includes('localhost')) {
    return 'https://somedomain.com'
  } else {
    return `https://${host}`
  }
}

const IS_DEVELOP = () => {
  let host = window.location.host
  return host.includes('localhost') || host.includes('dev.gtu')
}

const API_URL = `${API_HOST()}/someEndPoint`

export default {
  API_URL,
  IS_DEVELOP
}
