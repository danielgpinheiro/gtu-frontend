// import { CLEAN_ACCOUNT_STORE } from './account'

export const cleanStorage = ({ commit }) => {
  window.localStorage.removeItem('token')

  const mutations = [
    // CLEAN_ACCOUNT_STORE,
  ]

  mutations.map((mutation) => {
    commit(mutation)
  })
}
