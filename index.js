const mongoose = require("mongoose");
const userModels = require("./models/userModels");
const Database = require("./database/dataBase")

class User{
    constructor(model){
        this.mod = model
    };

    createOnUser(data){

        /*
        Créer et enregistrer un enregistrement d'un modèle :
        Créez une instance de document à l'aide du constructeur Person que vous avez créé précédemment. 
        Passez au constructeur un objet ayant les champs name, age et favoriteFoods. Leurs types doivent 
        être conformes à ceux du schéma de personne. Appelez ensuite la méthode document.save() 
        sur l'instance de document renvoyée. Passez-lui un rappel en utilisant la convention Node. 
        Exemple 
        //...
        // personne.save (fonction (erreur, données) {
        // ...fais tes trucs ici...});
        */
        const OneUser = new userModels(data);
        OneUser.save()
                .then(data =>console.log(data))
                .catch(err =>console.log(err))
    };

    async createManyUser(data){
        /*
            Créez de nombreux enregistrements avec model.create()
            Parfois, vous devez créer de nombreuses instances de vos modèles, par exemple lors de l'amorçage 
            d'une base de données avec des données initiales. Model.create() prend un tableau d'objets 
            comme [{name: 'John', ...}, {...}, ...] comme premier argument et les enregistre tous dans la base de données.
            Créez plusieurs personnes avec  Model.create() , en utilisant l'argument de fonction arrayOfPeople.
        */
    const manyUser = await userModels.create(data);
    await console.log(manyUser);
    }

    async findMany(req){
        /**
         * Utilisez model.find() pour rechercher votre base de données
            Recherchez toutes les personnes ayant un prénom, en utilisant Model.find() -> [Person]
         */
        await this.mod.find(req).then(data =>console.log(data)).catch(err =>console.log(err));
    };

    async findOne(req){
        await userModels.findOne(req, {nom: 1, age: 1, _id: 0}).exec()
        .then(data =>console.log(data)) 
        .catch(err =>console.log(err.message));
    };

    async findById(req){
        await userModels.findById(req).exec()
            .then(data =>console.log(data))
            .catch(err =>console.log(err));
    };

    async update(req, updte){
        await userModels.findOneAndUpdate(req, updte).exec()
            .then(data =>console.log(data))
            .catch(err =>console.log(err));
    };

    async deleteById(id){
        await userModels.findOneAndDelete(id).exec()
            .then(data =>console.log(data))
            .catch(err =>console.log(err));
    };


}






// Main: 



const data = {
    nom: "marie",
    age: 23,
    favoriteFoods: ["riz gras", "poulet piquer"]
};

const datas = [{
    nom: "noel",
    age: 29,
    favoriteFoods: ["mangue", "avocat"]
},
{
    nom: "merveille",
    age: 5,
    favoriteFoods: ["garba", "croissant"]
}
]

const user = new User(userModels)
// user.createOnUser(data);

// user.createManyUser(datas);

// user.findMany({
//     nom: 'toure'
// })

// user.findOne({nom: "toure"});

// user.update({nom: "toure"}, {age: 76})

// user.deleteById({
//     nom: "toure"
// })
