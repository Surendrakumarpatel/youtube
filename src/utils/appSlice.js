import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        searchVideoItems:[],
        video:[],
        category:"All",
        isLoading:false, 
        toggle:false,
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
        },
        setHomeVideo:(state, action) => {
            state.video = action.payload;
        },
        changeCategory:(state, action) => {
            state.category = action.payload;
        },
        loading:(state,action)=>{
            state.isLoading = action.payload;
        },
        setToggle:(state)=>{
            state.toggle = !state.toggle
        }
    }
});

export const {toggleMenu, closeMenu, searchVideo, setHomeVideo , changeCategory,loading, setToggle} = appSlice.actions;
export default appSlice.reducer;