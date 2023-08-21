import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    type: null,
    user: {},
    isLoggedIn: false,
    name: "",
    email: "",
    image: null,
    latitude: null,
    longitude: null,
};
const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        reset: () => initialState,
        setLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setProviderUser: (state, action) => {},
        setState: (state, action) => {
            state.name = action.payload._doc.name;
            state.email = action.payload._doc.email;
            state.isLoggedIn = true;
            state.image = action.payload._doc.image | null;
            state.favs = action.payload.favs;
        },
        setImage: (state, action) => {
            state.image = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        setLocation: (state, action) => {
            state.latitude = action.payload.latitude;
            state.longitude = action.payload.longitude;
        },
    },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
