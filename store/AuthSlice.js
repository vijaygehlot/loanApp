const {createSlice} = require('@reduxjs/toolkit');

const AuthSlice = createSlice({
  name: 'auth',
  initialState: {authState: null},
  reducers: {
    register(state, action) {
      state.authState = action.payload;
    },
    signin(state, action) {
      state.authState = action.payload;
      //state.push(action.payload);
    },
    signout(state, action) {
      state.authState = action.payload;
    },
  },
});

export const {signin, register, signout} = AuthSlice.actions;
export default AuthSlice.reducer;
