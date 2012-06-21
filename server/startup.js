Meteor.startup(function () {
    
  setSetting('site_name', 'Stellar Skeleton', 'A skeleton application for the Stellar MVC for Meteor for Nodejs');
    
  // code to run on server at startup
  if(Users.find().count() === 0) {
      
    console.log('No users found, populating db with default values:');
    
    console.log('Adding in users');
    var userId1 = createUser({username: 'a', password: 'p', name: 'admin', role: 'admin'});
    console.log("added "+Users.find().count()+" user");
    
    console.log('logging in user');
    var user = loginUser('a', 'p');
    console.log('user logged in. username =a');
    var key = user.auth;
    
    console.log('adding db testvalues');
    var itemId1 = insertDbCollection({name: 'item 1', auth: key});
    var itemId1 = insertDbCollection({name: 'item 2', auth: key});
    var itemId1 = insertDbCollection({name: 'item 3', auth: key});
    var itemId1 = insertDbCollection({name: 'item 4', auth: key});
    var itemId1 = insertDbCollection({name: 'item 5', auth: key});
    console.log("added "+DbCollection.find().count()+" dbcollection items");
    
    console.log('logging out user');
    logoutUser(key);
    console.log('Setup done, enjoy :)');
    console.log("to log in use username: a and password: p");
  }
});
