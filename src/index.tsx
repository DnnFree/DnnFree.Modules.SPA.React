import React from 'react';
import {createRoot} from 'react-dom/client';
import {Route, HashRouter as Router, Routes, } from 'react-router-dom';
import Dashboard from '@/pages/dashboard';
import About from '@/pages/about';
import '@/styles/global.less';
import ApiSample from './pages/apiSample';

// Load on Ready
const Index = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={Dashboard} />
          <Route path="/about" Component={About} />
          <Route path="/api-call" Component={ApiSample} />
        </Routes>
      </Router>
    </div>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  
  var els = document.getElementsByClassName("app");
  Array.prototype.forEach.call(els, function(el) {
    var moduleId = el.id.replace("module-", "");
    var service = {
      path: "DnnFree.Modules.SPA.React",
      framework: (window as any).$?.ServicesFramework(moduleId),
      baseUrl: undefined as string | undefined
    }
    service.baseUrl = service.framework.getServiceRoot(service.path);

    const root = createRoot(el);
    root.render(<Index />);
  })

})