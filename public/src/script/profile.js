function getInfoEditProfile(nameEdit, lastNameEdit, turma){
    $("#new-profile").prepend(`
    <h1>Dados alterados com sucesso:</h1>
        <p>Nome: ${nameEdit}</p>
        <p>Sobrenome: ${lastNameEdit}</p>
        <p>Turma: ${turma}</p>`)
    return database.ref('users/' + USER_ID).update({
        name: nameEdit,
        lastName: lastNameEdit,
        turma: turma
    });
}