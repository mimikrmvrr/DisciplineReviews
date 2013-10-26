$(document).ready(function(){
    //ajax
    var default_content="";
    checkURL();
    $('.nav li').click(function (e) {
            $(this).parent().find("li").removeClass("active");  
            $(this).addClass("active"); 
            checkURL(this.hash);
    });
    default_content = $('#container').html();   
    setInterval("checkURL()",250);
});
    var lasturl="";
function checkURL(hash)
{
    //console.log("what the fuck");
    if(!hash) hash=window.location.hash;
    if(hash != lasturl)
    {
        lasturl=hash;
        // FIX - if we've used the history buttons to return to the homepage,
        // fill the pageContent with the default_content
        if(hash==""){
            $('#main_content').html(default_content);
        }
        else{
             loadPage(hash);
        }
    }
}

function loadPage(url){
    url=url.replace("#","");
    $.ajax({
        type: "POST",
        url: "/Home/Load_Page",
        data: "page="+url,
        dataType: "html",
        success: function(msg){
            if(parseInt(msg)!=0){
                // console.log(msg);
                $("#main_content").html(msg);
            }
        }
    });
}
   
	

   



