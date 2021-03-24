import {AuthFieldValue, AuthFunctionsValues, AuthValues} from "../../types/layouts/auth/general";


export default function validateForm(values: AuthValues, sing_in: boolean): AuthValues {

    const errors: AuthValues = {} as AuthValues

    const validate: AuthFunctionsValues = {
        email: (key) => {
            if (!key) return errors.email = 'Заполните поле E-mail';
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(key)) return errors.email = 'Некорректный E-mail';
        },
        password: (key) => {
            if (!key) return errors.password = 'Введите пароль';
            if (!sing_in && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(key)) return errors.password = "Слишком лёгкий пароль";
        },
        user_name: (key) => {
            if (!sing_in && !key) return errors.user_name = 'Введите свое имя';
            if (!sing_in && key.length > 9) return errors.user_name = 'Имя не должно быть меньше 3 и больше 9'
            if (!sing_in && !/^[\w\s-]{3,9}/i.test(key)) return errors.user_name = 'Имя не должно быть меньше 3 и больше 9';
        },
        repeat_password: (key) => {
            if (!sing_in && !key) return errors.repeat_password = 'Повторите пароль';
            if (!sing_in && (key !== values.password)) return errors.repeat_password = 'Пароли не совпадают';
        },

    }

    Object.keys(values).forEach((item) => validate[item as AuthFieldValue] && validate[item as AuthFieldValue](values[item as AuthFieldValue]));
    return errors;
}