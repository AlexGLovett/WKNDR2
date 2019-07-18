import { combineReducers } from 'redux'
import {
    MapWindow,
    Sliders,
    Distance,
    SearchModes,
    SET_MAP_WINDOW,
    SET_SEARCH_MODE,
    SET_SLIDERS,
    SET_DISTANCE
} from '../actions/uiActions'

const { TOURIST_MODE } = SearchModes;

function setWindow(state = { height: MapWindow.height, width: MapWindow.width }, action) {
    switch (action.type) {
        case SET_MAP_WINDOW:
            return Object.assign({}, state, {
                height: action.height,
                width: action.width
            })
        default:
            return state
    }
}

function slide(state = Sliders, action) {
    switch (action.type) {
        case SET_SLIDERS:
            return Object.fromEntries(Object.entries(state).map(([slider, value]) => {
                if (slider === action.slider) value = action.value
            }))
        default:
            return state
    }
}
function setDistance(state = Distance, action) {
    switch (action.type) {
        case SET_DISTANCE:
            return action.distance
        default:
            return state
    }
}
function setMode(state = TOURIST_MODE, action) {
    switch (action.type) {
        case SET_SEARCH_MODE:
            return action.mode
        default:
            return state
    }
}

const wkndrApp = combineReducers({
    slide,
    setDistance,
    setMode,
    setWindow
})

export default wkndrApp