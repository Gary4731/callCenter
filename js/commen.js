function closeSubpage()
{
    document.getElementById("cover").className= "cover_off";
    document.getElementById("content").className= "content_off";
    document.getElementById("close").className= "close_off";
    document.getElementById("content_page").className= "content_iframe_off";
    document.getElementById("content_page").src='';

}

function openSubpage(url)
{
    document.getElementById("cover").className= "cover_on";
    document.getElementById("content").className= "content_on";
    document.getElementById("close").className= "close_on";
    document.getElementById("content_page").className= "content_iframe_on";
    document.getElementById("content_page").src='../pages/'+url;

}

function goHome(){
    window.location.href="/";
}

// document.getElementById("cover").style.display = "block";
// document.getElementById("cover").style.display = "none";