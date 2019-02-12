import {
  FETCH_SAMPLE,
} from '../consts/actions';

const fetchRandomUsers = payload => ({
  type: FETCH_SAMPLE,
  payload,
});

export default fetchRandomUsers;
