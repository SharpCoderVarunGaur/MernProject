import {createSlice} from '@reduxjs/toolkit';
const userSlice= createSlice({
name:"user",
initialState:[],
reducers:{
addDataUser(state,action){
state.push(action.payload)
}
    }

})
console.log(userSlice.actions)
export default userSlice.reducer;
export const {addDataUser}=userSlice.actions