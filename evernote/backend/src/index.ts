import "reflect-metadata";
import {createConnection} from "typeorm";
import express from "express";
import { CONST } from "./constants/strings";
import cors from "cors";
import morgan from "morgan";
import { ApolloServer, gql } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { MyContext, UserResolver } from "./graphql/UserResolver";

createConnection().then(async connection => {
    const app = express()

    //Express Middlewares
    app.use(cors())
    app.use(morgan("dev"))

    //Routes
    app.get('/', (req, res) => {
        res.send("Hello World")
    })

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver],
        }),
        context: ({req, res}): MyContext => ({req,res})
    })

    await apolloServer.start();

    apolloServer.applyMiddleware({ app })

    app.listen(CONST.PORT, () => console.log(`Server running on http://localhost:${CONST.PORT}/graphql`))

}).catch(error => console.log(error));
