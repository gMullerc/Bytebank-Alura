import { Cliente } from "./Cliente.js";
import { Gerente } from "./funcionarios/gerente.js";
import { Diretor } from "./funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Guilherme", 10000, 12345678900);
diretor.cadastraSenha("123456");
const gerente = new Gerente("Victor", 5000, 12345678901);
gerente.cadastraSenha("123");

const cliente = new Cliente("Lais", 789456123, "456");

const diretorEstaLogado = SistemaAutenticacao.login(gerente, "123");
const gerenteEstaLogado = SistemaAutenticacao.login(diretor, "123456");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);

















