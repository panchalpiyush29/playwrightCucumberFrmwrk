import * as dotenv from 'dotenv'

export const getEnv = () => {
    dotenv.config({
        override: true,
        //chooses the .env file
        path: `src/helper/env/.env.${process.env.ENV}`
    })
}