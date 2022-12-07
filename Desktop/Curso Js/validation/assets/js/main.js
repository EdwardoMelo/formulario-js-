class Valida_Formulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e =>{
            this.handleSubmit(e);
        });
    }
    handleSubmit(e){
        e.preventDefault();
        console.log('Formulario não enviado');
       const campos_validos = this.checkFields();
    };
    checkFields(){
        let valid = true;
        for (let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        };

        for (let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerHTML;
            if (!campo.value){
                this.create_error(campo, `Campo "${label}" não pode ser vazio`);
                valid = false;
            }
            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false;
            }
            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;
            }
        }
    }
    validaUsuario(campo){
        const usuario = campo.value;
        let valid = false;
        if(usuario.length < 3 || usuario.length > 12){
            this.create_error(campo, `Usuário deve ter entre 3 e 12 caracteres`)
            valid = false;
        }
        if(!usuario.match(/[a-zA-Z0-9]+/g)){
            this.create_error(campo, `Usuario precisa conter apenas letras e/ ou numeros.`);
            valid = false;
        }
    }
    validaCPF(campo){
        const cpf = new Cpf(campo.value);

        if (!cpf.valida_cpf()){
            this.create_error(campo, "Cpf inválido.");
            return false;
        }
        return true;
    };
    create_error(campo, msg){
        const div = document.createElement('div'); 
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);   
    };
};

valida = new Valida_Formulario(); 