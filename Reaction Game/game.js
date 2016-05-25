function appearPicAfterDelay() {
                        
    setTimeout(shapeAppear, Math.random() * 10);
                    
}

function appearCalAfterDelay() {
    
    setTimeout(doCal, Math.random() * 10);
    
}

function autoNum() {
 
    setTimeout(getNum(), Math.random() * 10);
    
}

function shapeAppear() {

    var top = Math.random() * 400;

    var left = Math.random() * 1000;

    var i = Math.random() * 135 + 25;

    var width = i;

    var height = i;

    document.getElementById("shape").style.width = width + "px";

    document.getElementById("shape").style.height = height + "px";

    document.getElementById("shape").style.top = top + "px";

    document.getElementById("shape").style.left = left + "px";

    document.getElementById("shape").style.visibility = "visible";

    start = new Date().getTime();

}               
                
                
function doCal() {

    var x = Math.floor(Math.random() * 50) + 1;

    var y = Math.floor(Math.random() * 50) + 1;

    if(Math.random() > 0.5) {

        document.getElementById("cal").innerHTML = x + " " + "+" + " " + y;

    }

    else {

        document.getElementById("cal").innerHTML = x + " " + "-" + " " + y;

    }
    
    document.getElementById("cal").style.visibility = "visible";

}
  


//...

function getNum() {
    
    var num = Math.random();
    
    if(num > 0.6) {
        
        var start = new Date().getTime();
        
        shapeAppear();
        
         document.getElementById("shape").onclick = function() {
             
             document.getElementById("shape").style.visibility = "hidden";

             var end = new Date().getTime();

             var taken = (end - start) / 1000;

             document.getElementById("time").innerHTML = taken + "s";
             
         }
    }
    
    else {
        
        doCal();
        
    }
    
}

//...

document.getElementById("start").onclick = function() {
    
 

    var myname = document.getElementById("namebox").value;

    var myage = document.getElementById("agebox").value;

    var mysex = document.getElementById("sexbox").value;

    console.log(myname);console.log(myage);console.log(mysex);

    document.getElementById("name").style.visibility = "hidden";

    document.getElementById("age").style.visibility = "hidden";

    document.getElementById("sex").style.visibility = "hidden";

    document.getElementById("start").style.visibility = "hidden";
    
    setTimeout(getNum(), Math.random() * 10);
    
}
             
    
    