// Core
import express from 'express';

// Handlers
import * as authenticate from './';
import * as list from './list';
import * as clear from './clear';

const route = express.Router();

route.post('/login', authenticate.post);
route.post('/list', list.post);
route.post('/clear', clear.post);

export { route as auth };
