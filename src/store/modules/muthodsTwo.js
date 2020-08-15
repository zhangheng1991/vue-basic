const state = {
  username: "111111",
  password: "123456",
};
const mutations = {
  setUsername: (state, value) => {
    state.username = value;
  },
  setPassword: (state, value) => {
    state.password = value;
  },
};
const actions = {
  setUsernameActions({ commit }, value) {
    commit("setUsername", value);
  },
  setPasswordActions({ commit }, value) {
    commit("setPassword", value);
  },
};
export default {
  namespaced:true,
  state,
  mutations,
  actions,
};
