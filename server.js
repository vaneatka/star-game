const http = require('http');
const fs = require('fs');
const port = 7777;
const serv = http.createServer((req, res)=>{    
    res.end(fs.readFileSync('./html/stage.html') );
});
const io = require('socket.io')(serv)
serv.listen(port);
///////////////////////////////////////////

io.on('connection', function (socket) {
    socket.on('disconnect', function(socket){
        console.log('a player disconnected');
        
    })
    console.log('a player connected');
});

