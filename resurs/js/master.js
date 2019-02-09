//libs
const remote = require('electron').remote;
const app = remote.require('./index.js');
const ipc = require('electron').ipcRenderer
//vars
var s
var re1='((?:[a-z][a-z]+))'; var re2='(\\s+)'; var re3='(\\d+)'; var re4='(.)';var re5='(\\d+)';
var expresion1 = new RegExp(re1+re2+re3+re4+re5,["i"]);
var dir=[]
var libro;
var bib
var Ex_reg = [/^G+[é|e]+nesis/gim,/^[e|é]+xodo/gim,/^le[v|b][i|í]tico/gim,/^n[ú|u]meros/gim,/^Deuteronomio/gim,/^Josu[é|e]/gim,/^Jueces/gim,/^Rut/gim,/^(1S|1 S|1-S)+amuel/gim,/^(2S|2 S|2-S)+amuel/gim,/^(1 R|1R|1-R)e+[y|ll]+es/gim,/^(2 R|2R|2-R)e+[y|ll]+es/gim,/^(1 C|1C|1-C)+r+[o|ó]+nicas/gim,/^(2 C|2C|2-C)+r+[o|ó]+nicas/gim,/^Esdra+[s|z]/gim,/^N+[ehe|ee|e]+m+[í|i]+as/gim,/^Ester/gim,/^Job/gim,/^Salmos/gim,/^Pro+[v|b]+erbios/gim,/^Ecles+[i|e]+ast+[é|e]+s/gim,/^Cantar de los Cantares|Cantares/gim,/^Isa+[í|i]+as/gim,/^Jerem+[í|i]+as/gim,/^Lamentaciones/gim,/^E+[z|s]+equiel/gim,/^Daniel/gim,/^Oseas/gim,/^Joel/gim,/^Am+[ó|o]+s/gim,/^A+[bd|bad]+[í|i]+as/gim,/^Jon+[á|a]+s/gim,/^Miqueas/gim,/^N+[ahu|au]+m/gim,/^[Ha|a]+bacuc/gim,/^Sofon+[í|i]+as/gim,/^[Ha|a]+geo/gim,/^[Z|s]+acar+[í|i]+as/gim,/^Malaqu+[í|i]+as/gim,/^Mateo/gim,/^Marcos/gim,/^Lucas/gim,/^Juan/gim,/^[He|e]+chos/gim,/^Romanos/gim,/^(1 C|1C|1-C)+orintios/gim,/^(2 C|2C|2-C)+orintios/gim,/^G+[á|a]+latas/gim,/^Efe+[s|c]+ios/gim,/^Filipenses/gim,/^Colo+[s|c]+en+[s|c]+es/gim,/^(1 T|1T|1-T)+esalonicenses/gim,/^(2 T|2T|2-T)+esalonicenses/gim,/^(1 T|1T|1-T)imoteo/gim,/^(2 T|2T|2-T)imoteo/gim,/^Tito/gim,/^Filem+[ó|o]+n/gim,/^(He|e)+breos/gim,/^Santiago/gim,/^(1 P|1-P|1P)+edro/gim,/^(2 P|2-P|2P)+edro/gim,/^(1 J|1-J|1J)+uan/gim,/^(2 J|2-J|2J)uan/gim,/^(3 J|3-J|3J)uan/gim,/^Judas/gim,/^Apocalipsis/gim]

var ipcsend = function(chanel,arg) {
  ipc.send(chanel,arg);
};
ipc.on('va',function(event,arg){
  console.log(arg);
});

alert('hola mundo');
document.getElementById('primari').style.fontSize = '5em';
var control__ = new Vue({
  el:'#master',
  data:{
    input:"",
    input_s:'',
    listas:[],
    opcion:'1',
    biblia:"hola1",
    header:"",
    primari:"hola",
    footer:'',
    setings:{
      "fondo":"c:/Users/Jean/documents/EasyWork/fondos/1.jpg",
      "size":5 ,
      "version_actual":"RV1960_es",
      "versiones":'',
      "margins":{"top":"",
      "rigth":"",
      "left":"",
                  "down":""
                },
      "fount":""
    },
    Uverion_:"",
    prebusqueda:[],
    lib:'',
    cap:'',
    veri:'',
    verf:'',
    Libs:'',
    Caps:'',
    vers:''
  },
  watch: {
    Uverion_:function(x,y) {
      ipc.send("version",x);
      this.setings.version_actual = x;
      app.g_fun.lectura_b((x)=>{
        control__.setings.versiones = x;
        app.g_fun.cargar(this.setings.version_actual,(x,y)=>{
          if(x){
            bib = y;
            this.Libs = [];
            for (var i=0 ; i <= bib.bible.b.length - 1; i++) {
              this.Libs[i] = bib.bible.b[i].$.n;
            };
          }else console.log('err lectura');
        });
      });
    },
    lib:function(x) {
      this.Caps = null;
      this.Caps = [];
      this.vers = null;
      this.veri = '';
      this.verf = '';
      this.cap = '';
      for (var i = 0; i < bib.bible.b.length; i++){
        if(Ex_reg[i].test(this.lib)){
          libro = i;
          i = 100;
        }}
        for (var i=1 ; i <= bib.bible.b[libro].c.length; i++) {
          this.Caps[i] = i;
        };
      },
    cap:function(x) {
      this.vers = null;
      this.vers = [];
      for (var i=1 ; i <= bib.bible.b[libro].c[x-1].v.length; i++) {
        this.vers[i] = i;
      };
    },
    veri:function(x){
      if (x){
        ipc.send("vist",this.lib+' '+this.cap+':'+this.veri);
        this.prebusqueda[this.prebusqueda.length] = this.lib+' '+this.cap+':'+this.veri;
      }
    },
    verf:function(x){
      if (x){
        ipc.send("vist",this.lib+' '+this.cap+':'+this.veri+'-'+this.verf);
        this.prebusqueda[this.prebusqueda.length] =  this.lib+' '+this.cap+':'+this.veri+'-'+this.verf;
      }
    }
  },
  methods:{
    close:function() {
        app.action('cl','control',true);
      },
      live:function() {
        app.Live_status();
      },
      minimize_maximize: function() {
        app.action('min','control');
      },
      update_p:function(x) {
        var s = expresion1.exec(x);
        if(s){
          ipc.emit("vist",x);
          this.listas = [];
        }
      }
      ,
      update_s:function () {
        
      },
      update:function () {
        if(expresion1.exec(this.$data.input)){
          ipc.send("vist",this.$data.input);
              this.prebusqueda[this.prebusqueda.length] =  this.$data.input;
            }else if(expresion1.exec(this.$data.input)){
              ipc.send("vist",this.$data.input);
            this.prebusqueda[this.prebusqueda.length] =  this.$data.input;
          }
        
        },
      select: function(n){
        ipc.send('select',n);
      },
      s: function() {
        this.opcion = 2;
      },
      b:function() {
        this.opcion = 1;
      },
      p:function() {
        this.opcion = 3;
      },
      m:function(){
        this.opcion = 4;
      },
      configs:function() {
        app.config();
      },
      mas:function() {
        this.setings.size = this.setings.size+1;
        ipc.send("letra",this.setings.size);
        document.getElementById("primari").style.fontSize = this.setings.size+"em";
      },
      menos:function() {
        this.setings.size = this.setings.size-1;
        ipc.send("letra",this.setings.size);
        document.getElementById("primari").style.fontSize = this.setings.size+"em";
      },
      Uverion:function(x) {
        console.log(x);
      },
      lM:function(){
        ipc.send('margenes',);
      },
      tM:function() {
        ipc.send('margenes',);
      },
      dM:function(){
        ipc.send('margenes',);
      },
      rM:function(){ 
        ipc.send('margenes',);
      },
      MargenesF:function(){
        app.Margin();
      },
      ln:function(){
        ipc.send('margenes',);
      },
      tn:function() {
        ipc.send('margenes',);
      },
      dn:function(){
        ipc.send('margenes',);
      },
      rn:function(){ 
        ipc.send('margenes',);
      },
      edi:function() {
        app.edit(function(x) {
          console.log(x);
        });
      }
      
    }
  });
  
app.g_fun.lectura_b((x)=>{
  console.log('read ready')
  control__.setings.versiones = x;
  app.g_fun.cargar(control__.setings.version_actual,(x,y)=>{
    if(x){
      bib = y;
      control__.Libs = [];
      for (var i=0 ; i <= bib.bible.b.length - 1; i++) {
        control__.Libs[i] = bib.bible.b[i].$.n;
      };
    }
  });
});
//prelive


//ipc
ipc.on('vista',(ev,x)=>{
  if(x.versiculos > 1){
      control__.listas = [];
      control__.listas = x.contenido;
      lista = x;
      dir = x.contenido;
      control__.primari = dir[0].$.a+'-'+dir[0]._;
    }else if(x.versiculos == 1){
      control__.primari =   x.contenido.$.n+"-"+ x.contenido._;
    }
  });
  ipc.on("letra",(a,x)=>{
    letra = x;
  });
  
ipc.on('select',(a,x)=>{
  control__.$data.primari = dir[x].$.a+'-'+dir[x]._;
});
ipc.on('actual',(ev,x)=>{
  control__.setings.version_actual = x;
});
setTimeout(function() {
  document.getElementsByTagName('div')[27].style.display = 'none';
}, 300);