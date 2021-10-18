using System.IO;
using System.Reflection;

namespace Alura.LeilaoOnline.Selenium.Helpers
{
    public static class TestHelper
    {
        public static string ExeFolder => Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
    }
}
