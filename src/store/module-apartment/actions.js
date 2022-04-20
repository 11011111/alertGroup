import productApi from 'src/api/products'

export function apartAction(context, data) {
  return new Promise(resolve => {
    productApi.apartment(data)
      .then(response => {
        context.commit('apartSuccess', response.data)

        let floorNum = response.data.map(apartment => {
          return apartment.floor
        })

        context.commit('FLOOR_INTERVAL_MUTATION', {
          min: Math.min(...floorNum),
          max: Math.max(...floorNum),
        })

        context.commit('FLOOR_MUTATION', {
          min: Math.min(...floorNum),
          max: Math.max(...floorNum),
        })


      })
      .catch(result => {
        context.commit('apartFailed', result.response.data.errors)
      })
  })
}
