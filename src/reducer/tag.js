import * as Types from './../constant/Type'
const initialState = [];

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ALL_TAG: {
            let newState = action.response.data;
            state = newState;
            return state;
        }
        default:
            return state;
    }
};

export default myReducer;