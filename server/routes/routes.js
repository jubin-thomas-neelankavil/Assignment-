
const express = require('express');

const itemController = require('../controller/controller.js'); 

const router = express.Router();

router.get('/items', itemController.getAllItems);

router.post('/items', itemController.createItem);

router.put('/items/:id', itemController.updateItem);

router.delete('/items/:id', itemController.deleteItem);

router.get('/items/:id', itemController.getItemDetails);

module.exports = router;
