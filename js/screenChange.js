function changeNav(){
    if(window.scrollY > 1)
    {
        document.getElementById('header').className = "header_go";
        document.getElementById('nav').className = "nav_go";
    }
    else{
        document.getElementById('header').className = "header_off";
        document.getElementById('nav').className = "nav";
    }
}