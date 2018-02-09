import { connect } from 'react-redux';

import * as PagerActions from '../../../actions/PagerActions';
import * as UsersActions from '../../../actions/UsersActions';

import User from '../../../components/pages/search/User';

export default connect(null, { ...PagerActions, ...UsersActions })(User);
