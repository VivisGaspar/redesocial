$('#btn-go-profile').click(goProfile);
$('#btn-edit-profile').click(getInfoEditProfile);



function getInfoEditProfile() {
    let nameEdit = $('#name-profile').val()
    let lastNameEdit = $('#last-name-profile').val()
    let turma = $('#turma').val()
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

function goProfile() {
    let USER_ID = window.location.search.match(/\?userId=(.+)/)[1];
    console.log(USER_ID);
    window.location = 'profile.html?userId=' + USER_ID
}
