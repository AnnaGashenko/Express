// Core
import express from 'express';

// Handlers
import * as auth from './';
import * as login from './login';

// Instruments
import { authenticate } from '../../helpers';

const route = express.Router();

route.get('/', auth.get);
route.post('/', auth.post);

route.get('/login', login.get);
route.post('/login', login.post);

export { route as auth };
