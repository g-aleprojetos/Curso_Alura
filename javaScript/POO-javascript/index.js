import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 12378945601);
gerente.cadastrarSenha("123");

const estaLogadodiretor = SistemaAutenticacao.login(diretor, "123456");
const estaLogadogerente = SistemaAutenticacao.login(gerente, "123");

console.log(estaLogadodiretor);
console.log(estaLogadogerente);