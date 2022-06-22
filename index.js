import chalk from 'chalk'
import express, { json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(cors())
app.use(json())

app.post('/', (req, res) => {
console.log(chalk.red.bold("Está entrando no post"))
})

app.get('/', (req, res) => {
    console.log(chalk.blue.bold("Está entrando no get"))
})

app.listen(PORT, () => {
    console.log(chalk.bold.green('Server Online'))
})
