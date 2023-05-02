document.addEventListener("DOMContentLoaded", function(){
    document.cookie = "safeCookie1=foo; SameSite=Lax";
    document.cookie = "crossCookie=bar; SameSite=None; Secure";
    
})
        
