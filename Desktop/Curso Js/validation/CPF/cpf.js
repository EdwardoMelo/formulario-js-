class Cpf {
    constructor(cpf_enviado){
        this.cpf_enviado = cpf_enviado.replace(/\D+/g, '');
    }

    valida_cpf (){
        if (typeof this.cpf_enviado ==='undefined') return `inválido`;
        if (this.cpf_enviado.length !== 11 ) return `incompleto`;

        const cpf_parcial = this.cpf_enviado.slice(0, -2);
        const digito1 = this.valida_digito(cpf_parcial);
        const digito2 = this.valida_digito(cpf_parcial+digito1);
        
        const cpf_completo = cpf_parcial +digito1 + digito2;
        return cpf_completo === this.cpf_enviado;
    }
    valida_digito(cpf_sem_digitos){
        let array_cpf = Array.from(cpf_sem_digitos);
        let regressivo = array_cpf.length + 1;
       let total = array_cpf.reduce(function(ac, valor){
            ac += Number(valor) * regressivo
            regressivo --;
            return ac;
       }, 0);   
       const digito = 11 - (total % 11);
       return digito > 9? '0' : String(digito);
    }

}
cpf_1 = new Cpf('05179508075');
console.log(cpf_1.valida_cpf());

