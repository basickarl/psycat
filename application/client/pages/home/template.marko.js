// Compiled using marko@4.5.6 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/psycat$0.1.0/application/client/pages/home/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    __browser_json = require.resolve("./browser.json"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    lasso_page_tag = marko_loadTag(require("lasso/taglib/config-tag")),
    marko_escapeXml = marko_helpers.x,
    lasso_head_tag = marko_loadTag(require("lasso/taglib/head-tag")),
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    app_main_template = marko_loadTemplate(require.resolve("../../components/smart/app-main")),
    app_main_tag = marko_loadTag(app_main_template),
    marko_escapeScript = marko_helpers.xs,
    lasso_body_tag = marko_loadTag(require("lasso/taglib/body-tag")),
    browser_refresh_tag = marko_loadTag(require("browser-refresh-taglib/refresh-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  lasso_page_tag({
      packagePath: __browser_json,
      dirname: __dirname,
      filename: __filename
    }, out);

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>" +
    marko_escapeXml(data.title) +
    "</title>");

  lasso_head_tag({}, out, __component, "4");

  out.w("</head><body>");

  component_globals_tag({}, out);

  out.w("template bitchez ");

  app_main_tag(data.preloadedState, out, __component, "6");

  out.w("<script>\n            window.__PRELOADED_STATE__ = " +
    marko_escapeScript(JSON.stringify(data.preloadedState).replace(/</g, "\\u003c")) +
    "\n        </script>");

  lasso_body_tag({}, out, __component, "8");

  browser_refresh_tag({
      enabled: true
    }, out, __component, "9");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "10");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    tags: [
      "lasso/taglib/config-tag",
      "lasso/taglib/head-tag",
      "marko/src/components/taglib/component-globals-tag",
      "../../components/smart/app-main",
      "lasso/taglib/body-tag",
      "browser-refresh-taglib/refresh-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
