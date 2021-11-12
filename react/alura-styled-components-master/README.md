# ***Descrição da aula***

<br />

### Abaixar projeto &nbsp;
https://github.com/alura-cursos/alura-styled-components.git

### Entar na pasta onde o projeto fica. &nbsp;

### Carregar modulos do projeto &nbsp;
```$ npm install ```

### Rodar projeto &nbsp;
```$ npm start ```

### verificar se tudo está funcionando

### Para a aplicação com comando ```ctrl + c```

### baixar a biblioteca styled-components &nbsp;
```$ npm install --save styled-components ```

<br />
<br />

## Programação antes do style components

Estilo que fica no css
```
.Titulo {
color: grey;
padding: 25px 0;
}
```

programação do index.jsx da pasta Titulo
```
import React from "react";

  const Titulo = ({ children }) => {
  return <h1 className="titulo">{children}</h1>;
 };
export default Titulo;
```

<br />
<br />

## ***Mudando para o style components***
### Estilo Titulo que fica na pasta css é apagado

### O index.jsx da pasta Titulo
```
import styled from 'styled-components'

  const Titulo = styled.h1`
  color: grey;
  padding: 25px 0;
`;

export default Titulo;
```

<br />
<br />

## ***Criando um style global***

### Estilo que fica no css

```
* {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: grey;
}
```

### Crie um arquivo novo na pasta Components com nome GlobalStyle.js

### Importe a biblioteca e a programação global do css

```
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
box-sizing: border-box;
font-family: "Montserrat", sans-serif;
margin: 0;
padding: 0;
text-decoration: none;
color: grey;
}
`
```
### Apague o estilo global do css

### Aplicar no App.js

### Importar
```
import { GlobalStyle } from "./Components/GlobalStyle";
```
### Colocar no return como primeiro a carregar

```
    <>
      <GlobalStyle />
      <Cabecalho />
      <Container />
    </>
```
importar fonts

retira a fonte do css

```
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap");
```
e coloca no index.html da pasta public e colocar  a fonte 

```
 <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap">
```
## Inclusão de variaveis

### Criar pasta UI na pasta Components e dentro dela um arquivo variaveis.js

### Criação das variaveis das cores no variaveis.js
```
export const corPrimaria = "#41d3be";
export const fundoClaro = "#f1f1f1";
export const textoFundoClaro = "grey"
```

estilizando a pagina

Cabeçalho 
antes

css
```
.cabecalho {
  background-color: #41d3be;
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
}
```
index.jsx

```
<div className="cabecalho">
...
</div>

```
depois
Importa a styled components

```
import styled from "styled-components";
```
css é apagado

index.jsx 
```
const StyleHeader = styled.nav`
background-color: #41d3be;
display: flex;
justify-content: space-between;
padding: 0 15vw;
height: 10vh;
align-items: center;
`
```
subistitui a div 

```
<StyleHeader>
...
</StyleHeader>
```

incluir a variavel

importar a biblioteca

```
import { corPrimaria } from "../UI/variaveis";
```
 substituir a linha backgroud-color do StyleHeader 

 ```
 background-color: #41d3be;
 ```

 por 

 ```
 background-color: ${corPrimaria};
 ```

 Fazer isso para o componente imagem

 ## Usando Props

Uso nos Botões

Como era antes

css
```
.btn-primario {
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  color: white;
  background: transparent;
}

.btn-secundario {
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: white;
  color: #41d3be;
}
```
index.jsx

```
<div>
  <a className="btn-secundario" href="https://google.com">
    Ajuda
  </a>
  <a className="btn-primario" href="https://google.com">
    Sair
  </a>
</div>
```
Como ficou depois

As estilização dos botões no css foi apagado

index.jsx
foi acrecentado 
```
const BtnCabecalho = styled.a`
text-align: center;
border-radius: 3px;
padding: 5px 20px;
margin: 0 10px;
font-weight: 600;
border: 2px solid white;

background: ${(props) => (props.primary ? "white" : corPrimaria)};
color: ${(props) => (props.primary ? corPrimaria : "white")};
`
```

mudado nos botões
```
 <div>
   <BtnCabecalho primary href="https://google.com">Ajuda</BtnCabecalho>
   <BtnCabecalho href="https://google.com">Sair</BtnCabecalho>
 </div>

```



