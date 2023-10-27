import ActionTypes from "../contents/ActionTypes";

const initialState = {
    products:[]
}
export const productReducer = (state=initialState, {type,payload})=>{
    switch(type){
        case ActionTypes.SET_PRODUCTS :
            return {...state,products:payload};
        default :
            return state;
    }
}

export const selectedProductReducer = (state={},{type,payload})=>{
    if(type===ActionTypes.SELECTED_PRODUCT){
        return {...state,...payload}
    }
    else if(type === ActionTypes.REMOVE_SELECTED_PRODUCT){
        return {}
    }
    else{
        return state;
    }
}