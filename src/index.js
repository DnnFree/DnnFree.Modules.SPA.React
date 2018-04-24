import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './pages/Layout';

// Load on Ready
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'complete') {
      var els = document.getElementsByClassName("dnnfree-app");
      Array.prototype.forEach.call(els, function(el) {
        var moduleId = el.id.replace("module-", "");
        var service = {
          path: "DnnFree.Modules.SPA.React",
          framework: $.ServicesFramework(moduleId)
        }
        service.baseUrl = service.framework.getServiceRoot(service.path);
        ReactDOM.render(<Layout mid={moduleId} />, el);
      });
  }
}