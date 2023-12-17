import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";

const authReducer = ( state, action )=>{
    switch(action.type){
        case 'ADD_ERROR':
            return {...state, errorMessage: action.payload}
        default:
            return state;
    }
}



const signup = (dispatch) =>{
    return async({email, password})=>{
        console.log("Hello ")
        // make api request to sign up with that email and password

        try{
            const response = await trackerApi.post('/signup', { email, password})
            console.log(response.data)
        }catch(err){

            console.log(err.response.data)

            dispatch({type: 'ADD_ERROR', payload: 'Something went Wrong with sign up'})
        }

        // if we signup, modify our state, and say that we are authenticated

        // if signing up fails, we probably need to reflect an error message 
        // somewhere

    }
}


const signin = (dispatch) =>{
    return ({email, password} )=>{
        // make api request to sign in with that email and password

        // if we sign in, modify our state, and say that we are authenticated

        // handle failure by showing error message
    }
}

const signout = (dispatch) =>{
    return ()=>{
        // somehow sign out
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup},
    { isSignedIn: false, errorMessage: ''}
)