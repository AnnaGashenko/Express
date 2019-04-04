import { Classes as ClassesModel } from '../models';

export class Classes {
    constructor(data) {
        this.models = {
            classes: new ClassesModel(data), // создаем экземпляр класса модели и пробрасываем данные в модель
        };
    }

    async findAllClasses() {
        const data = await this.models.сlasses.findAllClasses();

        return data;
    }

    async findOneClass() {
        const data = await this.models.сlasses.findOneClass();

        return data;
    }


    async create() {
        const data = await this.models.сlasses.create();

        return data;
    }

    async createByClassId() {
        const data = await this.models.сlasses.createByClassId();

        return data;
    }


    async update() {
        const data = await this.models.сlasses.update();

        return data;
    }

    async delete() {
        const data = await this.models.сlasses.delete();

        return data;
    }

}
