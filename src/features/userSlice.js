import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    type: "",
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
        setState: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.isLoggedIn = true;
            state.image = action.payload.image || null;
            state.type = action.payload.type;
            state.mobileNumber = action.payload.mobileNum;
            state.city = action.payload.city;
            state.petParent = action.payload.petParent;
            state.state = action.payload.state;
            state.country = action.payload.country;
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
        setType: (state, action) => {
            state.type = action.payload.type;
        },
    },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
