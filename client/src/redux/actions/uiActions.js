export const SET_MAP_WINDOW = 'SET_MAP_WINDOW'
export const SET_SLIDERS = 'SET_SLIDERS'
export const SET_DISTANCE = 'SET_DISTANCE'
export const SET_SEARCH_MODE = 'SET_SEARCH_MODE'

export const MapWindow = {
    height: 0,
    width: 0
}

export const SearchModes = {
    TOURIST_MODE: 'TOURIST_MODE',
    LOCAL_MODE: 'LOCAL_MODE'
}

export const Sliders = {
    food: 2,
    shopping: 0,
    outdoors: 0,
    amusements: 0,
    attractions: 0,
    culture: 0,
    selfcare: 0,
    nightlife: 0,
    remaining: 10,
}

export const Distance = 30;

export function setMapWindow(dims) {
    return { type: SET_MAP_WINDOW, dims }
}

export function setSliders(sliders) {
    return { type: SET_SLIDERS, settings }
}

export function setSettings(dist) {
    return { type: SET_DISTANCE, dist }
}

export function setSearchMode(mode) {
    return { type: SET_SEARCH_MODE, mode }
}