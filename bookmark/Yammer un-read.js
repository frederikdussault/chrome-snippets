javascript:!function($){var a,d,td;$(".yj-thread-list--body.yj-list-container li.yj-thread-list-item").each((i,el)=>{var $message=$(el).eq(0).find(".yj-message-list-item--body.yj-message-body").eq(0),nbDays=(a=$message.find(".yj-message-attributes a[title].yj-message-timestamp").attr("title").match(/(\d+[:]{1}\d+ [A|P]M) (\w+) (\d+)(, )?(\d+)?/i),d=new Date(a[2]+" "+a[3]+", "+(a[5]||(new Date).getFullYear())),td=Date.now(),Math.floor((td-d)/864e5));console.log("Published "+nbDays+" day(s) ago"),nbDays>=180&&$(el).hide()})}(jQuery);