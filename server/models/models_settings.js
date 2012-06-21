Meteor.publish("allsettings", function() {
  return Settings.find({}, {fields: {}});
});
