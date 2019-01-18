import axios from 'axios'
import swal from 'sweetalert2'
import { loading } from 'actions'
import store from 'store' 
import { withRouter } from 'react-router-dom'
import history from 'historyApp'

function loading (state) {
  store.dispatch(loading(state))
}

const instance = axios.create({
  baseURL: process.env.BASE_URL
})

instance.interceptors.request.use(config => {
  loading(true)
  const { token } = localStorage
  if (token) config.headers['Authorization'] = `Bearer ${token}`
  // config.headers['Content-Type'] = 'application/json'
  config.headers['Accept-Language'] = 'pt'
  config.headers['Accept'] = 'application/json'
  return config
}, err => {
  loading(false)
  return Promise.reject(err)
})

instance.interceptors.response.use(res => {
  loading(false)
  return res
}, err => {
  if (!err.response) {
    loading(false)
    swal(
      'Oops...',
      'Problema com o servidor, tente novamente',
      'error'
    )
    return Promise.reject(err)
  }
  loading(false)
  let error = ((err.response.data && err.response.data.error) || err.response.data.message) || 'Tente novamente'
  if (error.toLocaleLowerCase().indexOf('token') >= 0) {
    localStorage.removeItem('token')
    history.push('/login')
  }
  swal(
    'Oops...',
    error,
    'error'
  )

  return Promise.reject(err)
})

export default instance
