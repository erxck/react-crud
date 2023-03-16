import React, { useState, useEffect } from "react";
import Main from "../template/Main";
import axios from "axios";

const headerProps = {
  icon: "-user",
  title: "Usuários",
  subtitle:
    "Cadastro de usuários: Incluir, Listar, Alterar, Excluir e Pesquisar!",
};

const baseURL = "http://localhost:5174/users";

export default function UserCrud() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [search, setSearch] = useState("");
  const [searchParam] = useState(["name", "email"]);
  const [searchMessage, setSearchMessage] = useState(false);

  useEffect(() => {
    axios(baseURL).then(
      (response) => {
        setUsers(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const user = { name, email };
    user.name === "" || user.email === ""
      ? alert("Preencha todos os campos!")
      : save();
  }

  function save() {
    const user = { name, email, id };
    const method = user.id ? "put" : "post";
    const url = user.id ? `${baseURL}/${user.id}` : baseURL;
    axios[method](url, user).then((response) => {
      const list = getUpdatedList(response.data);
      setUsers(list);
    });
    clear();
  }

  function getUpdatedList(user, add = true) {
    const list = users.filter((u) => u.id !== user.id);
    if (add) list.unshift(user);
    return list;
  }

  function load(user) {
    setName(user.name);
    setEmail(user.email);
    setId(user.id);
  }

  function usersAndSearch(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(search.toLowerCase()) >
          -1
        );
      });
    });
  }

  function clear() {
    setName("");
    setEmail("");
    setId("");
  }

  function remove(user) {
    axios.delete(`${baseURL}/${user.id}`).then((response) => {
      const list = getUpdatedList(user, false);
      setUsers(list);
    });
  }

  function form() {
    return (
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="block md:flex gap-8 w-full">
          <div className="mb-8 w-full">
            <label
              className="block text-base font-bold mb-2"
              htmlFor="name"
              value={id}
            >
              Nome
            </label>
            <input
              className="appearance-none border border-gray-400 rounded w-full py-3 px-3 text-base text-gray-700 leading-tight focus:outline-none focus:shadow-none focus:border-emerald-500 focus:ring-emerald-500 focus:ring-1"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite o nome..."
            />
          </div>
          <div className="mb-6 w-full">
            <label className="block text-base font-bold mb-2" htmlFor="email">
              E-mail
            </label>
            <input
              className="peer appearance-none border border-gray-400 rounded w-full py-3 px-3 text-base text-gray-700 leading-tight focus:outline-none focus:shadow-none focus:border-emerald-500 focus:ring-emerald-500 focus:ring-1"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite o e-mail..."
            />
            {email.length > 0 && (
              <p className="mt-2 invisible peer-invalid:visible text-sm text-red-500">
                Por favor, forneça um endereço de e-mail válido.
              </p>
            )}
          </div>
        </div>
        <hr />
        <div className="flex justify-end gap-3 mt-6">
          <button
            className="bg-emerald-500 hover:bg-emerald-600 duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-none"
            type="submit"
          >
            Salvar
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-none"
            type="button"
            onClick={clear}
          >
            Cancelar
          </button>
        </div>
      </form>
    );
  }

  function tableUsers() {
    return (
      <>
        <div className="flex justify-center flex-col gap-2 mt-6 w-fit">
          <label className="relative block mt-1" htmlFor="search">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-emerald-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 pl-11 placeholder:font-normal border border-gray-400 rounded w-fit py-3 px-3 text-base text-gray-700 leading-tight focus:outline-none focus:shadow-none focus:border-emerald-500 focus:ring-emerald-500 focus:ring-1"
              type="text"
              name="search"
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onMouseDown={() => setSearchMessage(true)}
              placeholder="Pesquisar..."
            />
          </label>
          {searchMessage && (
            <p className="text-sm text-gray-500">
              Você pode pesquisar por nome ou e-mail.
            </p>
          )}
        </div>

        <table className="table-auto lg:table-fixed mt-6 w-full rounded border border-separate border-spacing-x-5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th className="py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {usersAndSearch(users).map((user) => {
              return (
                <tr className="text-center" key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="group bg-emerald-500 hover:bg-emerald-600 p-3 m-2 rounded duration-300"
                      onClick={() => load(user)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 p-3 rounded duration-300"
                      onClick={() => remove(user)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }

  return (
    <Main {...headerProps}>
      {form()}
      {tableUsers()}
    </Main>
  );
}
