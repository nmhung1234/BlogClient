import * as Types from './../constant/Type'
const initialState = [];

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_HOME_POST: {
            console.log(action);
            // console.log(action.response.data.data);
            let newState = action.response.data.data;
            state = newState;
            return state;
        }
        default:
            return state;
    }
};

export default myReducer;