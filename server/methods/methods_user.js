Meteor.methods({
  insertUser: insertUser,
  removeUser: removeUser,
  loginUser: loginUser,
  logoutUser: logoutUser
});


function createUser(vals) {
  vals.salt = Crypto.SHA256(Math.random().toString());
  vals.password = hashPassword(vals.password, vals.salt);
  vals.created = new Date();
  id = Users.insert(vals);
  return id;
}

function insertUser(args) {
  if(user = checkAuth(args.auth)) {
    //strip out crap
    user = {
      username: args.username,
      password: args.password,
      email: args.email,
      role: args.role
    };
    createUser(user);
    return true;
  }
  throw new Meteor.Error(401, 'You are not logged in');
  return false;
}



function loginUser(name, password) {
  console.log('login using '+name+' and '+password);
  user = Users.findOne({username: name});
  if(user) {
    if(user.password == hashPassword(password, user.salt)) {
      
      //Filter what is sent to the client, this can be then stored in a cookie safely
      thisUser = {username: user.username, role: user.role};
      
      thisUser.auth = Stellar.session.set(thisUser);//Set the session data
      
      return thisUser;
    }
  }
  console.log("login not correct");
  throw new Meteor.Error(401, 'Login not correct');
  return false;
}



function logoutUser(key) {
  return Stellar.session.delete(key); //Delete the session key
}

function changePassword(args) {
  if(user = checkAuth(args.auth)) {
    if(hashPassword(args.current_password, user.salt) == user.password) {
      val = Users.update({_id: user._id}, {$set: {password: hashPassword(args.password, user.salt)}});
      return true;
    }
  }
  throw new Meteor.Error(401, 'You are not logged in');
  return false;
}


function removeUser(args) {
  if(user = checkAuth(args.auth)) {
    Users.remove({_id: args.id});
    return true;
  }
  throw new Meteor.Error(401, 'You are not logged in');
  return false;
}

