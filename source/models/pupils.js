import v4 from 'uuid/v4';

// ODM
import { pupils } from '../odm';

export class Pupils {
    constructor(data) {
        this.data = data;
    }

    async find() {
        const data = await pupils.find();

        return data;
    }

    async create() {
        const pupils = {
            hash: v4(),
            ...this.data,
        };
        const data = await pupils.create(pupils);

        return data;
    }

}
