"use client"

import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [nome, alteraNome] = useState(null);
  
  function enviaFormulario(e){
    e.preventDefault();

    if(nome == "Cinradio"){
      alert("uai,estranho esse nome")
    }
  }

  return (
    <div>
      <h1>Aula de Publicação</h1>
      <p>Publicar um site na Vercel usando NextJS e no Github Pages com arquivos estáticos</p>
      <hr/>
      <p style={{backgroundColor:"yellow"}}>nova versão do meu site</p>
      <hr/>


    <Link href="Teste">Ir Para page Teste</Link>

    <form onSubmit={ (e)=> enviaFormulario(e) }>

      <label>
        Digite Seu Nome
        <input onChange={ (e)=> alteraNome(e.target.value) }/>
      </label>

      <button>Enviar</button>
    
    </form>

    </div>
  );
}
