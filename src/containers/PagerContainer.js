import { connect } from 'react-redux';

import * as PagerActions from '../actions/PagerActions';

import Pager from '../components/common/Pager';

function mapStateToProps(state) {
    return {
        active: state.pager.page,
        size: state.pager.pages,
    };
}

export default connect(mapStateToProps, { ...PagerActions })(Pager);
