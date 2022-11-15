// Aquí pondremos las rutas de nuestro proyecto

const { root } = require('cheerio/lib/static')
const {Router} = require('express')
const { join } = require('path')

const router = Router()

router.get('/saludo', (req, res) => {
    res.json({saludo : "Buenas tardes"})
})
router.get('/', (req,res) => {
    res.sendFile(join(__dirname, staticFolder,'/index.html'))
})

module.exports = router