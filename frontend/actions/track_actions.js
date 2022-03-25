import * as TrackApiUtil from '../util/track_api_util'

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS'
export const RECEIVE_TRACK = 'RECEIVE_TRACK'
export const REMOVE_TRACK = 'REMOVE_TRACK'
export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS'
export const REMOVE_TRACK_ERRORS = 'REMOVE_TRACK_ERRORS'

const receiveTracks = tracks => ({
    type: RECEIVE_TRACKS,
    tracks
})
const receiveTrack = track => ({
    type: RECEIVE_TRACK,
    track
})
const removeTrack = trackId => ({
    type: REMOVE_TRACK,
    trackId
})
const receiveTrackErrors = errors => ({
    type: RECEIVE_TRACK_ERRORS,
    errors
})
const removeTrackErrors = () => ({
    type: REMOVE_TRACK_ERRORS
})

export const fetchTracks = () => dispatch => {
    return TrackApiUtil.fetchTracks()
        .then(tracks => dispatch(receiveTracks(tracks)))
}

export const fetchTrack = trackId => dispatch => {
    return TrackApiUtil.fetchTrack(trackId)
        .then(track => dispatch(receiveTrack(track)))
}

export const createTrack = track => dispatch => {
    return TrackApiUtil.createTrack(track).then(
        track => dispatch(receiveTrack(track)),
        err => dispatch(receiveTrackErrors(err.responseJSON))
    )
}

export const updateTrack = track => dispatch => {
    return TrackApiUtil.updateTrack(track).then(
        track => dispatch(receiveTrack(track)),
        err => dispatch(receiveTrackErrors(err.responseJSON))
    )
}

export const deleteTrack = trackId => dispatch => {
    return TrackApiUtil.deleteTrack(trackId)
        .then(() => dispatch(removeTrack(trackId)))
}