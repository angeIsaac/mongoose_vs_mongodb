const mongoose = require("mongoose");
const Shema = mongoose.Schema;
/*
    Créez une personne avec ce prototype :
    - Prototype de personne -

    --------------------

    nom : chaîne [obligatoire]

    âge : nombre

    favoriteFoods : tableau de chaînes (*)
*/
const userShema = new Shema({
        nom:{
            type: String,
            required: true,
        },
        age: Number,
        favoriteFoods: [String]
    })

module.exports = mongoose.model("users", userShema);
