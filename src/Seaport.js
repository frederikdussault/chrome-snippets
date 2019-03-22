// Seaport.js
(function($){
    var h = 900; // height

    $('#rightCol').remove();
    $('#header, #footer').css('display','none');

    $('iframe.game-iframe').css('height',(h+10)+'px')
    var $game_iframe = $('iframe.game-iframe').contents()

    var $game = $game_iframe.find('#Game');
    $game_iframe
        .find('.player_bar, .top_menu, .flash_update, .bottom_links')
            .css('display','none');

    $game
        .css('height',h+'px')
        .find('div.player_bar, div.flash_update, div.bottom_links')
            .css('display','none');
})(jQuery)