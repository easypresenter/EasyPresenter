//libs
const remote = require('electron').remote;
const app = remote.require('./index.js');
const ipc = require('electron').ipcRenderer



//vars
var setings__;
var dir=[]

function na() {

  change('aling','obj2','v',"c",document.getElementById("obj2").clientHeight);
  console.log("//////\n");
  console.log(document.getElementById("obj2").clientHeight);
}

//vue
var V_live = new Vue({
  el:'#Live_main',
  data:{
    bgurl:'',
    bg:"bg1",
    type:true,
    biblia:"hola1",
    letra:'',
    act:'',
    // header:{
    //         'name':'',
    //         'type':'',
    //         'content':'Bienvenidos a',
    //         'h':'20',
    //         'w':'20',
    //         'T':'t',
    //         'L':'c'
    //       },
    // primari:{
    //         'name':'',
    //         'type':'c',
    //         'content':'',
    //         'heing':'20',
    //         'whith':'20',
    //         'T':'c',
    //         'L':'c'
    //       },
    // footer:{
    //         'name':'',
    //         'type':'',
    //         'content':'paselo bien',
    //         'heing':'20',
    //         'whith':'20',
    //         'T':'d',
    //         'L':'c'
    //       },
    setings:{
      "fondo":"c:/Users/Jean/documents/EasyWork/fondos/1.jpg",
      "size":1,
      "margins":{"top":"",
                  "rigth":"",
                  "left":"",
                  "down":""
                },
      "fount":""
    },
    primari_s:"font-size:"+this.size+";"
  },
  watch:{
    act:function(x,y) {
      console.log("watch act");
    }
  },
  methods:{
      Cl: function() {
        app.Clive();
      }
  }
});
//change('aling','obj2','v','c');


//IPC
ipc.on('css',(y,x)=>{
  change(x);
});

ipc.on('contenr',(y,x)=>{
  var bname = x.nam
  V_live.bname.content = x.contents;
});

ipc.on('vista',(a,x)=>{
  console.log('vista');
    if(x.versiculos > 1){
      dir = x.contenido;
      //V_live.$data.primari.content = dir[0].$.a+'-'+dir[0]._;
      V_live.act = x.contenido._
    }else if(x.versiculos == 1){
      //V_live.$data.primari.content =   x.contenido.$.n+"-"+ x.contenido._;
      V_live.act = x.contenido.$.n+"-"+ x.contenido._
    }
    na();
});

ipc.on('select',(ev,x)=>{
  console.log('select');
  V_live.$data.primari = dir[x].$.a+'-'+dir[x]._;
});

ipc.on("letra",(ev,x)=>{
  console.log('letra');
  V_live.letra = x;
  for (var i = document.getElementsByTagName('p').length - 1; i >= 0; i--) {
     document.getElementsByTagName('p')[i].style.fontSize = x+'vw'
   }
   V_live.act = x*12
});

ipc.on('hola',(ev,x)=>{
  V_live._data.bgurl = x+'/MEDIA/Imagenes/'+V_live._data.bg+".jpg";
});
