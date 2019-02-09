//libs
    const xml2js = require('xml2js');
    const fs = require('fs');
    const parser = new xml2js.Parser();
//vars g
    var spliter = [/ +([0-9]+[0-9]+[0-9]|[0-9]+[0-9]|[0-9])+:/i,/-/gi];
    var Ex_reg = [/^G+[é|e]+nesis/gim,/^[e|é]+xodo/gim,/^le[v|b][i|í]tico/gim,/^n[ú|u]meros/gim,/^Deuteronomio/gim,/^Josu[é|e]/gim,/^Jueces/gim,/^Rut/gim,/^(1S|1 S|1-S)+amuel/gim,/^(2S|2 S|2-S)+amuel/gim,/^(1 R|1R|1-R)e+[y|ll]+es/gim,/^(2 R|2R|2-R)e+[y|ll]+es/gim,/^(1 C|1C|1-C)+r+[o|ó]+nicas/gim,/^(2 C|2C|2-C)+r+[o|ó]+nicas/gim,/^Esdra+[s|z]/gim,/^N+[ehe|ee|e]+m+[í|i]+as/gim,/^Ester/gim,/^Job/gim,/^Salmos/gim,/^Pro+[v|b]+erbios/gim,/^Ecles+[i|e]+ast+[é|e]+s/gim,/^Cantar de los Cantares|Cantares/gim,/^Isa+[í|i]+as/gim,/^Jerem+[í|i]+as/gim,/^Lamentaciones/gim,/^E+[z|s]+equiel/gim,/^Daniel/gim,/^Oseas/gim,/^Joel/gim,/^Am+[ó|o]+s/gim,/^A+[bd|bad]+[í|i]+as/gim,/^Jon+[á|a]+s/gim,/^Miqueas/gim,/^N+[ahu|au]+m/gim,/^[Ha|a]+bacuc/gim,/^Sofon+[í|i]+as/gim,/^[Ha|a]+geo/gim,/^[Z|s]+acar+[í|i]+as/gim,/^Malaqu+[í|i]+as/gim,/^Mateo/gim,/^Marcos/gim,/^Lucas/gim,/^Juan/gim,/^[He|e]+chos/gim,/^Romanos/gim,/^(1 C|1C|1-C)+orintios/gim,/^(2 C|2C|2-C)+orintios/gim,/^G+[á|a]+latas/gim,/^Efe+[s|c]+ios/gim,/^Filipenses/gim,/^Colo+[s|c]+en+[s|c]+es/gim,/^(1 T|1T|1-T)+esalonicenses/gim,/^(2 T|2T|2-T)+esalonicenses/gim,/^(1 T|1T|1-T)imoteo/gim,/^(2 T|2T|2-T)imoteo/gim,/^Tito/gim,/^Filem+[ó|o]+n/gim,/^(He|e)+breos/gim,/^Santiago/gim,/^(1 P|1-P|1P)+edro/gim,/^(2 P|2-P|2P)+edro/gim,/^(1 J|1-J|1J)+uan/gim,/^(2 J|2-J|2J)uan/gim,/^(3 J|3-J|3J)uan/gim,/^Judas/gim,/^Apocalipsis/gim]
    var dir
//function




//exports
