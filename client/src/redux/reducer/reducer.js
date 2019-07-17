import { MapWindow,
        Settings,
        SearchModes,
        SET_MAP_WINDOW,
        SET_SEARCH_MODE,
        SET_SETTINGS
     } from '../actions/uiActions'

const initialState = {
    mapWindow: [MapWindow.height, MapWindow.width],
    settings = [Settings.sliders, Settings.distance, Settings.remainingEvents],
    searchMode = SearchModes.TOURIST_MODE
}

function wkndrApp(state = initialState, action) {
    switch (action.type) {
        case SET_MAP_WINDOW:
            return Object.assign({}, state, {
                mapWindow: [action.height, action.width]
            })
        case SET_SETTINGS:
            return Object.assign({}, state, {
                settings: [action.sliders, action.distance, action.remainingEvents]
            })
        case SET_SEARCH_MODE:
            return Object.assign({}, state, {
                searchMode: action.
            })
        default:
            return state
    }
}