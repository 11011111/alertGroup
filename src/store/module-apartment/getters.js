export function getApartments( state ) {
  if (state.apartments) {
    return state.apartments.filter(apartment => apartment.floor <= state.apartFilter.floor.param.max && apartment.floor >= state.apartFilter.floor.param.min)
  }
  return state.apartments
}

export function getFloorParams ( state ) {
  return state.apartFilter.floor.param
}

export function getFloor ( state ) {
  return state.apartFilter.floor
}
