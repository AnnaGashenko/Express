import v4 from 'uuid/v4';

// ODM
import {pupils, persons} from '../odm';

export class Pupils {
    constructor(data) {
        this.data = data;
    }

    async findPupils() {
        const data = await pupils.find().lean();

        return data;
    }

    async createPupils() {
        const pupil = {
            hash: v4(),
            ...this.data,
        };
        const data = await pupils.create(pupil);

        return data;
    }

    async findPerson() {
        const data = await persons
            .find()
            .populate({ path: 'class', select: '-_id -__v' })
            .populate({ path: 'parents.parent', select: '-_id -__v' })
            .select('-_id -__v')
            .lean();

        return data;
    }

    async createPerson() {
        const person = {
            hash: v4(),
            ...this.data,
        };
        const data = await persons.create(person);

        return data;
    }
}
