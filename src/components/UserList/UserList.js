import React from 'react';
import PropTypes from 'prop-types';
import LoaderHOC from '../../containers/LoaderHOC';
import styles from './UserList.module.scss';

const UserList = (props) => {
  const { users } = props;
  return (
    <div className={styles.randomUser}>
      <h3>User list</h3>
      <ul>
        {users.map(r => (<li key={r.email}>
            <div className={styles.record}>
              <img src={r.picture.thumbnail}/>
              <div className={styles.info}>
                {r.name.first} {r.name.last} ({r.email})
              </div>
            </div>
          </li>))}
      </ul>
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default LoaderHOC(UserList);
