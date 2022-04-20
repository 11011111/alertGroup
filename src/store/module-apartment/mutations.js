export function apartStart(state) {

}

export function apartSuccess(state, payload) {
  state.apartments = payload
}

export function apartFailed(state, payload) {
  state.validationErrors = payload
}

export function FLOOR_INTERVAL_MUTATION(state, payload) {
  state.apartFilter.floorInterval = payload
}

export function FLOOR_MUTATION(state, payload) {
  state.apartFilter.floor = payload
}



