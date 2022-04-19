import productApi from 'src/api/products'

export function apartAction (context, data) {
  return new Promise(resolve => {
    productApi.apartment(data)
      .then(response => {
        context.commit('apartSuccess', response.data)
      })
      .catch(result => {
        context.commit('apartFailed', result.response.data.errors)
      })
  })
}
