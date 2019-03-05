import { getPassword } from './getPassword';

export const authenticate = (req, res, next) => {
    // получаем заголовки
    const { authorization } = req.headers;
    // валидируем пароль
    const password = getPassword();

    if (authorization === password) {
        next();
    } else {
        res.status(401).json({ message: 'authentication credentials are not valid' });
    }
};
