/* eslint-disable no-unused-vars */

/**
 * to use in Google Chrome 65+
 */

let redirectList = [
    { reqUrl: '/blog',                              expStatus: 200, expUrl: '/en/' },
    { reqUrl: '/blog/',                             expStatus: 200, expUrl: '/en/' },
    { reqUrl: '/en/blog',                           expStatus: 200, expUrl: '/en/' },
    { reqUrl: '/en/blog/',                          expStatus: 200, expUrl: '/en/' },
    { reqUrl: '/en/blogish',                        expStatus: 404 },
    { reqUrl: '/en/blogish/',                       expStatus: 404 },
    { reqUrl: '/blogue',                            expStatus: 200, expUrl: '/fr/' },
    { reqUrl: '/blogue',                            expStatus: 200, expUrl: '/fr/' },
    { reqUrl: '/blogue/',                           expStatus: 200, expUrl: '/fr/' },
    { reqUrl: '/fr/blogue',                         expStatus: 200, expUrl: '/fr/' },
    { reqUrl: '/fr/blogue/',                        expStatus: 200, expUrl: '/fr/' },
    { reqUrl: '/fr/blogueuse',                      expStatus: 404, expUrl: '/fr/' },
    { reqUrl: '/fr/blogueuse/',                     expStatus: 404, expUrl: '/fr/' },
    { reqUrl: '/en/article',                        expStatus: 200, expUrl: '/en/' },
    { reqUrl: '/en/article/',                       expStatus: 200, expUrl: '/en/' },
    { reqUrl: '/en/article/whatever-you-put-after', expStatus: 200, expUrl: '/en/' },
    { reqUrl: '/en/article',                        expStatus: 200, expUrl: '/en/' },
    { reqUrl: '/fr/article',                        expStatus: 200, expUrl: '/fr/' },
    { reqUrl: '/fr/article/',                       expStatus: 200, expUrl: '/fr/' },
    { reqUrl: '/fr/article/whatever-you-put-after', expStatus: 200, expUrl: '/fr/' },
    { reqUrl: '/en/tag',                            expStatus: 200, expUrl: '/en/' },
    { reqUrl: '/en/tag/',                           expStatus: 200, expUrl: '/en/' },
    { reqUrl: '/en/tag/whatever-you-put-after',     expStatus: 200, expUrl: '/en/' },
    { reqUrl: '/fr/tag',                            expStatus: 200, expUrl: '/fr/' },
    { reqUrl: '/fr/tag/',                           expStatus: 200, expUrl: '/fr/' },
    { reqUrl: '/fr/tag/whatever-you-put-after',     expStatus: 200, expUrl: '/fr/' }
];

let arr = [];
let domain = window.location.origin;

var promiseList = (redir) => {
    let promise = fetch(domain + redir.reqUrl);

    promise.then(response => {
        let resUrl = (new URL(response.url)).pathname;

        let assert = false;
        if ( 404 == redir.expStatus && redir.expStatus == response.status ) {
            assert = true;
        } else if ( redir.expStatus == response.status && redir.expUrl == resUrl )  {
            assert = true;
        }

        arr.push({
            'reqUrl':    redir.reqUrl,
            'expUrl':    redir.expUrl,
            'expStatus': redir.expStatus,
            'resStatus': response.status,
            'resUrl':    resUrl,
            'assert':    ( assert ) ? 'OK' : 'FAIL'
        });
    });
};

let logStatus = (arr) => {
    // sort by status

    let compareStatus = (a, b) => {
        if (a.resStatus < b.resStatus) {
            return -1;
        }
        if (a.resStatus > b.resStatus) {
            return 1;
        }
    
        // names must be equal
        return 0;            
    };
    let compareRequested = (a, b) => {
        if (a.reqUrl < b.reqUrl) {
            return -1;
        }
        if (a.reqUrl > b.reqUrl) {
            return 1;
        }
    
        // names must be equal
        return 0;
    };

    let compareStatusThenRequested = (a, b) => {
        let res = compareStatus(a, b);

        // status is equal, compare the next level: Requested url
        if ( res === 0 )  {

            // update code
            return compareRequested(a, b);
        }
   
        return res;
    };

    let compareRequestedThenStatus = (a, b) => {
        let res = compareRequested(a, b);

        // status is equal, compare the next level: Requested url
        if ( res === 0 )  {

            // update code
            return compareStatus(a, b);
        }
   
        return res;
    };

    arr.sort(compareRequestedThenStatus);

    console.table(arr);
};

const timeToWait = redirectList.length * 200;
setTimeout(function(){
    logStatus(arr);
}, timeToWait);

redirectList.forEach( promiseList );
