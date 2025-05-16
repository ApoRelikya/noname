const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", () => {
    const login = document.querySelector("login").value.trim()
    const senha = document.querySelector("senha").value.trim()

    if (login === "" || senha === ""){
        alert("Preencha todos os campos.")
        return;
    }

    const usuario_salvo = JSON.parse(localStorage.getItem("usuario_cadastrado"));

    if(!usuario_salvo){
        alert("Nenhum usuário cadastrado.");
        return;
    }

    if (login === usuario_salvo.email && senha === usuario_salvo.senha){
        alert(`Bem-vindo, ${usuario_salvo}!`);
    }
    else{
        alert("Email ou senha incorretos.")
    }
});