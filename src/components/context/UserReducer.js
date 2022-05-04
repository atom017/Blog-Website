
export const initialState={
    id:'',
    name:'',
}

const userReducer = (state,action) =>{
    const {type,payload} = action;
    switch(type){
        case 'LOGIN':
            console.log('login');
        default:
            return state;
    }
}

export default userReducer;