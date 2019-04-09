function getInfoEditProfile(nameEdit, lastNameEdit, turma) {
    $("#new-profile").prepend(`
    <h3>Dados alterados com sucesso:</h3>
        <p>Nome: ${nameEdit}</p>
        <p>Sobrenome: ${lastNameEdit}</p>
        <p>Turma: ${turma}</p>
        <a href="#" class="btn btn-primary form-btn" id="home-btn-return">Finzalizar</a>`)
    return database.ref('users/' + USER_ID).update({
        name: nameEdit,
        lastName: lastNameEdit,
        turma: turma
    });

}
