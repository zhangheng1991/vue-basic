const getters = {
  name: (state) => state.user.name,
  test: (state) => state.tag.test,
  tname: (state) => state.tag.tname,
  names: (state) => state.methods.names,
  titled: (state) => state.methods.titled,
  Mname: (state) => state.methodse.Mname,
  Mtitle: (state) => state.methodse.Mtitle,
  username:(state)=>state.muthodsTwo.username,
  password:(state)=>state.muthodsTwo.password
};
export default getters;
