import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";

const trackReducer = (state, action) => {
    switch(action.type){
        case 'FETCH_TRACKS':
            return action.payload
        default: 
           return state;
    }
}


const fetchTracks = dispatch => async() => {
    const response = await trackerApi.get('/tracks')
    dispatch({type:'FETCH_TRACKS', payload: response.data})
}
const createTrack = dispatch =>async (name, locations) =>{
    console.log(name, locations.length)
    await trackerApi.post('/tracks', { name, locations})
}


export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack},
    []
)