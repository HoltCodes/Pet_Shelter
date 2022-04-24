const Pet = require("../models.pet.model.js");


module.exports = {

  createPet: (req, res) => {
    Pet.create(req.body)
    .then((newPet) => res.json(newPet))
    .catch((err) => console.log(err));
  },

  getOnePet: (req, res) => {
    Pet.findOne({ _id: req.params.id })
    .then((onePet) => res.json(onePet))
    .catch((err) => console.log(err));
  },

  getAllPets: (req, res) => {
    Pet.find({})
      .then((allPets) => res.json(allPets))
      .catch((err) => console.log(err));
  },

  updatePet: (req, res) => {
    Pet.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
    .then((updatePet) => res.json(updatePet))
    .catch((err) => console.log(err));
  },

  deletePet: (req, res) => {
    Pet.deleteOne({ _id: req, res})
      .then((deleteId) => res.json(deleteId))
      .catch((err) => console(err));
  },

};