import Tasks from './TaskWrapper';
import { connect } from 'react-redux';
import { editSelectedStatus, remove, complete, incomplete, rmAll } from './../../store/actions/actionCreators';


let mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        selectedStatus: state.selectedStatus,
    }
}

const ACS = { editSelectedStatus, remove, complete, incomplete, rmAll }

export default connect(mapStateToProps, ACS)(Tasks);