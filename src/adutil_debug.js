javascript:(function () {
  let theURL = new URL(window.location.href);
  theURL.searchParams.set('preview', 'true');
  theURL.searchParams.set('adutil_debug', 'true');
  window.location.href = theURL.href;
})()