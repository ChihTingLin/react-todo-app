import React from 'react';
import { connect } from 'react-redux';
import actionCreators from './userActions';
import { bindActionCreators } from 'redux';

class UserList extends React.Component {
  fetchData = () => {
    this.props.fetchUserList()
  }

  render() {
    const { isLoading, userList } = this.props.user
    return (
      <div>
        <button
          onClick={this.fetchData}
          className="btn btn-info"
          style={{ marginBottom: '10px' }}
        >
          Fetch User Data
        </button>
        {isLoading ? <div>Loading...</div> :
          <div className="row">
            {userList.map(user => (
              <div key={user.id} className="col-md-3 text-center">
                <img alt={user.name} src={user.avatar} />
                <br />
                {user.name}
                <br />
                {user.createdAt}
              </div>
            ))}
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(actionCreators, dispatch),
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList)