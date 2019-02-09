//libs
    const xml2js = require('xml2js');
    const fs = require('fs');
//vars
    const parser = new xml2js.Parser();
    var spliter = [/ +([0-9]+[0-9]+[0-9]|[0-9]+[0-9]|[0-9])+:/i,/-/gi];
    var Ex_reg = [/^G+[é|e]+nesis/gim,/^[e|é]+xodo/gim,/^le[v|b][i|í]tico/gim,/^n[ú|u]meros/gim,/^Deuteronomio/gim,/^Josu[é|e]/gim,/^Jueces/gim,/^Rut/gim,/^(1S|1 S|1-S)+amuel/gim,/^(2S|2 S|2-S)+amuel/gim,/^(1 R|1R|1-R)e+[y|ll]+es/gim,/^(2 R|2R|2-R)e+[y|ll]+es/gim,/^(1 C|1C|1-C)+r+[o|ó]+nicas/gim,/^(2 C|2C|2-C)+r+[o|ó]+nicas/gim,/^Esdra+[s|z]/gim,/^N+[ehe|ee|e]+m+[í|i]+as/gim,/^Ester/gim,/^Job/gim,/^Salmos/gim,/^Pro+[v|b]+erbios/gim,/^Ecles+[i|e]+ast+[é|e]+s/gim,/^Cantar de los Cantares|Cantares/gim,/^Isa+[í|i]+as/gim,/^Jerem+[í|i]+as/gim,/^Lamentaciones/gim,/^E+[z|s]+equiel/gim,/^Daniel/gim,/^Oseas/gim,/^Joel/gim,/^Am+[ó|o]+s/gim,/^A+[bd|bad]+[í|i]+as/gim,/^Jon+[á|a]+s/gim,/^Miqueas/gim,/^N+[ahu|au]+m/gim,/^[Ha|a]+bacuc/gim,/^Sofon+[í|i]+as/gim,/^[Ha|a]+geo/gim,/^[Z|s]+acar+[í|i]+as/gim,/^Malaqu+[í|i]+as/gim,/^Mateo/gim,/^Marcos/gim,/^Lucas/gim,/^Juan/gim,/^[He|e]+chos/gim,/^Romanos/gim,/^(1 C|1C|1-C)+orintios/gim,/^(2 C|2C|2-C)+orintios/gim,/^G+[á|a]+latas/gim,/^Efe+[s|c]+ios/gim,/^Filipenses/gim,/^Colo+[s|c]+en+[s|c]+es/gim,/^(1 T|1T|1-T)+esalonicenses/gim,/^(2 T|2T|2-T)+esalonicenses/gim,/^(1 T|1T|1-T)imoteo/gim,/^(2 T|2T|2-T)imoteo/gim,/^Tito/gim,/^Filem+[ó|o]+n/gim,/^(He|e)+breos/gim,/^Santiago/gim,/^(1 P|1-P|1P)+edro/gim,/^(2 P|2-P|2P)+edro/gim,/^(1 J|1-J|1J)+uan/gim,/^(2 J|2-J|2J)uan/gim,/^(3 J|3-J|3J)uan/gim,/^Judas/gim,/^Apocalipsis/gim]
    var biblia;
    var dirs
//functions
    function dirT() {
        var ab = __dirname;
        var ac = ab.split('EasyPresenter');
       // console.log(__dirname)
       // console.log(ac)
        return ac[0];
    }
    dirs = dirT();
    function cargar(x,callback) {
        fs.readFile(dirT()+'/bibles/'+x+'.xml',(err,dt)=>{
            if(err){
                console.log(err+'21');
                callback(false,err);
            }else {
                parser.parseString(dt,(er,result)=>{
                    if(err){
                        callback(false,er);
                        biblia = false;
                    }else if (!err) {
                       // Ex_reg = parser.parseString(result.EX).a;
                        biblia = result;
                        callback(true,result);
                    }
                });
            }
        });
    }
    function libro__(x,b) {
        //console.log(biblia.bible);
        for (var i = 0; i < biblia.bible.b.length; i++){
            if(Ex_reg[i].test(x)){
                b(x,i);
                i = 100;
            }
        }
    }
    function lectura_b(call) {
        fs.readdir(dirT()+'/bibles',function(err, f){
        if (err) {
            return console.error('47'+err);
        }else if(f){
            var x = 0;
            var files = f;
            var reg = /\.xml/gmi;
            var lista_b = [];
            var n;
            for (var i = 0; i <= files.length-1; i++) {
            if(reg.test(files[i])){
                var nns=reg.test(files[i])
                var dd = files[i].split(/\./gmi);
                lista_b[x] = dd[0];
                x++;
            }
            if(Number(files.length)-1 == i){
                call(lista_b);
            }
            };
        }
        });
    }
    function desifrar(busqueda) {
        var libro = null;
        var capitulo = null;
        var versiculo_i = null;
        var versiculo_f=null
        var type = null;
        var dist = null;
        var resp;
        var lib, cap, ver, com;
        com  = busqueda.split(spliter[0]);
        lib  = com[com.length-3];
        cap  = com[com.length-2];
        vers = com[com.length-1].split(spliter[1]);
          if(vers.length > 1){
             capitulo    = Number(cap)-1;
             versiculo_i = Number(vers[0])-1;
             versiculo_f = Number(vers[1])-1;
             type = true;
          }else if(vers.length == 1){
            capitulo    = Number(cap)-1;
            versiculo_i = Number(vers[0])-1;
            type = false;
          }
          if(type){dist = versiculo_f - versiculo_i;}
        libro__(lib,(x,i)=>{
            resp = ciclo(lib,i,capitulo,versiculo_i,versiculo_f,type,dist);
        });
        return resp;
    }
    function ciclo(xLirbro,libro,capitulo,versiculo_i,versiculo_f,type,dist) {
        var respuesta = {};
        var extra = [];
        var ver = versiculo_i;
        var res = [];
        if(type){
            for(var i = 0; i <= dist; i++) {
              res = {'$':'','_':''};
                res.$ = {'a':Number(biblia.bible.b[libro].c[capitulo].v[ver].$.n),'b':i};
                res._ = biblia.bible.b[libro].c[capitulo].v[ver]._;
                extra[i] = res;
                ver++;
              if(dist == i){
                    respuesta = {"lib":xLirbro,
                        "cap":capitulo+1,
                        "versiculos":Number(extra.length),
                        "contenido":extra
                    };
                    return respuesta;
                  }
            }
        }else if(!type){
            res = ' ';
            res = biblia.bible.b[libro].c[capitulo].v[versiculo_i];
            respuesta ={"lib":xLirbro,
                "cap":capitulo+1,
                "versiculos":1,
                "contenido":res
            };
            return respuesta;
          }
    }
    function get_serch(busqueda) {
        console.log('\n\n');
        var tes = desifrar(busqueda);
        if(tes){
            return tes;
        }else if(!tes){return desifrar(busqueda);}
    }
//exports
    module.exports.dirT = dirT;
    module.exports.lectura_b = lectura_b;
    module.exports.libro__ = libro__;
    module.exports.cargar = cargar;
    module.exports.biblia = biblia;
    module.exports.get_serch = get_serch;
    status('ad');