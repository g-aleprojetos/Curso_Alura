using Alura.LeilaoOnline.Selenium.Fixtures;
using OpenQA.Selenium;
using Xunit;

namespace Alura.LeilaoOnline.Selenium.testes
{
    [Collection("Chrome Driver")]
    public class AoEfetuarRegistro
    {
        private IWebDriver driver;

        public AoEfetuarRegistro(TestFixture fixture)
        {
            driver = fixture.Driver;
        }
        


        [Fact]
        public void DadoInfoValidaDeveIrPaginaDeAgradecimento()
        {
            //arrange - dado chrome aberto, pagina inicial do sistema de leilões, dados de rgistro válidos informados
            driver.Navigate().GoToUrl("http://localhost:5000");

            //nome
            var inputNome = driver.FindElement(By.Id("Nome"));

            //email
            var inputEmail = driver.FindElement(By.Id("Email"));

            //password
            var inputPassword = driver.FindElement(By.Id("Password"));

            //confpassword
            var inputConfirmPassword = driver.FindElement(By.Id("ConfirmPassword"));

            //botão de registro
            var botaoRegistro = driver.FindElement(By.Id("btnRegistro"));


            inputNome.SendKeys("Alexandre Gonçalves");
            inputEmail.SendKeys("asg2012r@gmail.com");
            inputPassword.SendKeys("1234");
            inputConfirmPassword.SendKeys("1234");

            //act - efetuo o registro
            botaoRegistro.Click();


            //assert - devo ser direcionado para pagina de agradecimento
            Assert.Contains("Obrigado", driver.PageSource);

        }

        [Theory]
        [InlineData("","asg2012br@gmail.com","1234","1234")]
        [InlineData("Alexandre","asg2012br","1234","1234")]
        [InlineData("Alexandre","asg2012br@gmail.com","1234","4567")]
        [InlineData("Alexandre","asg2012br@gmail.com","1234","")]
  
        public void DadoInfoInvalidaDeveFicarNaPaginaHome(
            string nome,
            string email,
            string senha,
            string confirmSenha)
        {
            //arrange - dado chrome aberto, pagina inicial do sistema de leilões, dados de rgistro válidos informados
            driver.Navigate().GoToUrl("http://localhost:5000");

            //nome
            var inputNome = driver.FindElement(By.Id("Nome"));

            //email
            var inputEmail = driver.FindElement(By.Id("Email"));

            //password
            var inputPassword = driver.FindElement(By.Id("Password"));

            //confpassword
            var inputConfirmPassword = driver.FindElement(By.Id("ConfirmPassword"));

            //botão de registro
            var botaoRegistro = driver.FindElement(By.Id("btnRegistro"));


            inputNome.SendKeys(nome);
            inputEmail.SendKeys(email);
            inputPassword.SendKeys(senha);
            inputConfirmPassword.SendKeys(confirmSenha);

            //act - efetuo o registro
            botaoRegistro.Click();


            //assert - devo ser direcionado para pagina de agradecimento
            Assert.Contains("section-registro", driver.PageSource);

        }

        [Fact]
        public void DadoNomeEmBrancoDeveMostrarMensagemDeErro()
        {
            //arrange
            driver.Navigate().GoToUrl("http://localhost:5000");

            //botão de registro
            var botaoRegistro = driver.FindElement(By.Id("btnRegistro"));

            //act 
            botaoRegistro.Click();

            //assert -span.msg-erro[data-valmsg-for=Name]
            IWebElement elemento = driver.FindElement(By.CssSelector("span.msg-erro[data-valmsg-for=Nome]"));
            Assert.Equal("The Nome field is required.",elemento.Text);

        }

        [Fact]
        public void DadoEmailInvalidoDeveMostrarMensagemDeErro()
        {
            //arrange
            driver.Navigate().GoToUrl("http://localhost:5000");

            //email
            var inputEmail = driver.FindElement(By.Id("Email"));
            inputEmail.SendKeys("asg2012");

            //botão de registro
            var botaoRegistro = driver.FindElement(By.Id("btnRegistro"));

            //act 
            botaoRegistro.Click();

            //assert -span.msg-erro[data-valmsg-for=Name]
            IWebElement elemento = driver.FindElement(By.CssSelector("span.msg-erro[data-valmsg-for=Email]"));
            Assert.Equal("Please enter a valid email address.", elemento.Text);

        }

    }
    
}
