//Body Class List
/*
Log applied classes on body of document

Added:
log URL of edit link of post and pages
*/
(function (){
    var body = document.getElementsByTagName('body')[0];

    // list them
    for ( cls of body.className.split(' ') ) {
                   console.log(cls);

                   // display Wordpress edit url
                   logWPEditLink ( cls, "page-id-" );
                   logWPEditLink ( cls, "postid-" );

                   function logWPEditLink ( classNameString, beginsWithString ) {
                                 if ( classNameString.includes( beginsWithString ) ) {
                                                showLink( findId ( classNameString, beginsWithString ) );
                                 }
                   };

                   function findId ( string, matchString ) {
                                 let pos = matchString.length - string.length
                                 return string.slice( pos );
                   };
                   
                   function showLink ( pageId ) {
                                 console.log( "  Page edit url: ");
                                 console.log( "  " + "https://www.texture.ca/wp-admin/post.php?post=" + pageId + "&action=edit" );            
                   };
    }
})();
