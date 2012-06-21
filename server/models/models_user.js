Meteor.publish("allusers", function() {
  return Users.find({}, {fields: {}});
});
