var Timer = function(){setTimeout(function()
{ 
    index = index  == 0 ? 1 : 0;

    document.getElementById("swapImage").src = "/assets/img/" + images[index];
    Timer();
}, 500)};

var images = ["Laharl_DS.jpg", "temp.jpg"];
var index = 0;

Timer();