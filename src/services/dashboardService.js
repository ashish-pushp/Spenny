import axios from 'axios'
import { base } from './init'

export const getDashboardDetails = async (driverId, token, navigation) => {
  try {
    const response = await axios.get(`https://${base}`, {
      
      headers: {
        'Content-Type': 'application/json'
      },
    })
    console.log(' home ====> ', response)
    return response
  } catch (error) {
    console.log('error ===> ', error)
    return error
  }
}