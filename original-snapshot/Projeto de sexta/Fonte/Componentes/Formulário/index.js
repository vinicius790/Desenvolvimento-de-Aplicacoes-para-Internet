import './Formulario.css'
import CampoTexto from '../campoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'


const Formulario = () => {
    const times=[
        'síndico',
        'condômino'
    ]
    return (
        <section className="formulario">
            <form>
     <h2>Preencha os dados para criar seu cadastro</h2>
      <CampoTexto label ="Nome" placeholder="Digite seu nome"/>
      <CampoTexto label ="E-mail" placeholder="Digite seu e-mail"/>
      <CampoTexto label ="Senha" placeholder="Digite sua senha"/>
      <CampoTexto label ="Telefone" placeholder ="Digite seu telefone"/>

      <ListaSuspensa label ="Tipo" itens={times}/>
      <Botao texto="Criar Cadastro"/>
            </form>
        </section>

    )
}
export default Formulario;