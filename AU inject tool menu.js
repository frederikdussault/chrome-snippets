/** 
 * To use with AdUtility 
 * 
 * Dependance:
 *  jQuery
 * 
 * */

(function ($) {
  function injectStyles () {
    styles = `
    :root {
      --colWidth: 600px;
    }

    ul#adToolMenu {
      display: inline-flex;
      width: 36rem;
    }
    ul#adToolMenu a {
      flex-wrap: nowrap;
      justify-content: flex-start;
      flex-grow: 1;
      flex-direction: row;
      padding: 10px;
    }

    .expandedRulesCol {
      width: var(--colWidth) !important;
    }
    .expandedRulesRow {
      width: var(--colWidth) !important;
      textOverflow: inherit !important;
      overflow: visible !important;
    }
    `

    $styles = $('<style id="adToolStyles" type="text/css">')
      .text(styles)
      .appendTo('head')
  } // end - injectStyles

  // methods
  function addDomainsOfPinnedRule () {
    /* Show/hide domain with a pinned rule */
    $unPinned   = $colDomains.find('.list-group-item:not(.list-group-item-warning, .list-group-item.disabled)')

    $('<a id="togglePinned">Toggle Pinned</a>')
      .on('click', function() {
        $unPinned.toggleClass('hide')
      })
      .appendTo('<li>')
      .appendTo($menu)
  } // end - addDomainsOfPinnedRule

  function addToggleRuleColumnWidth () {
    /* Resize the Rule column */
    $rules    = $colRules.find(".list-group-item div:not(.dropdown)")

    $('<a id="toggleWidth">Toggle Rule col width</a>')
      .appendTo('<li>')
      .appendTo($menu)
      .on('click', function() {
        $colRules.toggleClass('expandedRulesCol')
        $rules.toggleClass('expandedRulesRow')
    })
} // end - addToggleRuleColumnWidth

  // Execution

  $styles = {}
  $container = $('.navbar-header')
  $menu = $('<ul id="adToolMenu"></ul>')
  $columns = $("#root > div > div")
  $colDomains = $columns.eq(0)
  $colZones = $columns.eq(2)
  $colRules = $columns.eq(2)

  injectStyles()

  $menu.appendTo($container)
  addDomainsOfPinnedRule()
  addToggleRuleColumnWidth()

})(jQuery)
