const https = require('https');

const options = {
    host: 'jsonplaceholder.typicode.com',
    path: '/posts?_limit=2',                //se limitan las request a solo dos IDs
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json, charset=utf8'
    }
};

// HTTPS codes
// 1xx: Informational
// 2xx: Success
// 3xx: Redirection
// 4xx: Client Error
// 5xx: Server Error
// 'https://jsonplaceholder.typicode.com/posts'
let req = https.get(options,(res) => {
    try{
        if (res.statusCode !== 200) {
            console.error(`Error: ${res.statusCode}`);
            res.resume();
            return;
        }
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('close', () => {
            console.log(JSON.parse(data));
        })
    }
    catch(error){
        throw new Error('Error');
    }
});