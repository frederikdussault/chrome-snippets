javascript:console.log("AMP-AD RTC-CONFIG VALIDATION"),ampads=document.querySelectorAll("amp-ad"),ampads&&ampads.length>0?ampads.forEach((ad,index)=>{console.log(index+": \n","json: ",JSON.parse(ad.getAttribute("json")),"\n","rtc-config: ",JSON.parse(ad.getAttribute("rtc-config")))}):console.log("WARNING: There is no amp-ad tags");