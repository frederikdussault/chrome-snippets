javascript: (function ($) {
  function nbDaysSincePublished($msg) {
    var $timestamp = $msg.find('.yj-message-attributes a[title].yj-message-timestamp')
    var text = $timestamp.text()

    if (text.includes('ago')) return 1;


    // a = text.match(/(\w+) (\d+), (\d+) at (\d+[:]{1}\d+ [A|P]M)/i)
    var a = text.match(/(\w+) (\d+)(, )?(\d+)? at (\d+[:]{1}\d+ [A|P]M)/i)
    var y = a[4] || '2019'
    var d = new Date(a[1] + ' ' + a[2] + ', ' + y)

    var td = Date.now()

    var _24hours = 24 * 60 * 60 * 1000

    return Math.floor((td - d) / _24hours)
  }

  //$articles = $('.was-unviewed')
  var $articles = $('li')
  var $messages = $articles.find('.yj-message-list-item--message-container.yj-message-container')
  var $aMessage = $messages.eq(0)

  console.log('Published ' + nbDaysSincePublished($aMessage) + ' day(s) ago')

  console.log('Published ' + nbDaysSincePublished($messages.eq(50)) + ' day(s) ago')
})(jQuery)