import './lista-suspensa.estilos.css'

export function ListaSuspensa(){
    return(
        <select className='lista-suspensa-form'> 
            <option className='option' value="opcao1">Opção 1</option>
            <option value="opcao2">Opção 2</option>
        </select>
    )
}