using Alura.LeilaoOnline.Selenium.Helpers;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;

namespace Alura.LeilaoOnline.Selenium.Fixtures
{
    public class TestFixture : IDisposable
    {
        public IWebDriver Driver { get; private set; }

        //Setup
        public TestFixture()
        {
            //var chromeOption = new ChromeOptions();
            //chromeOption.AddArgument("--start-maximized");
            //chromeOption.PageLoadStrategy = PageLoadStrategy.Eager;
            Driver = new ChromeDriver(TestHelper.ExeFolder);
        }

        //TearDown
        public void Dispose()
        {
            Driver.Quit();
        }
    }
}
