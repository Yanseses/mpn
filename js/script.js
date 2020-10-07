$(document).ready(function(){
    const burgerBtn = $('.js-mobilMenu');
    const listMenu = $('.js-list-menu');
    const mapBtn = $('.js-map-button');
    const modalMap = $('.js-modal-map');

    $('body').removeClass('no-js');

    burgerBtn.on('click', openMobilMenu);
    mapBtn.on('click', openMobilModal);

    function openMobilMenu(e) {
        e.preventDefault();

        let expanded = burgerBtn.attr('aria-expanded'),
            label = burgerBtn.attr('aria-label');

            burgerBtn.toggleClass('burger-active');
            $('.header').toggleClass('js-burger');
            $('.logo-icon').toggleClass('js-logo-size');

            if (listMenu.is(':hidden')) {
                expanded = true;
                label = 'Меню развернуто';
                burgerBtn.attr('aria-expanded', expanded);
                burgerBtn.attr('aria-label', label);

                listMenu.show();
            } else {
                expanded = false;
                label = 'Меню свернуто';
                burgerBtn.attr('aria-expanded', expanded);
                burgerBtn.attr('aria-label', label);

                listMenu.hide();
            }
    }

    function openMobilModal(e) {
        e.preventDefault();

        if (modalMap.is(':hidden')) {
            modalMap.show();
        } else {
            modalMap.hide();
        }
    }

});