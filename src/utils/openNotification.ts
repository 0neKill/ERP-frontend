import {notification} from 'antd';

//Types
import {OpenNotification} from "../types/utils/general";


export default function openNotification({
                                             status,
                                             message,
                                             description,
                                             duration,
                                             durationRedirect
                                         }: OpenNotification): Promise<OpenNotification> {
    return new Promise<OpenNotification>((resolve: any) => {
        notification[status]({
            message: message,
            description: description,
            duration: duration
        });
        setTimeout((): any => resolve(), durationRedirect)
    })
}