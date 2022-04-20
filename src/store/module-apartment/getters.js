export function getApartments( state ) {
  if (state.apartments) {

    return state.apartments.filter(apartment => apartment.floor <= state.apartFilter.floor.max && apartment.floor >= state.apartFilter.floor.min)
  }
  return state.apartments
}

export function getFloorInterval( state ) {
  return state.apartFilter.floorInterval
}

export function getFloor ( state ) {
  return state.apartFilter.floor
}
