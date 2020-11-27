import {SET_TEXT,USER_A_DETAILS} from '../types/types'

const initialState = {
    text:'',
    userAData:{ },
}

const reducers = (state = initialState, action) =>{
    switch(action.type){
        case SET_TEXT:
            return{...state, text: action.payload.data};

        case USER_A_DETAILS:
            return{...state, userAData: action.payload.data};

        default:
            return state;
    }
}

export default reducers;