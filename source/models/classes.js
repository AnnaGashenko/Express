import v4 from 'uuid/v4';

// ODM
import { classes } from '../odm';

export class Classes {
    constructor(data) {
        this.data = data;
    }

    async findOneClass() {
        const data = await classes.find({ id: this.data.id });

        return data;
    }

    async findAllClasses() {
        const data = await classes.find();

        return data;
    }

    async create() {
        const classes = {
            hash: v4(),
            ...this.data,
        };
        const data = await classes.create(classes);

        return data;
    }

    async createByClassId() {
        const classes = {
            hash: v4(),
            ...this.data,
        };
        const data = await classes.create(classes);

        return data;
    }

    async update() {
        const data = await classes.findOneAndUpdate(
            { _id: this.data.id },
            this.data.payload,
            { new: true }
        );

        return data;
    }

    async delete() {

        const data = await classes.findOneAndDelete({ _id: this.data.id });

        return data;
    }

}
