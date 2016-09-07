namespace WebApp.Helpers
{
    using App_Plugins.HelloWorldEditorPlugin.Models;
    using Newtonsoft.Json.Linq;
    using ViewModels.Common;

    public class HelloWorldHelper
    {
        public static HelloWorldViewModel GetHelloWorldViewModel(JObject helloWorldDefinition)
        {
            var definition = helloWorldDefinition.ToObject<HelloWorldModel>();

            var vm = new HelloWorldViewModel
            {
                Title = definition.Title
            };
            
            return vm;
        }
    }
}
