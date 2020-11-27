import {SET_TEXT, USER_A_DETAILS} from '../types/types'
export const dummyAction = (data)=>{
    return{
        type: SET_TEXT,
        payload:{
            data: data
        }
    }
}

export const displayUserAData=(data)=>{
    return{
        type: USER_A_DETAILS,
        payload:{
            data: data
        },
    }
}