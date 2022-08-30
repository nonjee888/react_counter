import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const __addNumber = createAsyncThunk(
    "ADD_NUMBER", //첫번째 인자: active value
    //두번째 인자 : 함수
    (args, thunkAPI) => {
        console.log("아무거나")
        setTimeout(() => {
            thunkAPI.dispatch(addNumber(args));
        }, 3000);
    }
);

//초기 상태값
const initialState = {
    number: 0,
};

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers: {
        addNumber: (state, action) => {
            state.number = state.number + action.payload;
        },

        minusNumber: (state, action) => {
            state.number = state.number - action.payload;
        },
    },
})


export const { addNumber, minusNumber } = counterSlice.actions;
export default counterSlice.reducer;


