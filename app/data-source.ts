import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "us-cdbr-east-06.cleardb.net",
    username: "b5ff0d7f9695c6",
    password: "1cb6a0c0",
    database: "`heroku_80c16babc8aee5a`",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
