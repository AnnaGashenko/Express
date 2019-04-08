import { Pupils as PupilsModel } from '../models';

export class Pupils {
    constructor(data) {
        this.models = {
            pupils: new PupilsModel(data),
        };
    }

    async findPupils() {
        const data = await this.models.pupils.findPupils();

        return data;
    }

    async createPupils() {
        const data = await this.models.pupils.createPupils();

        return data;
    }


    async findPerson() {
        const data = await this.models.pupils.findPerson();

        return data;
    }

    async createPerson() {
        const data = await this.models.pupils.createPerson();

        return data;
    }
}
