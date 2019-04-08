// Core
import express from 'express';

// Handlers
import * as pupils from './';
import * as person from './person';

// Instruments
import { authenticate } from '../../helpers';

const route = express.Router();

route.get('/', person.getPersons);
route.post('/', [ authenticate ], person.createPersons)

route.get('/', [ authenticate ], pupils.getPupils);
route.post('/', [ authenticate ], pupils.createPupils);

route.get('/:personId', [ authenticate ], person.get);
route.post('/:personId', [ authenticate ], person.post);
route.put('/:personId', [ authenticate ], person.put);
route.delete('/:personId', [ authenticate ], person.remove);

export { route as pupils };
