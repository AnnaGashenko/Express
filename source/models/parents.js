// Core
import v4 from 'uuid/v4';

// Instruments
import { parents } from '../odm';

export class Parents {
    constructor(data) {
        this.data = data;
    }

    async create() {
        const parent = {
            hash: v4(),
            ...this.data,
        };
        const data = await parents.create(parent);

        return data;
    }

    async find() {
        const data = await parents.find().lean();

        return data;
    }

    async findAllPupils() {
        const data = await parents
            .find()
            .populate({ path: 'pupils.pupil', select: '-_id -__v' })
            .select('-_id -__v')
            .lean();

        return data;
    }

    async createPupils() {
        const pupil = {
            hash: v4(),
            ...this.data,
        };
        const data = await parents.create(pupil);

        return data;
    }

    async findById() {
        const { id } = this.data;
        const data = await parents
            .findById(id)
            .populate({ path: 'pupils.pupil', select: '-_id -__v' })
            .select('-_id -__v')
            .lean();

        return data;
    }

    // async assignPerson() {
    //     const { id, person } = this.data;
    //     const data = await parents.findByIdAndUpdate(
    //         id,
    //         {
    //             $addToSet: { pupils: { person } },
    //         },
    //         {
    //             new: true,
    //             runValidators: true
    //         },
    //     );
    //
    //     return data;
    // }
}
