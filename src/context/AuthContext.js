import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";
import { navigate } from '../navigationRef';

const authReducer = ( state, action )=>{
    switch(action.type){
        case 'ADD_ERROR':
            return {...state, errorMessage: action.payload}
       
        case 'SIGN_IN':
            return { errorMessage: '', token:action.payload}
        
        case 'SIGN_OUT':
            return { token:null, errorMessage:''}
        
        case 'CLEAR_ERROR_MESSAGE':
            return { ...state , errorMessage: ''}
        default:
            return state;
    }
}


const tryLocalSignin = dispatch => async () =>{
    const token = await AsyncStorage.getItem('token')
    if (token){
        dispatch({type:"SIGN_IN", payload: token})
        navigate('mainFlow')

    }else{
        navigate('Signup')
    }
}
const signup = (dispatch) =>{
    return async({email, password})=>{
        console.log("Hello ")
        // make api request to sign up with that email and password

        try{
            const response = await trackerApi.post('/signup', { email, password})
            // console.log(response.data.token)
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({ type: 'SIGN_IN', payload: response.data.token})
            navigate('mainFlow')
        }catch(err){

            console.log(err.response.data)

            dispatch({type: 'ADD_ERROR', payload: 'Something went Wrong with sign up'})
        }

        // if we signup, modify our state, and say that we are authenticated

        // if signing up fails, we probably need to reflect an error message 
        // somewhere

    }
}


const clearErrorMessage = dispatch =>()=>{
    dispatch({ type: 'CLEAR_ERROR_MESSAGE'})
}

const signin = (dispatch) =>{
    return async({email, password} )=>{
        // make api request to sign in with that email and password
        try{
           const response = await trackerApi.post('/signin', { email, password})
           await AsyncStorage.setItem('token', response.data.token);
           dispatch({ type: 'SIGN_IN', payload: response.data.token})
           navigate('mainFlow')
           
        }catch(err){
            console.log(err.message)

            dispatch({type: 'ADD_ERROR', payload: 'Something went Wrong with signing in'})
        }


        // if we sign in, modify our state, and say that we are authenticated

        // handle failure by showing error message
    }
}

const signout = (dispatch) =>{
    return async()=>{
        // somehow sign out
        await AsyncStorage.removeItem('token');
        dispatch({type: 'SIGN_OUT'})
        navigate('Signin')

    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalSignin},
    { token: null, errorMessage: ''}
)