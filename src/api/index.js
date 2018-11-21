import axios from 'axios'

export function fetchInitList() {
  return axios.get('/list.json')
}