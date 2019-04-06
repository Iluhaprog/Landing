function changeHeaderByScroll( header, scrolled ) {
    if ( header.dataset.scrolled == "false", scrolled >  100 ) {
        header.classList.add( "header_scrolled" );
        header.dataset.scrolled = "true";
    } else{
        header.classList.remove( "header_scrolled" );
        header.dataset = "false";
    }
}

var header = document.getElementById("header");

window.addEventListener( "scroll", function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    changeHeaderByScroll( header, scrolled );

});

var mobileMenuBtn = document.getElementById("mobileMenuBtn");
var mobileMenu = document.getElementById("mobileMenu");

mobileMenuBtn.addEventListener("click", function() {
    if ( mobileMenu.dataset.showed == "false" ) {
        header.classList.add("header_white");
        mobileMenu.style.top = "69px";
        mobileMenu.dataset.showed = "true";
    } else {
        header.classList.remove("header_white")
        mobileMenu.style.top = "calc(-100vh - 69px)";
        mobileMenu.dataset.showed = "false";
    }
});

var menuLink = document.getElementsByClassName("menu-link");

function setEventMobileMenuLink( menuLink ) {
    for ( var i = 0; i < menuLink.length; i++ ) {
        menuLink[i].addEventListener("click", function() {
            header.classList.remove("header_white")
            mobileMenu.style.top = "calc(-100vh - 69px)";
            mobileMenu.dataset.showed = "false";
        });
    }
}

setEventMobileMenuLink(menuLink);

var descriptAbout = document.getElementById("aboutDescript");

function setHeightToAboutDescription() {
    if ( descriptAbout.dataset.descrshowed == "false" ){
        descriptAbout.dataset.descrshowed = "true";
        descriptAbout.classList.add("description_mod-show");
        descriptAbout.classList.remove("description_mod-not-show");
    } else {
        descriptAbout.dataset.descrshowed = "false";
        descriptAbout.classList.add("description_mod-not-show");    
        descriptAbout.classList.remove("description_mod-show");
    }
}
