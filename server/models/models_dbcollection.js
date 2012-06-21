Meteor.publish("alldbcollections", function() {
  return DbCollection.find();
});

