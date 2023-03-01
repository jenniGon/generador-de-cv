const crearCvBtn = document.querySelector(".myButton")

const traerDatos = () => {
    fetch('https://randomuser.me/api/')
    .then((response) => {
        response.json()
        .then((persona) =>{
            crearPersona(persona)
        })
    })
}

const crearPersona = (datos) => {
    crearNav(datos)
    crearMain(datos)
}

const crearNav = (datos) => {
    const foto = document.querySelector(".foto")
    const email = document.querySelector(".email")
    const location = document.querySelector(".location")
    const numero = document.querySelector(".numero")

    foto.setAttribute("src", datos.results[0].picture.large)
    email.textContent = `email: ${datos.results[0].email}` 
    location.textContent = `Locacion: ${datos.results[0].location.street.name}`
    numero.textContent = ` Num:  ${datos.results[0].phone} ` 
}

const crearMain = (datos) =>{
    const nombre = document.querySelector(".nombre")
    const genero = document.querySelector(".genero")
    const pais = document.querySelector(".pais")
    const edad = document.querySelector(".edad")

    nombre.textContent = `${datos.results[0].name.first} ${datos.results[0].name.last}`

    genero.textContent = `Genero: ${datos.results[0].gender}`

    edad.textContent = `Edad: ${datos.results[0].registered.age} años`

    pais.textContent = `País: ${datos.results[0].location.country}`
}

traerDatos()

crearCvBtn.addEventListener("click", traerDatos)