export default function Register(){
    return(
        <div>
            <form className="bg-azul">
                <select>
                    <option value="">estudante</option>
                    <option value="">escola</option>
                    <option value="">empresa</option>
                    <option value="">professor</option>
                </select>
                <h1>Cadastro</h1>
                <label htmlFor="">
                    <span>E-mail</span>
                    <input type="text" />
                </label>
                <label htmlFor="">
                    <span>senha</span>
                    <input type="password" />
                </label>
                <label htmlFor="">
                    <span>confirmar senha</span>
                    <input type="password" />
                </label>
                <button type="submit">Cadastrar</button>
                <label htmlFor=""><a href="">esqueceu a senha?</a></label>
                
            </form>
            <button><a href="">login</a></button>
        </div>
    )
}