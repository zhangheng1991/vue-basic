const state = {
  names: "张衡",
  titled: "中华",
};
const mutations = {
  setName: (state, value) => {
    state.names = value;
  },
  setTitle: (state, value) => {
    state.titled = value;
  },
};

const actions = {
  setNameActions({ commit }, value) {
    commit("setName", value);
  },
  setTitleActions({ commit }, value) {
    commit("setTitle", value);
  },
};
export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
