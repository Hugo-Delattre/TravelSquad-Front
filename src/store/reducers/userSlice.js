import { createSlice } from '@reduxjs/toolkit'; 


export const userSlice= createSlice({

    name:"user",
    initialState:{
        user:null,
        // isLoggedIn: false  //mettre ici le isLoggedIn (et l'appeler dans les composants avec useSelector)
    },
    
    
    reducers:{
        
        login: (state, action) => {
            state.user=action.payload;
        },

        logout: (state) => {

        },
}
})
export const { login, logout } = userSlice.actions;

export const selectUser =(state)=>state.user.user;

export default userSlice.reducer;







