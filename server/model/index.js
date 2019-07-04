'use strict'
/*
 * Exports an object with various methods to perform CRUD operations on the database
 * The methods are declared here but they call files in the create, read, update,
 * and delete directories which have the method definitions.
 */

// Require all methods from CRUD directories that are referred to in this interface

// Create


// Read


// Update

// Database utility functions
const close = require('./final/close')

// Object to export
const model = {
  /* ******
   * Create
   * ******/

  /* ******
   * Read
   * ******/
  // Read general data


  // Lookup specific information


  // Checks


  // Lookup whole tables


  /* ******
   * Update
   * ******/


  /* ******
   * Database utility functions
   * ******/
  close: close
}

module.exports = model
