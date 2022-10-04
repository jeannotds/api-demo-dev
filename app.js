//Creer un fichier app
// initialiser la projet node : npm init
// Installer express : npm install express
//installer nodemon
//Installer morgan : .use(morgan('dev))
//Installer bodyParse :: .use(bodyParser.json()) ::: npm install body-parser


const express = require('express')
const morgan = require('morgan')
const bodyParse = require('body-parser')
const {success, getUniqueId} = require('./messageSuccess')
let developpeurs = require('./developpeur.json')
const app = express()
const port = 3004

app
.use(morgan('dev'))
.use(bodyParse.json())


app.get('/dev', (req, res)=>{
    res.status(200)
    const message = "requete reussie"
    res.json(success(message, developpeurs))
})

app.get('/dev/:id', (req, res) => {
    // const id = getUniqueId(req.params.id)
    const id = parseInt(req.params.id)
    const developpeur = developpeurs.find(developpeur => developpeur.id === id)
    const message = "Un idenfiant selectionné"
    res.json(success(message, developpeur))

})

app.post('/dev', (req, res) => {
    const id = getUniqueId(developpeurs)
    const createDeveloppeur = {...req.body, ...{id: id, created: new Date()}}
    developpeurs.push(createDeveloppeur)
    const message = "Developpeur ajouté"
    res.json(success(message, createDeveloppeur))
})



app.listen(port, ()=>{
    console.log('Le serveur est demarré avec succes')
})