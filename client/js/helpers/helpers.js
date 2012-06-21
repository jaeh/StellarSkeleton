Handlebars.registerHelper('user', function() {
  var user = Session.get('user');
  return user;
});

Handlebars.registerHelper('is_admin', function() {
  var user = Session.get('user');
  if(user && user.role == 'admin') {
    return true;
  }
  
  throw new Meteor.Error(401, 'You are not logged in');
  return false;
});
