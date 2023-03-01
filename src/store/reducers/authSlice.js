import { createSlice } from '@reduxjs/toolkit'; 

// créer un compte, se connecter, se déconnecter

export const authSlice= createSlice({

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
        
        register: (state, action) => {}
}
})
export const { login, logout } = authSlice.actions;

export const selectUser =(state)=>state.user.user;

export default authSlice.reducer;







