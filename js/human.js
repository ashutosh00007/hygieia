console.log("human connected");
window.onload = function () {
    const pieces = document.getElementsByTagName('svg');
    for (var i = 0; pieces.length; i++) {
        let _piece = pieces[i];
        _piece.onclick = function(t) {
            if (t.target.getAttribute('data-position') != null) document.getElementById('data').innerHTML = t.target.getAttribute('data-position');
            if (t.target.parentElement.getAttribute('data-position') != null) document.getElementById('data').innerHTML = t.target.parentElement.getAttribute('data-position');
        }
    }
}
function arms(){
    var e = document.getElementById("bodyloc");
    e.value="7";
}
function legs(){
    var e = document.getElementById("bodyloc");
    e.value="10";
}
function head1(){
    var e = document.getElementById("bodyloc");
    e.value="6";
}

function chest(){
    var e = document.getElementById("bodyloc");
    e.value="15";
}
function abdomen(){
    var e = document.getElementById("bodyloc");
    e.value="16";
}