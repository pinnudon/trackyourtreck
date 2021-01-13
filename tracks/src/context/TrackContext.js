import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
const trackReducer = (state, action) => {
    switch(action.type){
        case 'fetch_tracks':
            return action.payload
        default:
            return state
    }
}

const fetchTracks = dispatch => {
    return async()=> {
        const res = await trackerApi.get('/tracks')
        dispatch({type: 'fetch_tracks', payload: res.data})
    }
}
const createTracks = dispatch => {
    return async(name, locations)=> {
        await trackerApi.post('/tracks', {name, locations})
    }
}

export const {Provider, Context} = createDataContext(
    trackReducer, 
    {fetchTracks, createTracks},
    []
)