import User from "../models/User.js";
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

// Configuración de la estrategia JWT para Passport
export default passport.use(
    new Strategy(
        {
            // Extraer el token JWT del header de autorización
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            // Usar la clave secreta del .env para verificar el token
            secretOrKey: process.env.SECRET
        },
        async (jwt_payload, done) => {
            try {
                console.log('Verificando token JWT...');

                // Buscar usuario por email desde el payload del token
                let user = await User.findOne({ email: jwt_payload.email });

                if (user) {
                    console.log('Usuario autenticado:', user.email);
                    return done(null, user);
                } else {
                    console.log('Usuario no encontrado');
                    return done(null, null);
                }
            } catch (error) {
                console.error('Error en autenticación:', error);
                return done(error, null);
            }
        }
    )
);