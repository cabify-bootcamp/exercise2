

function isValid(input){

    status = {
        status: '',
        comment: ''   
    }

    const regularExpression = /^[a-zA-Z0-9]+$/;

    const {destination, body} = input

    if ( Object.keys(input).length < 2 ) {
        status.status = 'error';
        status.comment = 'JSON has fewer fields than it should'
        return status
    } else if ( Object.keys(input).length > 2){
        status.status = 'error';
        status.comment = 'JSON has more fields than it should'
        return status
    }  else if ( Object.keys(input)[0] !== 'destination'){
        status.status = 'error';
        status.comment = 'key[0] should be "destination"'
        return status
    } else if ( Object.keys(input)[1] !== 'body'){
        status.status = 'error';
        status.comment = 'key[0] should be "body"'
        return status
    } else if ( !regularExpression.test(destination) ) {
        status.status = 'error';
        status.comment = 'Destination must contain only alphanumeric chars'
        return status
    } else if ( body.length === 0 ) {
        status.status = 'error';
        status.comment = `Message body must not be empty`
        return status
    } else if (typeof body !== 'string') {
        status.status = 'error';
        status.comment = 'Body must be a string'   
        return status    
    } else if ( body.length >= 1000 ) {
        status.status = 'error';
        status.comment = `Message body must be less than 1000 characters, message char count = ${body.length}`
        return status
    } else if ( destination.length === 0 ) {
        status.status = 'error';
        status.comment = `Message destination must not be empty`
        return status
    } else if (typeof destination !== 'string') {
        status.status = 'error';
        status.comment = 'Destination must be a string' 
        return status  
    } else if ( destination.length >= 20 ) {
        status.status = 'error';
        status.comment = `Message destination must be less than 20 characters, destination char count = ${destination.length}`
        return status
    } else {
        status.status = 'valid';
        status.comment = 'success'
        return status
    }

}
  
module.exports = {
    isValid
    }