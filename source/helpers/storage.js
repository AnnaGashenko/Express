import { Store } from 'express-session';

export class Storage extends Store{

    constructor() {
        super();

        this.storage = new Map();
    }

    get(sid, callback) {
        callback();
    }

    set(sid, session, callback) {
        callback();
    }

    destroy (sid, callback) {}

    getAll () {
        return Array.from(this.storage);
    }

    destroyAll() {
        console.log('destroyAll');
        this.storage.clear();
    }
}