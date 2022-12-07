function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if (typeof msg !== 'string'){
            reject('mensagem inválida');
            return;
            }
            resolve(msg.toUpperCase() + '  Passei na Promse');
            return;
        }, tempo)
    });
};

async function executa(){
    try{
    const fase1 = await esperaAi('Fase 1', 3000);
    console.log(fase1)

    const fase2 = await esperaAi('Fase 2', 1000);
    console.log(fase2)

    const fase3 = await esperaAi(1, 2000);
    console.log(fase3)


    console.log('Terminamos na fase: ', fase3);
    }catch(e){
        console.log(e);
    }
};
executa();

