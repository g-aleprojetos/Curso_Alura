using Alura.LeilaoOnline.Selenium.Fixtures;
using Alura.LeilaoOnline.Selenium.Helpers;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using System.IO;
using System.Reflection;
using Xunit;

namespace Alura.LeilaoOnline.Selenium
{
    [Collection("Chrome Driver")]
    public class AoNavegarParaHome
    {
        private IWebDriver driver;

        //Setup
        public AoNavegarParaHome(TestFixture fixture)
        {
           driver = fixture.Driver;
        }


        [Fact]
        public void DadoChromeAbertoDeveMostrarLeilaoNoTitulo()
        {
            //arrange 
           

            //act
            driver.Navigate().GoToUrl("http://www.localhost:5000");

            //assert
            Assert.Contains("Leil�es", driver.Title);
        }

        [Fact]
        public void DadoChromeAbertoDeveMostrarProximosLeilaoNaPagina()
        {
            //arrange 
           
            //act
            driver.Navigate().GoToUrl("http://www.localhost:5000");

            //assert
            Assert.Contains("Pr�ximos Leil�es", driver.PageSource);
        }
    }
}
