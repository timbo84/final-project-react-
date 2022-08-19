import Spinner from 'react-bootstrap/Spinner'
import { useState } from 'react'
import axios from 'axios'

function LoadingIndicator() {
  let [ visible, setVisible ] = useState(false)
  axios.interceptors.request.use((config) => {
    setVisible(true)
    return config})

    axios.interceptors.response.use((response) => {
        setVisible(false)
        return response;
      }, (error) => {
        setVisible(false)
        return Promise.reject(error);
      })
      
  if (!visible) return null
  return (
    <Spinner animation="grow" size="sm" variant="success" />
  )
  
}

export default LoadingIndicator