"use strict";
exports.__esModule = true;
var express_1 = require("express");
var institutionsScript_1 = require("../controllers/institutionsScript");
var api = express_1.Router();
/**
 * API Insitutions Service
 */
/**
 * Institutions Service
 */
api.route('/institutions').post(institutionsScript_1.addInstitution);
api.route('/institutions').get(institutionsScript_1.getInstitutions);
api.route('/institutions/remove').post(institutionsScript_1.removeInstitution);
exports["default"] = api;
