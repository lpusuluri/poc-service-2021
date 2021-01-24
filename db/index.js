const knex = require('knex');
const plugin = require('knex-case-converter-plugin');

const knexConfig = require('../knexfile');

const configOptions = knexConfig.dev;
const db = knex(Object.assign(configOptions, plugin));

module.exports = db;
