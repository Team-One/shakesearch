var TRange=null;

function findString(){
	s=prompt('Find text:','');
	s='('+s+')';
	x=new RegExp(s,'gi');
	rn=Math.floor(Math.random()*100);
	rid='z' + rn;
	b=document.body.innerHTML;
	b=b.replace(x,'<span name='+rid+' id='+rid+' style=\'color:#000;background-color:yellow; font-weight:bold;\'>$1</span>');
	document.body.innerHTML=b;
	alert('Found ' + document.getElementsByName(rid).length + ' matches.');
	window.scrollTo(0,document.getElementsByName(rid)[0].offsetTop);
}

//Detect Shake of Device
if (typeof window.DeviceMotionEvent != 'undefined') {
    // Shake sensitivity (a lower number is more)
    var sensitivity = 20;

    // Position variables
    var x1 = 0, y1 = 0, z1 = 0, x2 = 0, y2 = 0, z2 = 0;

    // Listen to motion events and update the position
    window.addEventListener('devicemotion', function (e) {
        x1 = e.accelerationIncludingGravity.x;
        y1 = e.accelerationIncludingGravity.y;
        z1 = e.accelerationIncludingGravity.z;
    }, false);

    // Periodically check the position and fire
    // if the change is greater than the sensitivity
    setInterval(function () {
        var change = Math.abs(x1-x2+y1-y2+z1-z2);

        if (change > sensitivity) {
			
            //A Shake Has Happened
			findString();
			
        }

        // Update new position
        x2 = x1;
        y2 = y1;
        z2 = z1;
    }, 150);
}