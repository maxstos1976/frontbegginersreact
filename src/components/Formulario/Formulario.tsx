import React, { useState } from "react";
import "./formulario.css";

// Componente de formulário
const Formulario: React.FC = () => {
  // Estado para armazenar os valores dos campos
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroCpf, setErroCpf] = useState("");

  // Função para validar o email
  const validarEmail = (email: string): boolean => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regexEmail.test(email);
  };

  // Função para validar o CPF
  const validarCpf = (cpf: string): boolean => {
    const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return regexCpf.test(cpf);
  };

  // Função de envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let valido = true;

    // Validação do email
    if (!validarEmail(email)) {
      setErroEmail("Email inválido");
      valido = false;
    } else {
      setErroEmail("");
    }

    // Validação do CPF
    if (!validarCpf(cpf)) {
      setErroCpf("CPF inválido");
      valido = false;
    } else {
      setErroCpf("");
    }

    // Se tudo estiver válido, podemos fazer algo com os dados
    if (valido) {
      console.log("Formulário enviado com sucesso!");
      // Aqui você pode enviar os dados para o servidor ou manipular como necessário
    }
  };

  return (
    <>
      <div className="contact-us">
        <h1>Formulário de Cadastro</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="name">Nome Completo:</label>
          <input
            className="name"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="email">Email:</label>
          <input
            className="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {erroEmail && <span style={{ color: "red" }}>{erroEmail}</span>}
        </div>

        <div>
          <label className="cpf">CPF:</label>
          <input
            className="cpf"
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
          {erroCpf && <span style={{ color: "red" }}>{erroCpf}</span>}
        </div>
        <hr />
        <p>
          <button type="submit">Enviar</button>
        </p>
      </form>
    </>
  );
};

export default Formulario;
