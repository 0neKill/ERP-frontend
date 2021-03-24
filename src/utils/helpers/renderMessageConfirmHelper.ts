import {IConfirmResponse, TStatusResponseOpenNotification} from "../../types/utils/general";

export default function renderMessageConfirm(status: TStatusResponseOpenNotification): IConfirmResponse {
    switch (status) {
        case "success": {
            return {
                status: 'success',
                title: 'Готово!',
                subTitle: 'Аккаунт успешно подтвержден!',
            }
        }
        case "error": {
            return {
                status: 'error',
                title: 'Ошибка',
                subTitle: 'Вы указали несуществующий или неверный хеш.',
            }
        }
        case "info": {
            return {
                status: 'info',
                title: 'Подтвердите почту',
                subTitle: 'Ссылка с подтверждением аккаунта отправлена на E-Mail.',
            }
        }

    }
};