import { connect } from 'react-redux';
import Input from './Input';
import { addTask, typing } from './../../store/actions/actionCreators';

let mapStateToProps = (state) => {
    return {
        currentValue: state.inputCV
    }
}

const ACS = { addTask, typing }

export default connect(mapStateToProps, ACS)(Input);