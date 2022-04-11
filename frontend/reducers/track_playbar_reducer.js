import {
    PLAY_TRACK,
    PAUSE_TRACK,
    RECEIVE_PLAY_TRACK,
    REMOVE_PLAY_TRACK
} from '../actions/track_playbar_actions'

const _nullPlay = {
    currentTrack: null,
    isPlaying: false
}

const trackPlaybarReducer = (state = _nullPlay, action) => {

    Object.freeze(state);
    const nextState = Object.assign({}, state)

    switch(action.type) {
        case RECEIVE_PLAY_TRACK:
            nextState.currentTrack = action.track
            nextState.isPlaying = true
            return nextState
        case REMOVE_PLAY_TRACK:
            return _nullPLay
        case PLAY_TRACK:
            nextState.isPlaying = true
            return nextState
        case PAUSE_TRACK:
            nextState.isPlaying = false
            return nextState
        default:
            return state
            
    }
}

export default trackPlaybarReducer






// import {
//     REMOVE_PLAY_TRACK,
//     RECEIVE_PLAY_TRACK,
//     PLAY_TRACK,
//     PAUSE_TRACK
// } from '../actions/track_playbar_actions';

// const trackPlaybarReducer = (state={ currentTrack: null, isPlaying: false }, action) => {
//     Object.freeze(state);
//     const nextState = Object.assign({}, state);

//     switch (action.type) {
//         case RECEIVE_PLAY_TRACK:
//             nextState["currentTrack"] = action.track;
//             nextState["isPlaying"] = true;
//             return nextState;
//         case PLAY_TRACK:
//             nextState["isPlaying"] = true;
//             return nextState;
//         case PAUSE_TRACK:
//             nextState["isPlaying"] = false;
//             return nextState;
//         case REMOVE_PLAY_TRACK:
//             return { currentTrack: null, isPlaying: false }
//         default:
//             return state;
//     }
// };

// export default trackPlaybarReducer;