function hashPassword(password, salt) {
  return Crypto.SHA256(salt + '-' + password);
}
function checkAuth(auth) {
  sessionData = Stellar.session.get(auth); //Get session data
  if(sessionData) {
    return Users.findOne({username: sessionData.data.username}); //Make sure there is a user with this id
  } else {
    throw new Meteor.Error(401, 'You are not logged in');
    return false;
  }
}  

