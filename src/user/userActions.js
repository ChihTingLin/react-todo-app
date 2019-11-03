export const FETCH_USER_LIST = 'FETCH_USER_LIST';
export const FETCH_USER_LIST_SUCCESS = 'FETCH_USER_LIST_SUCCESS';
export const FETCH_USER_LIST_FAILURE = 'FETCH_USER_LIST_FAILURE';

const fetchUserList = () => {
  return (dispatch, getState) => {
    console.log(getState())
    dispatch({ type: FETCH_USER_LIST })
    fetch('https://5db91ed6177b350014ac8050.mockapi.io/api/users')
      .then(res => res.json())
      .then(data => {
        if (data.length === 0) {
          dispatch(fetchUserListFailure('No user data'))
        } else {
          dispatch(fetchUserListSuccess(data))
        }
      }).catch((error) => {
        dispatch(fetchUserListFailure(error))
      })
  }
}

const fetchUserListSuccess = (data) => ({
  type: FETCH_USER_LIST_SUCCESS,
  data
})

const fetchUserListFailure = (error) => ({
  type: FETCH_USER_LIST_FAILURE,
  error
})

const actionCreators = {
  fetchUserList,
  fetchUserListSuccess,
  fetchUserListFailure
}

export default actionCreators