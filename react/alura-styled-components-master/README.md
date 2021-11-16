# ***Descrição da aula***

para poder trabalhar com o css do styled components é só abaixar a biblioteca no vsCode
```
Nome: vscode-styled-components
ID: jpoissonnier.vscode-styled-components
Descrição: Syntax highlighting for styled-components
Versão: 1.6.6
Editor: Julien Poissonnier
Link do Marketplace do VS: https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components
```

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

## Refatoração

Ir no index.jsx da pasta container

importar o styled components e montar dois componentes o container e o conteudo adquirindo a estilização do arquivo do css

```
import styled from "styled-components";

const Container = styled.div`
background-color: #f1f1f1;
min-height: 90vh;
padding: 0px 15vw;
`
const Conteudo = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
`
```
## Tranforma a função principal em default para ficar com apenas um Container

## de
```
const Container = () => {
  return (
      ...
  );
};
export default Container;
```

## para 

```
export default() => {
  return (
      ...
  );
};
```

### Agora refatora a aplicação

```
<Container>
  <Titulo>Olá Fulano!</Titulo>
  <Conteudo>
    <Conta />
  </Conteudo>
</Container>
```
refatorar os icones

criar um arquino na pasta UI chamado index.js

importar a styled components e jpa estilizar o imagem-icone adquirindo o codigo do css

```
import styled from "styled-components";

export const Icone = styled.img`
height: 25px;
width: 25px;
`;
```

abrir a pesquisa usando o atalho ```ctrl + shift + f ```
e buscar no código os lugares que usar o ```.imagem-icone```

Foi encontrado dois lugares no index.jsx da pasta Conta

importar o Icone
```
import {Icone} from "../../Components/UI/index"
```

Substituir onde tem o a classe image-icone por Icone

## Herança

No index.jsx tem um botão que é o unico que tem margem

Então vamos herdar a configuração e colocar apenas a margem.

importa o styled components

```
import styled from "styled-components";
```
monta o componente herdando a configuração do Icone

```
const IconeMargin = styled(Icone)`
margin-top: 2px;
`
```

Agora retira o margem do codigo e troca de Icone para IconeMargin

estilizando o box, bnt, detalhe, saldo e botao colocando junto no arquivo index.jsx do UI 
monta todas as estiliação

```
export const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: white;
border-radius: 5px;
box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
padding: 20px;
width: 48%;
`

export const Botao = styled.button`
margin: 15px auto 0px auto;
display: block;
border-radius: 20px;
background-color: #41d3be;
border: none;
color: white;
font-weight: 600;
font-size: 14px;
padding: 8px 20px;
cursor: pointer;
`

export const Detalhe = styled.span`
color: #41d3be;
font-size: 24px;
`

export const Saldo = styled.div`
font-weight: 700;
font-size: 32px;
`
```
importa a styled components

```
import {Icone, Box, Detalhe, Saldo, Botao} from "../../Components/UI/index"
```

Troca os ClassName

## Media Query

Retira o media query do css

```
@media (max-width: 800px) {
  .box {
    width: 95%;
    margin: 5px;
  }
  .conteudo {
    flex-direction: column;
  }
}

```
Retire o que é do .box junto com a estrutura do media query e coloca no Box que foi montado no index.jsx da pasta UI

```
export const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: white;
border-radius: 5px;
box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
padding: 20px;
width: 48%;

@media (max-width: 800px) {
      width: 95%;
    margin: 5px;
  }
`
```

Retire o que é do .conteudo junto com a estrutura do media query e coloca no Conteudo que foi montado no index.jsx da pasta Container

```
const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
```

## Extrato

Cria uma nova pasta com nome de Extrato na pasta Components e dentro dela um arquivo index.jsx

monta extrutura básica do index

```
import React from 'react';
import { Box } from '../UI';

const Extrato = ()=>{
  return(

  )
}

export default Extrato
```

importar a o conteudo da pasta do info.js que contem os dados para o estrato

```
import {extratoLista} from '../../info'
```

fazer map para verificar o conteúdo do objeto

```
const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({id, type, from, value, date}) => {
        return (
          <div key={id}>
            <div>{type}</div>
            <div>{from}</div>
          </div>
        );
      })}
    </Box>
  );
};
```

incluindo um botao
Acrescentar o Botão no import do Box
```
import { Box, Botao } from "../UI";
```
acrescenta op botão no final do Box

```
      ...
      <Botao>Ver Mais</Botao>
    </Box>
```

Incluindo itens

cria uma nova pasta Itens e index.jsx nele

montar a pagina de Itens
```
import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
border-radius:10px;
margin: 2px 0;
display: flex;
align-items: center;
justify-content: space-around;
padding: 10px;
font-size: 12px;
`;

export default()=>{
  return<Item></Item>
}
```

## Implementação do tema escuro

acrescentar as novas variaveis de cores no variaveis.js

´´´
export const conteudoClaro = "white";

export const fundoEsculro= "#5c5b5e";
export const conteudoEscuro = "#5c5b5e";
export const textoFundoEscyro = "fafafa";
´´´

criar o arquivo temas.js na pasta UI

importa as cores nesse arquivo

```
import {
  fundoClaro,
  conteudoClaro,
  textoFundoClaro,
  fundoEscuro,
  conteudoEscuro,
  textoFundoEscyro,
} from "./variaveis";
```

Crias os dois objetos

```
export const temaClaro = {
  body: fundoClaro,
  inside: conteudoClaro,
  text: textoFundoClaro,
};

export const temaEscuro = {
  body: fundoEscuro,
  inside: conteudoEscuro,
  text: textoFundoEscuro,
};
```

No arquivo App.js importar o ThemeProvider do styled-components e os temas

```
import {ThemeProvider} from 'styled-components'
import {temaClaro, temaEscuro} from './Components/UI/temas'
```

retira a marcação <> </> e acrescenta ThemeProvider

```
    <ThemeProvider theme={temaEscuro}>
      <GlobalStyle />
      <Cabecalho />
      <Container />
    </ThemeProvider>
```
substituir os cores fixas pela variavel

index do container

```
  background-color: #f1f1f1;
```
por

```
  background-color: ${({theme}) => theme.body};
```

index do UI

```
background-color: white;
```
por
```
background-color: ${({theme}) => theme.inside};
```

globalStyle.js

```
color: grey;
```
por
```
color: ${({theme}) => theme.text};
```

Acrescentar botão para mudança do tema

criar arquivo no Components com nome SwitcherTema/index.jsx

no arquivo criado importar os objetos

```
import React from 'react';
import ThemeOn from '../../assets/images/themeOn.svg'
import ThemeOff from '../../assets/images/themeOff.svg'
import { Icone } from '../UI';
```

criar os icones
```
const claro = <Icone src={ThemeOn} alt= "Tema Claro"/>
const escuro = <Icone src={ThemeOff} alt= "Tema Escuro"/>
```

criar a função de mudança de tema
```
export default (({tema}) => (tema ? escuro : claro));
```

implementar a função de troca de tema no App.js

importar os objetos

```
import React, { useState } from "react";

import { BtnTema } from "./Components/UI"; 
import SwitcherTema from "./Components/SwitcherTema";
```
criar a função de mudança do tema no começo da function App() 

```
  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema);
  };
```

mudança do tema

```
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema}/>
      </BtnTema>
```

mudando a cor do icone

no arquivo tema.js acrescentar o filter tanto no tema claro como no escuro

tema claro
```
filter: "",
```

tema escuro

```
filter: "invert(100%)",
```

No index.js da pasta UI acrescentar a mudança do icone depois da função Icone

```
export const IconeTema = styled(Icone)`
filter: ${({theme}) => theme.filter};
`
```
implementar a troca

conta/index.jsx

importar IconeTema
```
import {Icone, Box, Detalhe, Saldo, Botao, IconeTema} from "../../Components/UI/index"
```
substituir
```
<Icone src={dinheiro} alt="Ícone Saldo" />
```
por
```
<IconeTema src={dinheiro} alt="Ícone Saldo" />
```

e no imageFilter da pasta UI

trocar 
```
import { Icone } from "../Components/UI";

 const Images = {
    Restaurante: <Icone src={alimentacao} alt="Restaurante" />,
    Utilidades: <Icone src={utilidades} alt="Utilidades" />,
    Saude: <Icone src={saude} alt="Saude" />,
    Transporte: <Icone src={transporte} alt="Saude" />,
    default: <Icone src={outros} alt="Outros" />,
  };
```
por 

```
import { IconeTema } from "../Components/UI";

  const Images = {
    Restaurante: <IconeTema src={alimentacao} alt="Restaurante" />,
    Utilidades: <IconeTema src={utilidades} alt="Utilidades" />,
    Saude: <IconeTema src={saude} alt="Saude" />,
    Transporte: <IconeTema src={transporte} alt="Saude" />,
    default: <IconeTema src={outros} alt="Outros" />,
  };
```