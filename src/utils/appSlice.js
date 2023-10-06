import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        searchVideoItems:[],
    },
    reducers:{
        toggleMenu:(state) => {
           state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen = false;
        },
        searchVideo:(state, action) => {
           state.searchVideoItems = action.payload.items;
        }
    }
});

export const {toggleMenu, closeMenu, searchVideo} = appSlice.actions;
export default appSlice.reducer;