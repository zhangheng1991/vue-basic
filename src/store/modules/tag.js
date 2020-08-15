const state = {
  test: "查查",
  tname: "张衡"
};
const mutations = {
  setNameTest: (state, value) => {
    state.test = value;
  },
  setNameTestT: (state, value) => {
    state.tname = value;
  }
};
const actions = {
  setNameActions({ commit }, value) {
    commit("setNameTest", value);
  },
  setNameActionsT({ commit }, value) {
    commit("setNameTestT", value);
  }
};
export default {
  namespaced: false,
  state,
  actions,
  mutations
};
