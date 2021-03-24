import {withFormik} from "formik";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {History} from 'history'

//Components
import {SingIn} from '../component';
import {validateForm} from "../../../../utils/helpers";
import {Actions} from '../../../../store/actions';

//Types
import {IDataPayloadSingIn, IFormValuesSingIn} from "../../../../types/layouts/auth/sing_in";
import {AuthValues} from "../../../../types/layouts/auth/general";


const MyEnhancedForm = withFormik<withFormikSingIn, IFormValuesSingIn>({
    mapPropsToValues: (): IFormValuesSingIn => ({email: '', password: ''}),

    // Custom sync validation
    validate: values => validateForm(values as AuthValues, true),

    handleSubmit: (values, {setSubmitting, resetForm, props}) => {
        const methods: IDataPayloadSingIn = {
            setSubmitting: setSubmitting,
            resetForm: resetForm
        }
        props.send_data(values, methods);
    },
    displayName: 'SingIn',
})(SingIn);

interface withFormikSingIn {
    history: History,
    send_data: (data: IFormValuesSingIn, methods: IDataPayloadSingIn) => void,
}

interface mapDispatchToPropsReturn {
    send_data: (data: IFormValuesSingIn, methods: IDataPayloadSingIn) => void,
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsReturn => ({
    send_data: (data: IFormValuesSingIn, methods: IDataPayloadSingIn) => {
        dispatch(Actions.Authentication(data, methods))
    }
})

export default connect(null, mapDispatchToProps)(MyEnhancedForm);