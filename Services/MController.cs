using System.Net.Http;
using DotNetNuke.Web.Api;
using DotNetNuke.Security;

namespace DnnFree.Modules.SPA.React.Services
{
    [SupportedModules("DnnFree.Modules.SPA.React")]
    [DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.View)]

    public class MController : DnnApiController
    {
        public HttpResponseMessage HelloWorld()
        {
            string response = "Hello World";
            return Request.CreateResponse(response);
        }
    }
}
