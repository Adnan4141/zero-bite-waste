const Waste = require('../models/waste');

// POST /api/waste
exports.addWaste = async (req, res) => {
  try {
    const { foodItem, quantity } = req.body;
    const newWaste = new Waste({
      foodItem,
      quantity,
      addedBy: req.user.id
    });

    await newWaste.save();
    res.status(201).json(newWaste);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/waste
exports.getWaste = async (req, res) => {
  try {
    const waste = await Waste.find().populate('addedBy', 'username email');
    res.status(200).json(waste);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
