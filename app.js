// Antonio Beaumont
// Obtener la cita y su autor, mostrar en :
// http://localhost:4000/scraper
// Envía los enlaces a tus repositorios en Github

const divCitas = document.getElementById('citas')

const URL = 'http://localhost:4000/scraper'

fetch(URL)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        data.forEach(frase => {
            var articulo
            const { autor, texto } = frase
                // creo clase cita para poner borde a cada div
                articulo = '<div class ="cita"> <h2>' + autor + '</h2><p>'
                    + texto + '</p></div>'
            
            divCitas.insertAdjacentHTML('beforeend', articulo)
        });
    })
    .catch (err => console.log(err))