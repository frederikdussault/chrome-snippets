/* globals $ */

let $rows = $("tr");
let $AUTool = $("<div id='AUTool' />");

let $searchText = $('<input type="text" id="searchText" placeholder="Enter search text">')
  .appendTo($AUTool);

$('<a id="searchPart" href="#">Search</a>')
  .on("click", function () {
    $rows.not(":contains('" + $searchText[0].value + "')").hide();
  })
  .appendTo($AUTool);

// FIXME does not work
$('<a id="searchExact" href="#">Search Exact match</a>')
  .on("click", function () {
    $rows
      .filter(function (index, row) {
        var re = new RegExp($searchText[0].value, "gi");
        var nbFound = false;

        // TODO loop td children to find the search text
        $(row).find("td").each((i, el) => {
          var val = $(el).text();
          if (!!val.match(re)) nbFound = true;
          console.log(el, $(el).text(), nbFound);
        });

        return !nbFound;  // TODO TEST!!!

        // Return true if does not match

      })
      .hide();
  })
  .appendTo($AUTool);

$('<a id="show" href="#">Show back</a>')
  .on("click", () => { 
    $rows.show();
  })
  .appendTo($AUTool);

$(".navbar").append($AUTool);
