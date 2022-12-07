function mensagem(msg, tempo){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if (typeof msg !== 'string')
            reject('mensagem inválida');
            resolve(msg);
            return;
        }, tempo)
    });
};

function baixaPagina(){
    const emCache = false;

    if (emCache){
        return Promise.resolve('Página Baixada');
    }
    return mensagem('baixando Página', 3000);
};

baixaPagina().then(page=>{
    console.log(page);
}).catch(e => console.log(e));
