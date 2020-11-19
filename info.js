function check(){
    var a = Number(document.getElementById('haloi').value);
    var b = Number(document.getElementById('progi').value);
    var c = Number(document.getElementById('webi').value);
    var d = Number(document.getElementById('szo').value);
    var ossz = document.getElementById('eredmeny').innerHTML = a+b+c+d;
    var jegy = 0;


    if (ossz>=120) {
        jegy = 5;
    }
    else if (ossz>=90) {
        jegy = 4;
    }
    else if (ossz>=60) {
        jegy = 3;
    }
    else if (ossz>=40) {
        jegy = 2;
    }
    else {(ossz<40)
       jegy = 1;
   }

    var de = Number(document.getElementById('elért').innerHTML = jegy);
    return false;


}