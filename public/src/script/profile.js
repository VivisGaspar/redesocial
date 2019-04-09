function getInfoEditProfile(nameEdit, lastNameEdit, turma) {
    $("#new-profile").html(`
    <h1>Dados alterados com sucesso:</h1>
        <p>Nome: ${nameEdit}</p>
        <p>Sobrenome: ${lastNameEdit}</p>
        <p>Turma: ${turma}</p>`)


    if (nameEdit) {
        database.ref('users/' + USER_ID).update({
            name: nameEdit
        });
    }

    if (lastNameEdit) {
        database.ref('users/' + USER_ID).update({
            lastName: lastNameEdit
        });
    }

    if (turma) {
        database.ref('users/' + USER_ID).update({
            turma: turma
        });
    }

}
