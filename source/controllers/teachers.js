import { Teachers as TeachersModel } from '../models';

export class Teachers {
    constructor(data) {
        this.models = {
            teachers: new TeachersModel(data), // создаем экземпляр класса модели и пробрасываем данные в модель
        };
    }

    /**
     * отдает список всех teachers из БД
     * @returns {Promise<*>}
     */
    async find() {
        const data = await this.models.teachers.find();

        return data;
    }

    /**
     * добавление нового teacher в БД
     * @returns {Promise<*>}
     */
    async create() {
        const data = await this.models.teachers.create();

        return data;
    }

    async update() {
        const data = await this.models.teachers.update();

        return data;
    }
}
