/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

javascript: (function ($) {
  /** 
   * To use with AdUtility 
   * 
   * Dependance:
   *  jQuery
   * 
   * */

  function injectStyles () {
    var styles = `
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
      font-size: 1.7rem;
    }

    .expandedRulesCol {
      width: var(--colWidth) !important;
    }
    .expandedRulesRow {
      width: var(--colWidth) !important;
      textOverflow: inherit !important;
      overflow: visible !important;
    }
    `;

    $styles = $('<style id="adToolStyles" type="text/css">')
      .text(styles)
      .appendTo('head');
  } // end - injectStyles

  // methods
  function addDomainsOfPinnedRule () {
    /* Show/hide domain with a pinned rule */
    $('<a id="togglePinned">Toggle Pinned</a>')
      .on('click', function () {
        $colDomains.find('.list-group-item:not(.list-group-item-warning, .list-group-item.disabled)').toggleClass('hide');
      })
      .appendTo('<li>')
      .appendTo($menu);
  } // end - addDomainsOfPinnedRule

  function addToggleRuleColumnWidth () {
    /* Resize the Rule column */
    $('<a id="toggleWidth">Toggle Rule col width</a>')
      .on('click', function () {
        $colRules.toggleClass('expandedRulesCol');
        $colRules.find(".list-group-item div:not(.dropdown)").toggleClass('expandedRulesRow');
      })
      .appendTo('<li>')
      .appendTo($menu);
  } // end - addToggleRuleColumnWidth

  function addResetPage () {
    /* Show/hide domain with a pinned rule */
    $('<a id="resetPage">Reset Page</a>')
      .on('click', function () {
        $colDomains.find('.list-group-item:not(.list-group-item-warning, .list-group-item.disabled)').removeClass('hide');
        $colRules.removeClass('expandedRulesCol');
        $colRules.find(".list-group-item div:not(.dropdown)").removeClass('expandedRulesRow');
      })
      .appendTo('<li>')
      .appendTo($menu);
  } // end - addDomainsOfPinnedRule

  // Execution

  var $styles = {},
    $container = $('.navbar-header'),
    $menu = $('<ul id="adToolMenu"></ul>'),
    $columns = $("#root > div > div"),
    $colDomains = $columns.eq(0),
    $colZones = $columns.eq(2),
    $colRules = $columns.eq(2);

  injectStyles();

  $menu.appendTo($container);
  addDomainsOfPinnedRule();
  addToggleRuleColumnWidth();
  addResetPage();

})(jQuery)
