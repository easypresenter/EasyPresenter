//v 0.1
var margin_r=0,
margin_l=0,
margin_t=0,
margin_d=0,
fondSize = 2,
height = window.innerHeight,
Width = window.innerWidth;

function change(type,id,valu,arg,h){
    var elemen = document.getElementById(id);
    console.log(document.getElementById(id).clientHeight);
    var element = document.getElementById(id).style
    var w = document.getElementById(id).clientWidth;
    switch(type) {
        case 'color':
            element.color = valu;
            break;
        case 'margins'://marings de main
            if(arg.type == 'lr'){
                margin_l = Number(margin_l)+Number(valu);
                margin_r = Number(margin_r)+Number(valu);
                whith = Number(whith)-Number(valu*2);
                element.marginLeft = margin_l+'%';
                element.marginRight = margin_r+'%';
                element.width = whith+'%';
            }
            if(arg.type =='td'){
                margin_t = Number(margin_t)+Number(valu);
                margin_d = Number(margin_d)+Number(valu);
                height = Number(height)-Number(valu*4)-0.4;
                element.height = height+'%';
                element.marginTop = margin_t+'%';
                element.marginBottom = margin_d+'%';
            }
            if(arg.type == 'l'){
                margin_l = Number(margin_l)+Number(valu);
                whith = Number(whith)-Number(valu);
                element.marginLeft = margin_l+'%';
                element.width = whith+'%';
            }
            if(arg.type =='r'){
                margin_r = Number(margin_r)+Number(valu);
                whith = Number(whith)-Number(valu);
                element.marginRight = margin_r+'%';
                element.width = whith+'%';                
            }
            if(arg.type =='t'){
                margin_t = Number(margin_t)+Number(valu);
                height = Number(height)-Number(Number(valu)*2);
                element.marginTop = margin_t+'%';
                element.height = height+'%';          
            }
            if(arg.type =='d'){
                margin_d = Number(margin_d)+Number(valu);
                height = Number(height)-Number(Number(valu)*2);
                element.marginBottom = margin_d+'%';
                element.height = height+'%';
            }
            break;
        case 'FontSize':
            fondSize = Number(valu);
            element.fontSize = fondSize+'vw';  
            break
        case 'FontFamily':
            element.fontFamily = valu;
            console.log(element.fontFamily);
            break;
        case 'text-align':
                element.textAlign = valu;
            break
        case 'Background-img':
                document.getElementById(obj).setAttribute('src',valu);
                console.log('holaaaaaaa');
                break
        case 'background-color':
                element.backgroundColor = '';
        case 'background-video':
            document.getElementById(obj).setAttribute(valu.type,valu.arg);
            break
        case 'aling':
            if(valu == 'v'){
                if(arg =='t'){element.top = '0px';}
                if (arg=='c'){
                    elemen.style.top = Number((height/2)-(h/2))+'px';
                    console.log(height+"//////"+h+"\n");
                    console.log(Number((height/2)-(h/2)));
                }
                if (arg=='d'){element.top = Number(height-h)+'px';}
            }else if(valu == 'h'){
                if(arg =='s'){element.left = '0px';}
                if (arg=='c'){element.left = Number((Width/2)-(w/2))+'px';}
                if (arg=='f'){element.left = Number(Width-w)+'px';}
            }
            break
        default:
            alert('err in case css');
            break;
    }

}

module.exports.change = change