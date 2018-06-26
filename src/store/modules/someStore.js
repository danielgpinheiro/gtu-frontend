// export const SET_ACCOUNT = 'SET_ACCOUNT'

const state = {
  // account: {}
}

const getters = {
  // getterAccount: (state) => state.account
}

const mutations = {
  // [SET_ACCOUNT](state, value) {
  //   state.account = value
  // }
}

const actions = {
  // actionSignIn({ commit }, params) {
  //   return loginApi.signIn(params.user, params.password)
  //     .then((response) => {
  //       window.localStorage.setItem('token', response.data.token)
  //       commit(SET_ACCOUNT, {
  //         'idAccount': response.data.idAccount,
  //         'username': response.data.username
  //       })
  //       return Promise.resolve(response)
  //     })
  //     .catch((e) => {
  //       console.error(e)
  //       return Promise.reject(e)
  //     })
  // }
}

export default {
  state,
  getters,
  actions,
  mutations
}
