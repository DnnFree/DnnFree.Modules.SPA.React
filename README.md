# DnnFree.Modules.SPA.React

DNN (DotNetNuke) SPA Module using React & Webpack for fast development

This Module is made using DNN 9.3 that get data from module Web API.

## Getting started

Firstly create a Folder 'DnnFree' under DesktopModules, 
then Clone/Download current repository and place it inside DnnFree Folder

Open Powershell/Bash and run :

    npm install
    npm run dev

If you're planning to edit the Server code, open Project with VS2017. Use VS Code for Client development.

~~Since there's still an issue in DNN 9.2 for creating new module, let just install the module.~~

Using VS2017, build it in Release mode to create installation package. Then login as host and install the installation package.

---
During 'dnndev', any change will auto update the bundle but not auto refresh, need to refresh web browser manually (ctrl+F5)
