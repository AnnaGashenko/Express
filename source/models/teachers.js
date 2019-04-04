import v4 from 'uuid/v4';

// ODM
import { teachers } from '../odm';

export class Teachers {
    constructor(data) {
        this.data = data;
    }

    async find() {
        const data = await teachers.find();

        return data;
    }

    /**
     * добаляем внутренний идентификатор к-й будет работать на ряду с id Mongo
     * @returns {Promise<void>}
     */

    async create() {
        const teacher = {
            hash: v4(),
            ...this.data,
        };
        const data = await teachers.create(teacher);

        return data;
    }

    async update() {
        teachers.findOneAndUpdate(
            { _id: id },
            this.data,
            { new: true }
        );
    }
}
