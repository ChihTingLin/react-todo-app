export const FETCH_USER_LIST = 'FETCH_USER_LIST';
export const FETCH_USER_LIST_SUCCESS = 'FETCH_USER_LIST_SUCCESS';
export const FETCH_USER_LIST_FAILURE = 'FETCH_USER_LIST_FAILURE';

const fetchUserList = () => ({
  type: FETCH_USER_LIST
})

const fetchUserListSuccess = () => ({
  type: FETCH_USER_LIST_SUCCESS
})

const fetchUserListFailure = () => ({
  type: FETCH_USER_LIST_FAILURE
})

const actionCreators = {
  fetchUserList,
  fetchUserListSuccess,
  fetchUserListFailure
}

export default actionCreators