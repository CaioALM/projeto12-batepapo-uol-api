import { MongoClient, ObjectId } from 'mongodb'
import express, { json } from 'express'
import chalk from 'chalk'
import cors from 'cors'
import dayjs from 'dayjs'
import dotenv from 'dotenv'
import joi from 'joi'

dotenv.config()

const app = express()


app.use(cors())
app.use(json())

app.post('/', (req, res) => {


})

app.get('/', (req, res) => {

})

app.listen(5000, () => {
    console.log(chalk.bold.green('Server Online'))
})
