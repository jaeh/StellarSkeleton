Template.login.events = {
  'click input[type="submit"], submit #login-form' : submitLogin
};

function submitLogin(e) {
  if(e.preventDefault) {
    e.preventDefault();
  }
  console.log("login called");
  Meteor.call('loginUser', $('#login-username').val(), $('#login-password').val(), window.location.pathname, loginCallback);
  return false;
}

function loginCallback(error, returnVal) {
  if(!error) {
    console.log("login successful");
    Stellar.session.updateKey(returnVal.auth);
    Session.set('user', returnVal);
    Stellar.redirect('/');
  
  } else {
    return standardHandler(error, returnVal);
  }
}
  
