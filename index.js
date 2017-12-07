var date = new Date();
 date.setDate(date.getDate()-1);
var  yy = date.getDate();
var today = new Date();
var dd = today.getDate();
var yy =  String(yy);
var dd =  String(dd);

function loadJsonStart(){
  var url = "./call.php?why=status"
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
let jsonTx = this.responseText;
parseJsonStart(jsonTx);
}
};
xhttp.open("GET", url, true);
xhttp.send();
}
function parseJsonStart(jsonRx){

  var obj = JSON.parse(jsonRx);
   var awake0 = obj.awake0;
   var name0 = obj.name0;
   var datecheck0 = obj.datecheck0;
   var awake1 = obj.awake1;
   var name1 = obj.name1;
   var datecheck1 = obj.datecheck1;
   var awake2 = obj.awake2;
   var name2 = obj.name2;
   var datecheck2 = obj.datecheck2;
   var awake3 = obj.awake3;
   var name3 = obj.name3;
   var datecheck3 = obj.datecheck3;

  if(datecheck0 == dd){
    document.getElementById("member1C").checked = true;
  }
  else{
    document.getElementById("member1C").checked = false;
  }
  if(datecheck1 == dd){
    document.getElementById("member3C").checked = true;
  }
  else{
    document.getElementById("member3C").checked = false;
  }
  if(datecheck2 == dd){
    document.getElementById("member2C").checked = true;
  }
  else{
    document.getElementById("member2C").checked = false;
  }
  if(datecheck3 == dd){
    document.getElementById("member4C").checked = true;
  }
  else{
    document.getElementById("member4C").checked = false;
  }

}

function load(url){
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
let jsonTx = this.responseText;
setTimeout(uploadComplete, 1000);
}
};
xhttp.open("GET", url, true);
xhttp.send();
}

function member1(){
  var checked =  document.getElementById("member1C").checked;
if(checked){
//setTimeout(uploadComplete, 1000);
load("./call.php?why=member1&awake=yes&date=" + dd);
   }
  else{
load("./call.php?why=member1&awake=no&date=" + yy);
  }

}

function member2(){
  var checked =  document.getElementById("member2C").checked;
if(checked){
//setTimeout(uploadComplete, 1000);
load("./call.php?why=member2&awake=yes&date=" + dd);
   }
  else{
load("./call.php?why=member2&awake=no&date=" + yy);
  }

}
function member3(){
  var checked =  document.getElementById("member3C").checked;
if(checked){
//setTimeout(uploadComplete, 1000);
load("./call.php?why=member3&awake=yes&date=" + dd);
   }
  else{
load("./call.php?why=member3&awake=no&date=" + yy);
  }

}
function member4(){
  var checked =  document.getElementById("member4C").checked;
if(checked){
//setTimeout(uploadComplete, 1000);
load("./call.php?why=member4&awake=yes&date=" + dd);
   }
  else{
load("./call.php?why=member4&awake=no&date=" + yy);
  }

}

function uploadComplete(){
    document.getElementById("updater").style.visibility = "visible";
    setTimeout(hideUpload, 3000);
}
function hideUpload(){
    document.getElementById("updater").style.visibility = "hidden";
}
