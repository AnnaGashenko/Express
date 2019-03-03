// Core
import express from 'express';

// Handlers
import * as auth from './';
import * as login from './login';

// Instruments
import { authenticate } from '../../helpers';

const route = express.Router();

route.post('/', auth.post);

route.post('/login', [authenticate], login.post);

export { route as auth };