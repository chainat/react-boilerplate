import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import UserList from '../../components/UserList';
import fetchRandomUsers from '../../actions/demoPageActions';

class DemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchRandomUsers({ limit: 10 });
  }

  render() {
    const { users } = this.props;
    return (<UserList users={users}/>);
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  fetchRandomUsers: bindActionCreators(fetchRandomUsers, dispatch),
});

DemoPage.propTypes = {
  users: PropTypes.array.isRequired,
  fetchRandomUsers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoPage);
