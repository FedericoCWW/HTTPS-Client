const https = require('https');

const options = {
    host: 'jsonplaceholder.typicode.com',
    path: '/posts',                //se limitan las request a solo dos IDs
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json, charset=utf8'
    }
};

const request = https.request(options, (res) => {
    if (res.statusCode !== 201){
        console.error(`Error: ${res.statusCode}`);
        res.resume();
        return;
    }

    res.on('data', (data) => {
        console.log("New user added");
        console.log(JSON.parse(data));
    })
});

const requesData = {
    "userId": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
};

request.write(JSON.stringify(requesData));
request.end();
request.on('error', function(err) {
    console.error('Error:', err.message);
})