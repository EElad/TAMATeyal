const express = require('express');
const router = express.Router();

// GET /flats getAllFlats
router.get('/', (req, res) => {

   res.sendStatus('200');
   });

// GET /flats/:id getFlatByID
router.get('/:id', (req, res) => {

   res.sendStatus('200');
   });

// POST /flats insertFlat
router.post('/', (req, res) => {

   res.sendStatus('200');
   });

// DELETE /flats/:id deleteFlatById
router.delete('/:id', (req, res) => {
   
   res.sendStatus('200');
   });

module.exports = router;