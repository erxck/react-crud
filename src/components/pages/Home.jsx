import React from "react";
import Main from "../template/Main";

export default function Home() {
  return (
    <Main
      icon="home"
      title="Início"
      subtitle="Projeto cadastro de usuário em React."
    >
      <h1 className="flex justify-center text-6xl font-bold mb-5">
        Bem-vindo!
      </h1>
      <hr />
      <p className="text-lg mt-4 text-gray-600">
        Sistema para exemplificar a construção de um cadastro desenvolvido em
        React!
      </p>
    </Main>
  );
}
