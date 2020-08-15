const state = {
  sex: "men"
};
const mutations = {
  setSex: (state, value) => {
    state.sex = value;
  },
};
const actions = {
  setSexActions({ commit }, value) {
    commit("setSex", value);
  },
};
export default {
  namespaced: false,
  state,
  mutations,
  actions,
};
