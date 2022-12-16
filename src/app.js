import express from 'express'
import {BD} from './db.js'
import {PORT} from './config.js'

const app = express()

app.get('/', async(req, res)=>{
    const rows = await BD.query('SELECT * from peliculas')
    res.json(rows)
})

app.get('/createMovie', async(req,res) =>{
    const result = await BD.query('INSERT INTO movie(name) VALUES ("Guerra de las galaxias")')
    res.json(resultado)
})

app.listen(PORT)
console.log('server port: 3001')