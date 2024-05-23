const database = require("./database/dataBase");
const user = {
    nom: "yao",
    age: 25,
    favoriteFoods: ["riz", "orange"]
};

// database.createOneUser(user);

const users = [
    {
        nom: "toure",
        age: 56,
        favoriteFoods: ["saurce claire ", "kek", "croissant"]
    },
    {
        nom: "bamba",
        age: 34,
        favoriteFoods: ["mangue", "papaye", "avocat"]
    },
    {
        nom: "john",
        age: 46,
        favoriteFoods: ["patate", "patate sauter"]
    }
];

database.createManyUsers(users);
