let theURL = new URL(window.location.href);
theURL.searchParams.set('cb', Date.now());
window.location.href = theURL.href;