import { RECEIVE_TRACK } from '../actions/track_actions'
import {
    RECEIVE_COMMENTS,
    RECEIVE_COMMENT,
    REMOVE_COMMENT
} from '../actions/comment_actions'

const commentsReducer = (state={}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)

    switch(action.type) {
        case RECEIVE_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT:
            nextState[action.comment.id] = action.comment
            return nextState
        case REMOVE_COMMENT:
            delete nextState[action.commentId]
            return nextState
        case RECEIVE_TRACK:
            return Object.assign({}, action.track.comments)
        default:
            return state
    }
}

export default commentsReducer;