import { Subjects as SubjectsModel } from '../models';

export class Subjects {
    constructor(data) {
        this.models = {
            subjects: new SubjectsModel(data), // создаем экземпляр класса модели и пробрасываем данные в модель
        };
    }

    async find() {
        const data = await this.models.subjects.find();

        return data;
    }

    /**
     * добавление нового teacher в БД
     * @returns {Promise<*>}
     */
    async create() {
        const data = await this.models.subjects.create();

        return data;
    }
}
