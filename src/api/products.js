import axios from "src/api/axios";

const apartment = data => {
  return axios.get('/apartment', {data})
}

export default {
  apartment
}
