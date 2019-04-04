import { Pupils as PupilsModel } from '../models';

export class Pupils {
    constructor(data) {
        this.models = {
           pupils: new PupilsModel(data), // создаем экземпляр класса модели и пробрасываем данные в модель
        };
    }

    /**
     * отдает список всех teachers из БД
     * @returns {Promise<*>}
     */
    async find() {
        const data = await this.models.pupils.find();

        return data;
    }

    /**
     * добавление нового teacher в БД
     * @returns {Promise<*>}
     */
    async create() {
        const data = await this.models.pupils.create();

        return data;
    }
}
