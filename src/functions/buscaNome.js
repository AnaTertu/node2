const fetch = require('node-fetch')

module.exports = async function buscaNome(nome){
    const response = await fetch(`https://api.github.com/users/${nome}`)
    const json = await response.json()

    return json
}