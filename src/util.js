const fetch = require('node-fetch')

/**
 * 
 * @param {*} url : url for database API access
 */
async function fetchUrl(url) {
    return fetch(url, {
        mode: 'cors',
        headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    }).then(resp => resp.json());
}

export {
    fetchUrl,
}