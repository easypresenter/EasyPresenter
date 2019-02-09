//libs
const http = require('http');
const express = require('express');
const app = express();
const httpServer = http.createServer(app);
const httpServer_ex = http.createServer(app);
const ipc = require('electron').ipcMain;
//vars
var io
var io_ex
//functions
function start(){
    //externo
    httpServer_ex.listen(314,function(){
        app.use(express.static('resurs'));
        io_ex = require('socket.io')(httpServer_ex);
        
        app.get('/',(req,res)=>{
          res.sendFile(__dirname+"/resurs/html/select.html");
        });
        app.get('/pc',(req,res)=>{
          res.sendFile(__dirname+"/resurs/html/menu_wep.html");
        });
        app.get('/mov',(req,res)=>{
          res.sendFile(__dirname+"/resurs/html/menu_movil.html");
        });
        app.get("/pc-menu",(req,res)=>{
          res.sendFile(__dirname+"/resurs/html/menu_wep.html");
        });
        app.get('/mov-menu',(req,res)=>{
          res.sendFile(__dirname+"/resurs/html/menu_wep.html");
        });
      });
}
function Sockets_init(call){
    io_ex.on("connection",function(Socket) {
      Socket.on('vist',(data)=>{
        console.log('vist: '+data);
        io.emit('vista',dt.get_serch(data));
      });
      Socket.on('select_songs',function(x) {
        songs.carga(x,function(st,dt) {
          if(st){
            io.emit('song',dt);
          }else if(!st){
            io.emit('err','eror al cargar cancion');
          }
        });
      })
      Socket.on('new_song',function(x) {
        songs.new_song(x);
      })
      Socket.on('select',(x)=>{
        io.emit('select',x);
      });
      Socket.on('close',(x)=>{
        close();
      });
      Socket.on('live',(x)=>{x
        LIVE_ST();
      });
      Socket.on('bible',(x)=>{
      //  bible();
      });
      Socket.on('special',(x)=>{
        console.log(x);
      });
      Socket.on("letra",(x)=>{
        io.emit('letra',x);
      });
      Socket.on("version",(x)=>{
        libs.cargar(x,(p,y)=>{});
          io.emit('actual',x);
      });
      Socket.on('yo',function(x) {
        io.emit('yo',x);
      })
    });
}
function sock_i(){

    ipc.on('vist',(x,data)=>{
      console.log('vist')
      var nan = libs.get_serch(data);
      console.log('serv 87'+nan);
      io.emit('vista',nan);
    });
    Socket.on('select',(x)=>{
      io.emit('select',x);
    });
}
function end(x) {
  if (x) { 
    httpServer_ex.close(()=>{
      console.log('server end')
    });
  }else if(!x){
    httpServer.close(()=>{
      console.log('internal end')
    });
  }
}
//export
module.exports.end = end;
module.exports.start = start;
module.exports.Sockets_init = Sockets_init;
status('ad');
//coment
/*
*/