javascript:!function($){let $container=$(".navbar-header"),$menu=$('<ul id="adToolMenu"></ul>'),$columns=$("#root > div > div"),$colDomains=$columns.eq(0),$colRules=$columns.eq(2);$('<style id="adToolStyles" type="text/css">').text("\n    ul#adToolMenu {\n      display: inline-flex;\n      min-width: 30rem;\n    }\n    ul#adToolMenu a {\n      flex-wrap: nowrap;\n      justify-content: flex-start;\n      flex-grow: 1;\n      flex-direction: row;\n      padding: 10px;\n      font-size: 1.7rem;\n    }\n\n    :root {\n      --colWidth: 400px;\n    }\n\n    .expandedRulesCol {\n      width: var(--colWidth) !important;\n    }\n    .expandedRulesRow {\n      width: var(--colWidth) !important;\n      white-space: normal !important;\n      overflow: initial !important;\n      textOverflow: inherit !important;\n    }\n\n    @media (min-width: 768px) {\n      .sidebar {\n          margin-top: 100px;\n      }\n    }\n    ").appendTo("head"),$menu.appendTo($container),$('<a id="togglePinned">Toggle Pinned</a>').on("click",function(){$colDomains.find(".list-group-item:not(.list-group-item-warning, .list-group-item.disabled)").toggleClass("hide")}).appendTo("<li>").appendTo($menu),$('<a id="toggleWidth">Toggle Rule col width</a>').on("click",function(){$colRules.toggleClass("expandedRulesCol"),$colRules.find(".list-group-item div:not(.dropdown)").toggleClass("expandedRulesRow")}).appendTo("<li>").appendTo($menu),$('<a id="resetPage">Reset Page</a>').on("click",function(){$colDomains.find(".list-group-item:not(.list-group-item-warning, .list-group-item.disabled)").removeClass("hide"),$colRules.removeClass("expandedRulesCol"),$colRules.find(".list-group-item div:not(.dropdown)").removeClass("expandedRulesRow")}).appendTo("<li>").appendTo($menu)}(jQuery);