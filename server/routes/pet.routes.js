const PetController = require("../controllers/pet.controller");

module.exports = (app) => {

  app.post("/api/pets", PetController.createPet);

  app.get("/api/pets/:id", PetController.getOnePet);

  app.get("/api/pets", PetController.getAllPets);

  app.put("/api/product/:id", PetController.updatePet);

  app.delete("/api/pets/:id", PetController.deletePet);

};