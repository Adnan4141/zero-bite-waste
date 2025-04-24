const Donate = require("../models/donate");

 

// Create a new donation
exports.createDonation = async (req, res) => {
  try {
    const donation = new Donate(req.body);
    const savedDonation = await donation.save();
    res.status(201).json(savedDonation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all donations
exports.getAllDonations = async (req, res) => {
  try {
    const donations = await Donate.find();
    res.status(200).json(donations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single donation by ID
exports.getDonationById = async (req, res) => {
  try {
    const donation = await Donate.findById(req.params.id);
    if (!donation) return res.status(404).json({ message: 'Donation not found' });
    res.status(200).json(donation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a donation
exports.updateDonation = async (req, res) => {
  try {
    const updatedDonation = await Donate.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updatedDonation) return res.status(404).json({ message: 'Donation not found' });
    res.status(200).json(updatedDonation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a donation
exports.deleteDonation = async (req, res) => {
  try {
    const deleted = await Donate.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Donation not found' });
    res.status(200).json({ message: 'Donation deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
