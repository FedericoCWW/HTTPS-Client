const https = require('https');
// HTTPS codes
// 1xx: Informational
// 2xx: Success
// 3xx: Redirection
// 4xx: Client Error
// 5xx: Server Error

let req = https.get('https://jsonplaceholder.typicode.com/posts', (res) => {
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
        throw new Error('Error', JSON.stringify(error));
    }
});
