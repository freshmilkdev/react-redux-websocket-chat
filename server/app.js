const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 1337 });

const users = [];
let messages = [];
const broadcast = (data, ws) => {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN && client !== ws) {
            client.send(JSON.stringify(data));
        }
    })
};

wss.on('connection', (ws) => {
    let index;
    ws.on('message', (message) => {
        const data = JSON.parse(message);
        switch (data.type) {
            case 'ADD_USER': {
                index = users.length;
                users.push({ name: data.name, id: index + 1 });
                ws.send(JSON.stringify({
                    type: 'USERS_LIST',
                    users
                }));
                broadcast({
                    type: 'USERS_LIST',
                    users
                }, ws);
                break;
            }
            case 'ADD_MESSAGE':
                broadcast({
                    type: 'ADD_MESSAGE',
                    text: data.text,
                    author: data.author
                }, ws);
                break;
/*            case 'REMOVE_USER':
                console.log(data);
                break;*/
            default:
                break;
        }
    });
    ws.on('error', (error) => console.log(error));
    ws.on('close', (message) => {
        //TODO: render 'has been disconnected message'
        const data = JSON.parse(message);
        users.splice(index, 1);
        broadcast({
            type: 'USERS_LIST',
            users
        }, ws)
    })
});