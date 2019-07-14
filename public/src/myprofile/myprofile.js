function getInfoEditProfile(nameEdit, lastNameEdit, userClass) {
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
  if (userClass) {
    database.ref('users/' + USER_ID).update({
      userClass: userClass
    });
  }
}