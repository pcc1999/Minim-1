import {Router} from 'express';

import {getInstitutions, addInstitution, removeInstitution} from '../controllers/institutionsScript';

const api = Router();

/**
 * API Insitutions Service
 */

/**
 * Institutions Service
 */
api.route('/institutions').post(addInstitution);
api.route('/institutions').get(getInstitutions);
api.route('/institutions/remove').post(removeInstitution);
export default api;