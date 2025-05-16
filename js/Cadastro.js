document.getElementById("btnCadastrar").addEventListener("Click", () =>{
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    
    if(nome === "" || email === "" || senha === ""){
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if(senha.length < 6){
        alert ("A senha deve ter no mínimo 6 caracteres e máximo 50")
        return;
    }

    const usuario = {
        nome,
        email,
        senha
    };

    localStorage.setItem("usuario_cadastrado", JSON.stringify(usuario));
    alert("Cadastro realizado com sucesso!");
    window.location.href = "PaginaInicial.html";
});