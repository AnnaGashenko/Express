export const getPassword = () => {
    // получаем пароль из пременной окружения
    const { PASSWORD } = process.env;

    // если нет такой переменной выбрасываем ошибку
    if (!PASSWORD) {
        throw new Error('Environment variable PORT should be specified');
    }
    // прогоняем через регулярное выражение
    const isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(PASSWORD);

    if (!isValid) {
        throw new Error(
            'Environment variable PASSWORD should have a minimum eight characters, at least one letter, one number and one special character',
        );
    }

    return PASSWORD;
};
