require("dotenv").config();
const mongoose = require("mongoose");

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

    __userSchema(){
        const usersShema = new mongoose.Schema({
            nom:{
                type: String,
                required: true,
            },
            age: Number,
            favoriteFoods: [String]
        });
        return usersShema;
    };

    __userMoel(){
        return mongoose.model("users", this.__userSchema());
    };

    createOneUser(user){
        const model = this.__userMoel();
        const pers = new model(user);
        pers.save()
            .then(data => console.log(data))
            .catch(err =>console.log(err.message));
    };

    createManyUsers(user){
        const model = this.__userMoel();
        const pers = model.insertMany(user);
        // pers.save()
        //     .then(data =>console.log(data))
        //     .catch(err =>console.log(err.message));
    }
}





module.exports = new Database(process.env.MONGO_URI);