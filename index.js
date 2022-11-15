// Antonio Beaumont
// Obtener la cita y su autor de https://quotes.toscrape.com/

const express = require('express')
const cheerio = require('cheerio')
const axios = require('axios')
const { join } = require('path')
const cors = require('cors')

const app = express()
const PORT = 4000
const URL = 'https://quotes.toscrape.com/'

app.use(cors())
app.use(express.static(join(__dirname, '')))

app.get('/scraper', (req, res) => {

    axios(URL)
        .then(response => {
            //console.log(response.data);
            const html = response.data;

            const $ = cheerio.load(html)

            const frase = []
            //buscamos la clase quote
            $('.quote', html).each(function () {
                //buscamos la cita en el texto de la clase text
                const texto = $(this).find('.text').text()
                //console.log(texto);
                //buscamos el autor en el texto de la clase author
                const autor = $(this).find('.author').text()
                //console.log(autor);
                frase.push({
                    autor,
                    texto
                })
            })

            res.json(frase)
        })
        .catch(err => console.log(err))
})

app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`))