import { Store } from 'express-session';

export class sessionStore extends Store{

    constructor() {
        super();

        this.storage = new Map();
    }

    get() {}

    set(sid, session, callback) {
        this.storage.set(sid, session);
    }

    destroy () {}

    getAll () {
        return this.storage;
    }

    destroyAll() {
        this.storage.clear();
    }
}