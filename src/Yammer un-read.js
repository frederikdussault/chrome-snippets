javascript: (function ($) {
  function nbDaysSincePublished($msg) {
    var $timestamp = $msg.find('.yj-message-attributes a[title].yj-message-timestamp');
    var text = $timestamp.attr('title'); // eg "9:29 AM March 25" or "9:29 AM March 25, 2018"

    var a = text.match(/(\d+[:]{1}\d+ [A|P]M) (\w+) (\d+)(, )?(\d+)?/i);

    var d = new Date(
        a[2] + ' ' + 
        a[3] + ', ' + 
        ( a[5] || new Date().getFullYear() )
    );
    var td = Date.now();
    var _24hours = 24 * 60 * 60 * 1000;

    return Math.floor((td - d) / _24hours);
  }


  var _NbDayToBeConsideredOld = 180;

  $('.yj-thread-list--body.yj-list-container li.yj-thread-list-item')  // articles
  .each((i, el)=>{
    var $message = $(el).eq(0).find('.yj-message-list-item--body.yj-message-body').eq(0);
    var nbDays = nbDaysSincePublished($message);
    console.log('Published ' + nbDays + ' day(s) ago');

    if (nbDays >= _NbDayToBeConsideredOld) $(el).hide();
  });
})(jQuery)