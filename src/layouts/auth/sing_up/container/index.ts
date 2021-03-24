import {withFormik} from "formik";
import {History} from 'history';
import {connect} from "react-redux";
import {Dispatch} from "redux";

//Components
import {SingUp} from '../component';
import {Actions} from '../../../../store/actions';
import {validateForm} from "../../../../utils/helpers";

//Types
import {IDataPayloadSingUp} from "../../../../types/layouts/auth/sing_up";
import {AuthValues} from "../../../../types/layouts/auth/general";


const MyEnhancedForm = withFormik<withFormikSingUp, AuthValues>({
    mapPropsToValues: (): AuthValues => ({
        email: '',
        password: '',
        user_name: '',
        repeat_password: ''
    }),
    // Custom sync validation
    validate: values => validateForm(values as AuthValues, false),

    handleSubmit: (values, {setSubmitting, setFieldError, props}) => {
        const methods: IDataPayloadSingUp = {
            setSubmitting: setSubmitting,
            setFieldError: setFieldError,
            history: props.history,
        }
        props.send_data(values, methods);
    },
    displayName: 'SingIn',
})(SingUp);

interface withFormikSingUp {
    history: History,
    send_data: (data: AuthValues, methods: IDataPayloadSingUp) => void,
}

interface mapDispatchToPropsReturn {
    send_data: (data: AuthValues, methods: IDataPayloadSingUp) => void,
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsReturn => ({
    send_data: (data: AuthValues, methods: IDataPayloadSingUp) => {
        dispatch(Actions.Registration(data, methods))
    }
})

export default connect(null, mapDispatchToProps)(MyEnhancedForm);