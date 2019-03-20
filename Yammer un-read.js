function nbDaysSincePublished ($msg) {
  $timestamp = $msg.find('.yj-message-attributes a[title].yj-message-timestamp')
  text = $timestamp.text()

  if ( text.includes('ago') ) return 1;
  

  // a = text.match(/(\w+) (\d+), (\d+) at (\d+[:]{1}\d+ [A|P]M)/i)
  a = text.match(/(\w+) (\d+)(, )?(\d+)? at (\d+[:]{1}\d+ [A|P]M)/i)
  y = a[4] || '2019'
  d = new Date(a[1]+' '+a[2]+', '+y)
  
  td = Date.now()

  _24hours = 24 * 60 * 60 * 1000

  return Math.floor( (td - d) / _24hours )
}

//$articles = $('.was-unviewed')
$articles = $('li')
$messages = $articles.find('.yj-message-list-item--message-container.yj-message-container')
$aMessage = $messages.eq(0)

console.log( 'Published ' + nbDaysSincePublished($aMessage) + ' day(s) ago' )

console.log( 'Published ' + nbDaysSincePublished($messages.eq(50)) + ' day(s) ago' )
