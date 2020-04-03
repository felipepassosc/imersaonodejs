/*
    Obter usuario
    Obter telefone a patir do id
     Obter endereço a patir do id
*/

function obterUsuario(callback) {
    setTimeout(function (){
        return callback(null, {
            id: 1,
            nome:'Felipe',
            dataNascimento : new Date()
        })
    }, 1000)
}

function obterTelefone(id, callback){
    setTimeout(() => {
        return callback (null, {
            telefone: "9939383838",
            ddd: 11
        })
    }, 2000)
}

function obterEndereco(id){

}

function resolverUsuario(erro, usuario) {
    if (error) {
        console.error('Deuuuu ruim')
        return
    }
}

obterUsuario(resolverUsuario)
// const telefone = obterTelefone(usuario.id)
