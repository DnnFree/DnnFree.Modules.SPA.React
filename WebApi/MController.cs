using System.Net.Http;
using DotNetNuke.Web.Api;
using DotNetNuke.Security;
using System.Web.Http;

namespace DnnFree.Modules.SPA.React.WebApi
{
    //[DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.View)]

    [AllowAnonymous]
    public class MController : DnnApiController
    {
        [HttpGet]
        public HttpResponseMessage HelloWorld()
        {
            string response = "Hello World";
            return Request.CreateResponse(response);
        }
    }
}
