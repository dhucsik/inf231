function myFunction(){
    var x = document.getElementById("recipes");
    var y = document.getElementById('funs');
    if (x.style.visibility === 'hidden'){
        x.style.visibility = 'visible';
        x.style.opacity = '1';
        x.style.height = '100%';
        x.style.overflow = 'auto';
        y.style.visibility = 'hidden';
        y.style.opacity = '0';
        y.style.height = '0';
        y.style.overflow = 'hidden';
    }else if (x.style.visibility = 'visible'){
        x.style.visibility = 'hidden';
    }
}

function myFunction2(){
    var x = document.getElementById("funs");
    var y = document.getElementById('recipes');
    if (x.style.visibility === 'hidden'){
        x.style.visibility = 'visible';
        x.style.opacity = '1';
        x.style.height = '100%';
        x.style.overflow = 'auto';
        y.style.visibility = 'hidden';
        y.style.opacity = '0';
        y.style.height = '0';
        y.style.overflow = 'hidden';
    }else{
        x.style.visibility = 'hidden';
    }
}