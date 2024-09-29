function openNav() {
    if ($(window).width() < 581) {
        $('#mySidenav').css('width', '100%');
    } else {
        $('#mySidenav').css('width', '50%');
    }
}

function closeNav() {
    $('#mySidenav').css('width', '0%');

    setTimeout(function() {
        $('#mySidenav').css('width', ''); 
    }, 300);
}

$(window).resize(function() {
    if ($(window).width() >= 991) {
        $('#mySidenav').css('width', ''); 
    } else if ($('#mySidenav').css('width') !== '0px') {
        openNav();
    }
});
