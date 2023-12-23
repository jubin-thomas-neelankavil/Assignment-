

const Item = require('../schema/schema'); 


const itemController = {
  // Get all items
  getAllItems: async (req, res) => {
    try {
      const items = await Item.find();
      res.json(items);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  // Create a new item
  createItem: async (req, res) => {
    const { title, description } = req.body;

    try {
      const newItem = await Item.create({ title, description });
      res.status(201).json(newItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  // Update an existing item
  updateItem: async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    try {
      const updatedItem = await Item.findByIdAndUpdate(id, { title, description }, { new: true });
      res.json(updatedItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  // Delete an item
  deleteItem: async (req, res) => {
    const { id } = req.params;

    try {
      const deletedItem = await Item.findByIdAndDelete(id);
      res.json(deletedItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },




  getItemDetails: async (req, res) => {
    const { id } = req.params;
  
    console.log(id, "++++++++++++++++");
  
    try {
      const item = await Item.findById(id);
      console.log(item, "yyyyyyyyyyyyyyy");
  
      res.json(item);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  
  };

module.exports = itemController;
