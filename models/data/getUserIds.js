import "dotenv/config.js";
import "../../config/database.js";
import User from "../User.js";

User.find()
    .then(users => {
        users.forEach(user => {
            console.log(`ID: ${user._id}`);
        });
    })
    .catch(error => console.log(error))
    .finally(() => process.exit());