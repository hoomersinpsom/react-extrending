import axios from 'axios'
import swal from 'sweetalert2'
import { loading } from 'actions'
import store from 'store' 

function setLoading (state) {
  store.dispatch(loading(state))
}

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

instance.interceptors.request.use(config => {
  setLoading(true)
  return config
}, err => {
  setLoading(false)
  return Promise.reject(err)
})

instance.interceptors.response.use(res => {
  setLoading(false)
  return res
}, err => {
  if (!err.response) {
    setLoading(false)
    swal.fire(
      'Oops...',
      'Problema com o servidor, tente novamente',
      'error'
    )
    return Promise.reject(err)
  }
  setLoading(false)
  const error = err.response && err.response.data
  swal.fire(
    'Oops...',
    error,
    'error'
  )

  return Promise.reject(err)
})

export default instance
