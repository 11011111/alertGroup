import productApi from 'src/api/products'

export function apartAction(context, data) {
  return new Promise(resolve => {
    productApi.apartment(data)
      .then(response => {
        context.commit('apartSuccess', response.data)

        let floorNum = response.data.map(apartment => {
          return apartment.floor
        })

        context.commit('FLOOR_MUTATION', {
          param: {
            min: Math.min(...floorNum),
            max: Math.max(...floorNum),
          },
          dMin: Math.min(...floorNum),
          dMax: Math.max(...floorNum),
        })
      })
      .catch(result => {
        context.commit('apartFailed', result.response.data.errors)
      })
  })
}
