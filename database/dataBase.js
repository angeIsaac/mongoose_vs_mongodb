require("dotenv").config();
const mongoose = require("mongoose");

/*
    Installation et configuration de Mongoose :
    Ajoutez MongoDB et Mongoose au package.json du projet. Stockez l'URI de votre base de données 
    MongoDB Atlas dans le fichier privé .env sous le nom MONGO_URI. Entourez l'URI de guillemets 
    simples ou doubles et assurez-vous qu'il n'y a aucun espace entre la variable et le « = » et la valeur et « = ».
    Connectez-vous à la base de données en utilisant la syntaxe suivante :

    `mongoose.connect(<Votre URI>, { useNewUrlParser : true, useUnifiedTopology : true }); `
 */
class Database{
    constructor(uri){
        this.uri = uri;
        this.__connection();
    }
    __connection(){
        mongoose.connect(this.uri)
            .then(()=>console.log("connection reussir"))
            .catch(()=>console.log("une erreur est survenu"));
    };
}





module.exports = new Database(process.env.MONGO_URI);