javascript:let redirectList=[{reqUrl:"/blog",expStatus:200,expUrl:"/en/"},{reqUrl:"/blog/",expStatus:200,expUrl:"/en/"},{reqUrl:"/en/blog",expStatus:200,expUrl:"/en/"},{reqUrl:"/en/blog/",expStatus:200,expUrl:"/en/"},{reqUrl:"/en/blogish",expStatus:404},{reqUrl:"/en/blogish/",expStatus:404},{reqUrl:"/blogue",expStatus:200,expUrl:"/fr/"},{reqUrl:"/blogue",expStatus:200,expUrl:"/fr/"},{reqUrl:"/blogue/",expStatus:200,expUrl:"/fr/"},{reqUrl:"/fr/blogue",expStatus:200,expUrl:"/fr/"},{reqUrl:"/fr/blogue/",expStatus:200,expUrl:"/fr/"},{reqUrl:"/fr/blogueuse",expStatus:404,expUrl:"/fr/"},{reqUrl:"/fr/blogueuse/",expStatus:404,expUrl:"/fr/"},{reqUrl:"/en/article",expStatus:200,expUrl:"/en/"},{reqUrl:"/en/article/",expStatus:200,expUrl:"/en/"},{reqUrl:"/en/article/whatever-you-put-after",expStatus:200,expUrl:"/en/"},{reqUrl:"/en/article",expStatus:200,expUrl:"/en/"},{reqUrl:"/fr/article",expStatus:200,expUrl:"/fr/"},{reqUrl:"/fr/article/",expStatus:200,expUrl:"/fr/"},{reqUrl:"/fr/article/whatever-you-put-after",expStatus:200,expUrl:"/fr/"},{reqUrl:"/en/tag",expStatus:200,expUrl:"/en/"},{reqUrl:"/en/tag/",expStatus:200,expUrl:"/en/"},{reqUrl:"/en/tag/whatever-you-put-after",expStatus:200,expUrl:"/en/"},{reqUrl:"/fr/tag",expStatus:200,expUrl:"/fr/"},{reqUrl:"/fr/tag/",expStatus:200,expUrl:"/fr/"},{reqUrl:"/fr/tag/whatever-you-put-after",expStatus:200,expUrl:"/fr/"}],arr=[],domain=window.location.origin;promiseList=(redir=>{fetch(domain+redir.reqUrl).then(response=>{let resUrl=new URL(response.url).pathname,assert=!1;404==redir.expStatus&&redir.expStatus==response.status?assert=!0:redir.expStatus==response.status&&redir.expUrl==resUrl&&(assert=!0),arr.push({reqUrl:redir.reqUrl,expUrl:redir.expUrl,expStatus:redir.expStatus,resStatus:response.status,resUrl:resUrl,assert:assert?"OK":"FAIL"})})}),logStatus=(arr=>{compareStatus=((a,b)=>a.resStatus<b.resStatus?-1:a.resStatus>b.resStatus?1:0),compareRequested=((a,b)=>a.reqUrl<b.reqUrl?-1:a.reqUrl>b.reqUrl?1:0),compareStatusThenRequested=((a,b)=>{let res=compareStatus(a,b);return 0===res?compareRequested(a,b):res}),compareRequestedThenStatus=((a,b)=>{let res=compareRequested(a,b);return 0===res?compareStatus(a,b):res}),arr.sort(compareRequestedThenStatus),console.table(arr)});const timeToWait=200*redirectList.length;setTimeout(function(){logStatus(arr)},timeToWait),redirectList.forEach(promiseList);