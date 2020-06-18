import {
    DASHBOARD_DATA_GET_REQUEST,
    DASHBOARD_DATA_GET_SUCCESS,
    DASHBOARD_DATA_GET_FAILURE,
  } from "../actions/";
  
  export default (
    state = {
        getError: false,
        dashboardData:{},
    },
    action
  ) => {
    switch (action.type) {
      case DASHBOARD_DATA_GET_REQUEST:
        return {
          ...state,
          getError:false
        };
      case DASHBOARD_DATA_GET_SUCCESS:
        return {
          ...state,
          getError:false,
          dashboardData: action.dashboardData
        };
      case DASHBOARD_DATA_GET_FAILURE:
        return {
          ...state,
          getError:true,
        };   
      default:
        return state;
    }
  };