using Alura.LeilaoOnline.Selenium.Helpers;
using OpenQA.Selenium;

namespace Alura.LeilaoOnline.Selenium.PageObjects
{
    public class Home
    {
        private IWebDriver driver;
        private PreenchimentoDados preenchimentoDados;

        public Home(IWebDriver driver)
        {
            this.driver = driver;
        }

        public void HomePage()
        {
            driver.Navigate().GoToUrl(preenchimentoDados.URL);

        }
    }
}
