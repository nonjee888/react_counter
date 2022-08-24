//초기 상태값
const initialState = {
    number: 0,
};

//액션밸류
const ADD_NUMBER = "ADD_NUMBER";
const MINUS_NUMBER = "MINUS_NUMBER";

//액션크리에이터
export const addNumber = (payload) => {
    return {
        type: ADD_NUMBER,
        payload,
    };
};

export const minusNumber = (payload) => {
    return {
        type: MINUS_NUMBER,
        payload,
    };
};

//리듀서
const counter = (state = initialState, action) => {
    // console.log(state)
    switch (action.type) {
        case ADD_NUMBER:
            return{
                number: state.number + action.payload, //number add
            }

        case MINUS_NUMBER:
            return{
                number: state.number - action.payload,
            }
        default:
            return state;
    }
};

export default counter;