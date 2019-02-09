var socket = io.connect('http://192.168.1.3:314');

status_live =false;
var dir
var obj_resive
var status_live =false;
var recive
var setings__;
var dir=[]
var dir
var obj_resive
var status_live =false;
var recive
var lista
var version =["RV1960","spani","aghjhy"];
var letra = 2;
var control__ = new Vue({
  el:'#master',
  data:{
    listas:[],
    opcion:"1",
    input:"",

  },
  watch: {
    Uverion_:function(x,y) {
      socket.emit("version",x);
      console.log(x);
      this.setings.version_actual = x;
    }
  },
  methods:{
      live:function() {
        socket.emit('live',status_live);
        status_live = !status_live;
      },
      update_p:function(x) {
        socket.emit("vist",x);
        console.log('enviado');
      },
      update:function () {
        socket.emit("vist",this.$data.input);
        console.log('enviado');
        this.prebusqueda[this.prebusqueda.length] =  this.$data.input;

      },
      select: function(n){
        socket.emit('select',n);
        console.log(n);
      },
      s: function() {
        this.opcion = "2";
      },
      b:function() {
        this.opcion = 1;
      },
      p:function() {
        this.opcion = "3";
      },
      m:function(){
        this.opcion = "4";
      },
      mas:function() {
        this.setings.size++;
        socket.emit("letra",this.setings.size);
        document.getElementById("primari").style.fontSize = this.setings.size+"vw";
      },
      menos:function() {
        this.setings.size--;
        socket.emit("letra",this.setings.size);
        document.getElementById("primari").style.fontSize = this.setings.size+"vw";
      },
  }
});

socket.on('vista',(x)=>{
  a=x;
  if (x.versiculos > 1) {
    control__.listas = [];
    control__.listas = x.contenido;
    lista = x;
  }else{
    lista = x;
  }
});

//sockets
socket.on('vista',(x)=>{
    if(x.versiculos > 1){
      dir = x.contenido;
      control__.primari = dir[0].$.a+'-'+dir[0]._;
    }else if(x.versiculos == 1){
      control__.primari =   x.contenido.$.n+"-"+ x.contenido._;
    }
});
socket.on("letra",(x)=>{
  letra = x;
});

socket.on('select',(x)=>{
  control__.$data.primari = dir[x].$.a+'-'+dir[x]._;
});