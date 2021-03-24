import React from 'react';
import {useDispatch} from "react-redux";

//Components
import {Actions} from '../../../../store/actions';
import {Confirm as BaseConfirm} from '../component';
import renderMessageConfirm from "../../../../utils/helpers/renderMessageConfirmHelper";

//Types
import {IConfirmResponse, ILocation, TStatusResponseOpenNotification} from "../../../../types/utils/general";


export default function Confirm({location}: ILocation) {
    const [confirm, setConfirm] = React.useState<IConfirmResponse>({} as IConfirmResponse);
    const [loading, setLoading] = React.useState<boolean>(true);

    const dispatch = useDispatch();

    const setStateConfirm = (status: TStatusResponseOpenNotification, loading: boolean) => {
        setConfirm(renderMessageConfirm(status));
        setLoading(loading);
    }

    React.useEffect(() => {
        if (location.search) {
            const hash = location.search.split('?hash=')[1];
            dispatch(Actions.Confirm(hash, setStateConfirm));
        } else {
            setStateConfirm('info', false);
        }
    }, [location.search, dispatch]);

    return (
        <BaseConfirm
            loading={loading}
            status={confirm.status}
            title={confirm.title}
            subTitle={confirm.subTitle}
        />
    )
}