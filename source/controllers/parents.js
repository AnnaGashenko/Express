import { Parents as ParentsModel } from '../models';

export class Parents {
    constructor(data) {
        this.models = {
            parents: new ParentsModel(data),
        };
    }

    async create() {
        const data = await this.models.parents.create();

        return data;
    }

    async find() {
        const data = await this.models.parents.find();

        return data;
    }

    async findById() {
        const data = await this.models.parents.findById();

        return data;
    }

    async assignSubject() {
        const data = await this.models.parents.assignSubject();

        return data;
    }

    async findAllPupils() {
        const data = await this.models.parents.findAllPupils();

        return data;
    }

    async createPupils() {
        const data = await this.models.parents.createPupils();

        return data;
    }
}
