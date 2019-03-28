$(document).ready(function () {
    getSignUpInfo();
    getSignInInfo();
    $('#post-btn').click(getPostInput);
});

function getSignUpInfo() {
    $('#btn-sign-up').click(function (event) {
        event.preventDefault()
        const email = $('#email').val();
        const password = $('#password').val();
        const name = $('#name').val();
        signUp(email, password, name);
    })
}

function getSignInInfo() {
    $('#btn-sign-in').click(function (event) {
        event.preventDefault()
        const emailSignIn = $('#email-sign-in').val();
        const passwordSignIn = $('#password-sign-in').val();
        signIn(emailSignIn, passwordSignIn);
    })
}

function getPostInput(event) {
    event.preventDefault();
    let postInput = $('#post-input').val();
    if (postInput) {
        addPosts(postInput);
        addPostsToDB(postInput);
    } else {
        alert("complete");
    }
    $("#post-input").val("");
}

function addPosts(postInput) {
    $('#post-list').append(`
<div>
    <select>
        <option value="editar">Editar</option>
        <option value="excluir">Excluir</option>
    <select/>
    <p>${postInput}</p>
</div>`
    );
}

function printPosts(text, key) {
    console.log(text);

    $("#post-list").append(`
<div>
    <select id='post-select'>
        <option value="editar">Editar</option>
        <option value="excluir" data-id=${key}>Excluir</option>
    <select/>
    <p>${text}</p>
</div>`
    );

    $(`#post-select`).change(function () {
        let value = $(this).val();
        if (value === "excluir") {
            if (confirm('quer excluir')) {
                console.log('user quer excluir');
            }
        }
    })
}
