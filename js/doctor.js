
var api_key = 'ff27d93f8288df575687bf90d20969cd'; // Get your API key at developer.betterdoctor.com

function getData(x,y){
    var l= parseInt(x);
    var m=parseInt(y);
var resource_url = `https://api.betterdoctor.com/2016-03-01/doctors?location=${l},${m},100&limit=5&user_key=` + api_key;



$.get(resource_url, function (data) {
    // data: { meta: {<metadata>}, data: {<array[Practice]>} }
    var template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
    document.getElementById('content-placeholder').innerHTML = template(data);
});

}

function locate(lat,lon){
    console.log(lat)
    console.log(lon)

}

function myLoc(){
    var e = document.getElementById("sel1");
var sel = e.options[e.selectedIndex].value;
console.log(sel);
if(sel==1){
    var x= 42.373611;
    var y= -71.110558;
}
else if(sel==2){
    var x= 37.871666;
    var y= -122.272781;
}
else if(sel==3){
    var x= 38.951561;
    var y= -92.328636;
}
initMap(x,y);
getData(x,y);
}
