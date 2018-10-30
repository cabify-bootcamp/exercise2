const axios = require("axios");

class ClientMessagingApp {

    constructor(hostname, port){
        this.hostname = hostname 
        this.port = port
        this.service = axios.create({
            baseURL: `http://${hostname}:${port}`
        })

    function sendMessage(destination, body) {
        return this.service.post('/message', {destination, body}) 
            .then( response => response.data )
            .catch( error => error.response )
        }
    }
}

module.exports = ClientMessagingApp
