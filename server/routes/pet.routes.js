const PetController = require("../controllers/pet.controller");

module.exports = (app) => {

  app.post("/api/pets", PetController.createPet);

  app.get("/api/pets/:id", PetController.getOnePet);

  app.get("/api/pets", PetController.getAllPets);

  app.put("/api/pets/:id", PetController.updatePet);

  app.put("/api/like/:id", PetController.likePet);

  app.delete("/api/pets/:id", PetController.deletePet);

};