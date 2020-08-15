const state = {
  Mname: "風景",
  Mtitle: "華山"
};
const mutations = {
  setNames:(state,value) => {
    state.Mname = value;
  },
  setTitles:(state,value) => {
    state.Mtitle = value;
  }
};
const actions = {
  setNamesAction({ commit }, value) {
    commit("setNames", value);
  },
  setTitlesAction({ commit }, value) {
    commit("setTitles", value);
  }
};
export default {
  namespaced: false,
  state,
  mutations,
  actions
};
