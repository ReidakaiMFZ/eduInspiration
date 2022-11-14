async function getCep(value:string | number){
    interface cepInterface{
        cep: string;
        logradouro: string;
        localidade: string;
    }
    let cep:cepInterface = {
        cep: "",
        logradouro: "",
        localidade: "",
    }
    if (value.toString().length == 8){
        fetch(`https://viacep.com.br/ws/${value}/json/`)
        .then(res => res.json())
        .then(data =>{
            cep.cep = data.cep;
            cep.logradouro = data.logradouro;
            cep.localidade = data.localidade;
        })
    }
    return cep;
}
export { getCep };
