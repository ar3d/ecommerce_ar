let myusdz = [
    'piatto/piatto_blu.usdz', 
    'piatto/piatto_nero.usdz', 
    'piatto/piatto_rosso.usdz', 
    'piatto/piatto_verde.usdz'
];

var model = document.getElementById('model');
function toggleB(){
    model.src = 'piatto/piatto_blu.glb';
    model.iosSrc === myusdz[0];
}

var model = document.getElementById('model');
function toggleN(){
    model.src = 'piatto/piatto_nero.glb';
    model.iosSrc === myusdz[1];
}

var model = document.getElementById('model');
function toggleR(){
    model.src = 'piatto/piatto_rosso.glb';
    model.iosSrc === myusdz[2];
}

var model = document.getElementById('model');
function toggleV(){
    model.src = 'piatto/piatto_verde.glb';
    model.iosSrc === myusdz[3];
}
