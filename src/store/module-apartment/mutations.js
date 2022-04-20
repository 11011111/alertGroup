export function apartStart(state) {

}

export function apartSuccess(state, payload) {
  state.apartments = payload
}

export function apartFailed(state, payload) {
  state.validationErrors = payload
}

export function FLOOR_PARAM_MUTATION(state, payload) {
  // state.apartFilter.floor = payload
  state.apartFilter.floor.param = payload
}

export function FLOOR_MUTATION(state, payload) {
  state.apartFilter.floor = payload
  // state.apartFilter.floor.param = payload
}



