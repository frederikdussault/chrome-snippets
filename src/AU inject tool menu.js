/* global jQuery */

javascript: (function ($) {
  /** 
   * To use with AdUtility 
   * 
   * Dependance:
   *  jQuery
   * 
   * */

  function injectStyles() {
    let styles = `
    ul#adToolMenu {
      display: inline-flex;
      min-width: 30rem;
    }
    ul#adToolMenu a {
      flex-wrap: nowrap;
      justify-content: flex-start;
      flex-grow: 1;
      flex-direction: row;
      padding: 10px;
      font-size: 1.7rem;
    }

    :root {
      --colWidth: 400px;
    }

    .expandedRulesCol {
      width: var(--colWidth) !important;
    }
    .expandedRulesRow {
      width: var(--colWidth) !important;
      white-space: normal !important;
      overflow: initial !important;
      textOverflow: inherit !important;
    }

    @media (min-width: 768px) {
      .sidebar {
          margin-top: 100px;
      }
    }
    `;

    $('<style id="adToolStyles" type="text/css">')
      .text(styles)
      .appendTo('head');
  } // end - injectStyles

  // methods
  function addDisplayOnlyDomainsOfPinnedRule() {
    /* Show/hide domain with a pinned rule */
    $('<a id="togglePinned">Toggle Pinned</a>')
      .on('click', function () {
        $colDomains.find('.list-group-item:not(.list-group-item-warning, .list-group-item.disabled)').toggleClass('hide');
      })
      .appendTo('<li>')
      .appendTo($menu);
  } // end - addDisplayOnlyDomainsOfPinnedRule

  function addToggleRuleColumnWidth() {
    /* Resize the Rule column */
    $('<a id="toggleWidth">Toggle Rule col width</a>')
      .on('click', function () {
        $colRules.toggleClass('expandedRulesCol');
        $colRules.find(".list-group-item div:not(.dropdown)").toggleClass('expandedRulesRow');
      })
      .appendTo('<li>')
      .appendTo($menu);
  } // end - addToggleRuleColumnWidth

  function addResetRuleColumn() {
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

  let $container = $('.navbar-header'),
    $menu = $('<ul id="adToolMenu"></ul>'),
    $columns = $("#root > div > div"),
    $colDomains = $columns.eq(0),
    // $colZones = $columns.eq(1),
    $colRules = $columns.eq(2);

  injectStyles();

  $menu.appendTo($container); // inject menu
  addDisplayOnlyDomainsOfPinnedRule();
  addToggleRuleColumnWidth();
  addResetRuleColumn();

})(jQuery)
