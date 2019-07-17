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

const initialState = {
    mapWindow: { height: MapWindow.height, width: MapWindow.width },
    sliders = Object.assign({}, Sliders),
    distance = Distance,
    searchMode = SearchModes.TOURIST_MODE
}

function wkndrApp(state = initialState, action) {
    switch (action.type) {
        case SET_MAP_WINDOW:
            return Object.assign({}, state, {
                mapWindow: { height: action.height, width: action.width }
            })
        case SET_SLIDERS:
            return Object.assign({}, state, {
                sliders: action.sliders
            })
        case SET_DISTANCE:
            return Object.assign({}, state, {
                distance: action.distance
            })
        case SET_SEARCH_MODE:
            return Object.assign({}, state, {
                searchMode: action.mode
            })
        default:
            return state
    }
}