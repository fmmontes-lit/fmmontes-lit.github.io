// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

$(window).resize(function () {
    if (isScreenSmall() || isScreenExtraSmall()) {
        if ($('.sidebar').length) {
            var options = '';
            $('.sidebar').children().each(function (index) {
                options += '<option>' + $(this).text() + '</option>';
            });
            var select = '<select>' + options + '</select>';
            console.log(select);
        }
    }
});

function updateMenu() {
    if (isScreenExtraSmall() || isScreenSmall()) {
        //alert('small screen');

        //move quick menu inside site menu
        var quickMenu = document.getElementById('quickMenu');
        var siteMenu = document.getElementById('siteMenu');
        siteMenu.prepend(quickMenu);

        //move site logo beside the menu button
        var siteLogoLink = document.getElementById('siteLogoLink');
        var siteMenuNavbar = document.getElementById('siteMenuNavbar');
        //var sitemenuContainer = document.getElementById('sitemenuContainer');
        //siteMenuNavbar.classList.add('d-inline');
        siteMenuNavbar.append(siteLogoLink);

        //remove primary background color from site menu
        var siteMenuNavbar = document.getElementById('siteMenuNavbar');
        siteMenuNavbar.classList.remove("bg-primary");

        //add light background color for site menu
        var menuList = document.getElementById('menuList');
        menuList.classList.add("bg-light");

        //update from color and padding for main menu links
        var menuItems = document.getElementsByClassName('nav-link');
        [].forEach.call(menuItems, function(item) {
            item.classList.remove("text-white")
            item.classList.add("text-dark")
            item.classList.add("pl-4")
        });


        //hide cta menu
        var ctaMenu = document.getElementById('ctaMenu');
        ctaMenu.style.display = 'none';

    }
    else {
        //alert('medium or large screen');
        //move quick menu back to top
        var header = document.getElementsByTagName('header')[0];
        var quickMenu = document.getElementById('quickMenu');
        header.prepend(quickMenu);

        var ctaMenu = document.getElementById('ctaMenu');
        quickMenu.after(ctaMenu);

        //remove logo beside the menu button
        var siteLogoLink = document.getElementById('siteLogoLink');
        ctaMenu.append(siteLogoLink);

        //add primary background color for site menu
        var siteMenuNavbar = document.getElementById('siteMenuNavbar');
        siteMenuNavbar.classList.add("bg-primary");

        //remove light background color for site menu
        var menuList = document.getElementById('menuList');
        menuList.classList.remove("bg-light");

        //update from color and padding for main menu links
        var menuItems = document.getElementsByClassName('nav-link');
        [].forEach.call(menuItems, function (item) {
            item.classList.remove("text-dark")
            item.classList.add("text-white")
            item.classList.remove("pl-4")
        });
    }
}

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 800) {
        $('.aspen-badge').show()
    } else {
        $('.aspen-badge').hide();
    }
});

// Write your Javascript code.
$(function () {
    $('label.required').after('<i class="glyphicon glyphicon-asterisk btn-xs field-validation-error"></i>');


    if (isScreenLarge() || isScreenExtraLarge()) {
        //main link dark blue on megamenu mouseover
        $('.megamenu').mouseover(function () {
            var navLinkMain = $(this).prevAll('.nav-link-main').first();
            navLinkMain.css('background-color', '#181643')//dark blue
            navLinkMain.css('color', '#ffffff !important');
        });

        //main link back to light blue on megamenu mouseout
        $('.megamenu').mouseout(function () {
            var navLinkMain = $(this).prevAll('.nav-link-main').first();
            navLinkMain.css('background-color', '#1b6ec2')//light blue
            navLinkMain.css('color', 'rgba(0,0,0,.5) !important');
        });
    }

    //////////////////////// Prevent closing from click inside dropdown
    $(document).on('click', '.dropdown-menu', function (e) {
        e.stopPropagation();
    });

    //updateMenu();

    //top menu hover dropdowns
    //$('body').on('mouseenter mouseleave', '.dropdown', toggleDropdown);
});

//sitewide alertbox
function showAlertBox(topAlertHeading, topAlertText, topAlertUrl) {
    var topAlertHtml = '<div id="topAlertBox" name="topAlertBox" class="alert alert-success alert-dismissible topalert" role="alert">' +
        '<div class="topalert-heading">' + topAlertHeading + '</div>' +
        '<p class="topalert-text">' + topAlertText;
    if (topAlertUrl.length > 0) {
        topAlertHtml += '<span>&nbsp;&nbsp;<a href="' + topAlertUrl + '">More Info</a></span>';
    }
    topAlertHtml += '</p>' +
        '<button id="topAlertCloser" type="button" class="close" data-dismiss="alert" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>';

    var alertPlaceholder = document.getElementById('alertPlaceholder');
    if (alertPlaceholder === null) {
        /*top alert turned off, do nothing*/
    }
    else {
        $(alertPlaceholder).append(topAlertHtml);
        $('#topAlertCloser').on('click', function () {
            localStorage.setItem('_topAlertDismissed_', 'true');
        });
    }
}

//site menu hover dropdowns
function toggleDropdown(e) {
    const _d = $(e.target).closest('.dropdown'),//parent menu link
        _m = $('.dropdown-menu', _d);

    setTimeout(function () {
        //should open on hover, should not open on click
        const shouldOpen = e.type !== 'click' && _d.is(':hover');
        _m.toggleClass('show', shouldOpen);
        _d.toggleClass('show', shouldOpen);

        _d.toggleClass('bg-LIT');
        _d.toggleClass('text-white');

        $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
    }, e.type === 'mouseleave' ? 10 : 0);
}

function isScreenExtraSmall() {
    return window.screen.width < 576;
}
function isScreenSmall() {
    return window.screen.width >= 576 && window.screen.width < 768;
}
function isScreenMedium() {
    return window.screen.width >= 768 && window.screen.width < 992;
}
function isScreenLarge() {
    return window.screen.width >= 992 && window.screen.width < 1200;
}
function isScreenExtraLarge() {
    return window.screen.width >= 1200;
}

