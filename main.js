//vars
    let cargar;
    let control;
    let vista;
    let configs;
    let Editor
    let FullMar
    var FuST = false; //status de let fullMar
    var status_ =false;
    var status = false;
    var dir = libs.dirT();
    var ab = __dirname;
    var nnac = ab.split('EasyPresenter');
//local functions

function new_win(name,path__,propieties,call){//path__ dir donde esta el archivo
    name = new BrowserWindow (propieties);//propieties{fullscreen:true,frame:false,show:true,minimizable:true,x:1500,y:100}
    name.loadURL('https://'+path__);
    name.toggleDevTools();
    name.once('ready-to-show', () => {
        if (control){
            loanding.close();
        }
        name.show();
        if(vista){
            vista.toggleDevTools();
            vista.webContents.send('hola',nnac[0]);
        }
    });
    if(call){
        call();
    }
    return name;
}

function emit(chanel,arg) {
    control.webContents.send(chanel,arg);
    if(vista){
        vista.webContents.send(chanel,arg);
        console.log('enviado');
    }
}

//main



function MAIN() {
	console.log('main');
    control = new_win(control,'easypresent01.000webhostapp.com/js/resurs/html/master.html',{fullscreen:true,frame:false,show:false,minimizable:true,x:1,y:1});
}

//gloval-functions

function edit (){
    if(status_){
        Editor.close();
        status_ = !status_;
    }else if (!status) {
        Editor = new_win(Editor,'easypresent01.000webhostapp.com/js/resurs/html/editor.html',{fullscreen:false,frame:false,show:false,minimizable:false,x:1000,y:10});
        status_ = !status_
    }else{
        console.log('err: EDITOR_STATUS VAR BOLEAN DONT EXIST')
    }
}

function Margin (){
    if(FuST){
        FullMar.close();
        FuST = !FuST;
    }else if (!status) {
        FullMar = new_win(FullMar,'easypresent01.000webhostapp.com/js/resurs/html/margins.html',{fullscreen:false,frame:true,show:false,minimizable:true,x:2,y:20})
        FuST = !FuST
    }else{
        console.log('err: Margin_STATUS VAR BOLEAN DONT EXIST');
    }
}

function Live_status() {
    if(status){
        vista.close();
        status = !status;
    }else if (!status) {
        vista = new_win(vista,'easypresent01.000webhostapp.com/js/resurs/html/vista.html',{fullscreen:true,frame:false,show:false,minimizable:false,x:1000,y:10});
        status = !status
    }else{
        console.log('err: LIVE_STATUS VAR BOLEAN DONT EXIST')
    }
}



function min() {
    control.minimize();
}

function action(type,win,type_c) {
    if(win=='control'){
        if (type=='min') {
            control.minimize();
        } else if(type=='cl'){
            if(type_c){
                app.quit();
            }else if (!type_c) {
                control.close();
            }
        }
    }
}

function Remote_A(x) {
    if(x){
        server.start();
    }else if(!x){
        server.end();
    }
}
	//ipc

    ipc.on('vist',(x,data)=>{
        var nan = libs.get_serch(data);
        emit('vista',nan);
    });
    ipc.on('select',(ev,x)=>{
        emit('select',x);
    });
    ipc.on('letra',(event,arg)=>{
        emit('letra',arg);
    });
    ipc.on('margenes',(x,arg)=>{
        emit('margenes',arg);
    });
	exports.Margin = Margin;
	exports.libs = libs;
	exports.action = action;
	exports.Live_status = Live_status;
	exports.Remote_A = Remote_A;
	exports.edit = edit;

//MAIN();



