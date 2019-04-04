import v4 from 'uuid/v4';

// ODM
import { subjects } from '../odm';

export class Subjects {
    constructor(data) {
        this.data = data;
    }

    async find() {
        const data = await subjects.find();

        return data;
    }

    async create() {
        const subjects = {
            hash: v4(),
            ...this.data,
        };
        const data = await subjects.create(subjects);

        return data;
    }

}
