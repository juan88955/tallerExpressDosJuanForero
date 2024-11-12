import "dotenv/config.js";
import "../../config/database.js";
import User from "../User.js";

let users = [
    {
        name: "Juan",
        email: "juan@gmail.com",
        address: "Av. Juan",
        phone: 123456789,
        password: "K9$mP2#vL5nX8@",
        online: false
    },
    {
        name: "Pedro",
        email: "pedro@gmail.com",
        address: "Av. Pedro",
        phone: 987654321,
        password: "Nh7$Bv9#mK4pL@",
        online: false
    },
    {
        name: "Carlos",
        email: "carlos@gmail.com",
        address: "Av. Carlos",
        phone: 654321098,
        password: "Rx5$Zt8#Wy3qN@",
        online: false
    },
    {
        name: "Luis",
        email: "luis@gmail.com",
        address: "Av. Luis",
        phone: 543210987,
        password: "Jm6$Hp4#Qd9cV@",
        online: false
    },
    {
        name: "Maria",
        email: "maria@gmail.com",
        address: "Av. Maria",
        phone: 432109876,
        password: "Yt7$Fg5#Bn2xM@",
        online: false
    },
    {
        name: "Jose",
        email: "jose@gmail.com",
        address: "Av. Jose",
        phone: 321098765,
        password: "Wd3$Uj8#Ik6tR@",
        online: false
    },
    {
        name: "Ana",
        email: "ana@gmail.com",
        address: "Av. Ana",
        phone: 210987654,
        password: "Qz9$Xc4#Vm7hE@",
        online: false
    },
    {
        name: "Roberto",
        email: "roberto@gmail.com",
        address: "Av. Roberto",
        phone: 123498765,
        password: "Ts2$Py7#Lk9mB@",
        online: false
    },
    {
        name: "Miguel",
        email: "miguel@gmail.com",
        address: "Av. Miguel",
        phone: 987612345,
        password: "Hc8$Nw5#Vf3xD@",
        online: false
    },
    {
        name: "Sofia",
        email: "sofia@gmail.com",
        address: "Av. Sofia",
        phone: 654389012,
        password: "Ga4$Mt6#Bj1kR@",
        online: false
    }
];


User.insertMany(users)