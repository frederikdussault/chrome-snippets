(function () { 
    /* code to test amp rtc-config attribute in amp-ad */
    console.log("AMP-AD RTC-CONFIG VALIDATION");
    ampads = document.querySelectorAll("amp-ad");

    if (ampads && ampads.length > 0) {
        ampads.forEach( (ad, index) => {
            console.log( 
            index + ': \n', 
            'json: ', JSON.parse(ad.getAttribute("json")),
            '\n',
            'rtc-config: ', JSON.parse(ad.getAttribute("rtc-config"))
            );
        })    
    } else {
        console.log("WARNING: There is no amp-ad tags");    
    }
})()