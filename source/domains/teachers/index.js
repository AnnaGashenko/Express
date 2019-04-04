// Core
import dg from 'debug';

// Instruments
import { Teachers } from '../../controllers';

const debug = dg('router:teachers');

export const get = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const teachers = new Teachers();
        const data = await teachers.find();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

/**
 * Запрос приходит роут, роут вызывает контроллер, в который мы передаем данные
 * метод котроллера создает модель и вызывает метод модели
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const post = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const teachers = new Teachers(req.body); // передаем в контроллер body
        const data = await teachers.create(); // вызываем метод котроллера create

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
