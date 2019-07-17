export const SET_MAP_WINDOW = 'SET_MAP_WINDOW'
export const SET_SETTINGS = 'SET_SETTINGS'
export const SET_SEARCH_MODE = 'SET_SEARCH_MODE'

export const MapWindow = {
    height: 0,
    width: 0
}

export const SearchModes = {
    TOURIST_MODE: 'TOURIST_MODE',
    LOCAL_MODE: 'LOCAL_MODE'
}

export const Settings = {
    sliders: {
        food: 2,
        shopping: 0,
        outdoors: 0,
        amusements: 0,
        attractions: 0,
        culture: 0,
        selfcare: 0,
        nightlife: 0
    },
    remainingEvents: 10,
    distance: 30
}

export function setMapWindow(dims) {
    return { type: SET_MAP_WINDOW, dims }
}

export function setSettings(settings) {
    return { type: SET_SETTINGS, settings }
}

export function setSearchMode(mode) {
    return { type: SET_SEARCH_MODE, mode }
}