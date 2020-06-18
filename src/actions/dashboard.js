import { getDashboardDetails } from '../services/dashboardService'

export const DASHBOARD_DATA_GET_REQUEST = "DASHBOARD_DATA_GET_REQUEST"
export const DASHBOARD_DATA_GET_SUCCESS = "DASHBOARD_DATA_GET_SUCCESS"
export const DASHBOARD_DATA_GET_FAILURE = "DASHBOARD_DATA_GET_FAILURE"

const getDashboardDataRequest = () => {
  return {
    type: DASHBOARD_DATA_GET_REQUEST
  }
}

const receiveDashboardData = dashboardData => {
  return {
    type: DASHBOARD_DATA_GET_SUCCESS,
    dashboardData
  }
}

const getDashboardDataFailiure = () => {
  return {
    type: DASHBOARD_DATA_GET_FAILURE
  }
}


export const getDashboardData = (driverId, token, navigation) => async dispatch => {
  dispatch(getDashboardDataRequest())
  const response = await getDashboardDetails(driverId, token, navigation)

  if (response) {
    if(response.status == 200){
      if (response.data) {
        dispatch(receiveDashboardData(response.data))
        return true
      } else {
        dispatch(getDashboardDataFailiure())
        return false
      }
    }  
  } else {
    dispatch(getDashboardDataFailiure())
    return false
  }
}