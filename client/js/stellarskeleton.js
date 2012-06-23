//This is here to speed the site name being shown, sorry kids
Handlebars.registerHelper('setting', function(options) {
  //TODO: escaping the key here could cause issues
  var key = options.fn(this);
  var setting = Settings.findOne({key: key.toString()});
  
  if(setting) {
    return Handlebars._escape(setting.value);
  }
  return '';
});

StellarSkeleton = {};

StellarSkeleton.settingsLoaded = function() {
  Stellar.log('settings loaded');
  timeLoad = new Date().getTime();
  StellarSkeleton.load.madewith();
}

Meteor.subscribe("allsettings", StellarSkeleton.settingsLoaded);
Meteor.subscribe("allusers");
Meteor.subscribe("alldbcollections");

StellarSkeleton.alert = function(type, message) {
  Stellar.log(message);
  className = 'alert';
  if(type == 'warning' || type == 'info' || type == 'error') {
    className += ' alert-'+type
  }
  if(type == 'warning') {
    sarcasm = 'You better check yourself; before you wreck yourself';
    message = sarcasm+': '+message;
  }
  alert = $('<div class="'+className+'">  <button class="close" data-dismiss="alert">×</button>  '+message+'</div>');
  $('.content').prepend(alert);
}

StellarSkeleton.load = {};

//TODO this is a hack as it shouldn't be here, I need to get Madewith allowing me to change the path
StellarSkeleton.load.madewith = function() {
  madewith = {};
  madewith.value = 'stellarskeleton.meteor.com';
  if(madewith && madewith.value != '') {
    var hostname = madewith.value;
    var match = hostname.match(/(.*)\.meteor.com$/);
    var shortname = match ? match[1] : hostname; // connect to madewith and subscribe to my app's record
    var server = Meteor.connect("http://madewith.meteor.com/sockjs");
    var sub = server.subscribe("myApp", hostname);

    // minimongo collection to hold my singleton app record.
    var apps = new Meteor.Collection('madewith_apps', server);
    if(apps){
      server.methods({
        vote: function (hostname) {
          apps.update({name: hostname}, {$inc: {vote_count: 1}});
        }
      });
  
      Template.madewith.vote_count = function() {
        var app = apps.findOne();
        return app ? app.vote_count : '???';
      };
  
      Template.madewith.shortname = function () {
        return madewith.value;
      };
  
      Template.madewith.events = {
        'click .madewith_upvote': function(event) {
          var app = apps.findOne();
          if (app) {
            server.call('vote', hostname);
            // stop these so you don't click through the link to go to the
            // app.
          }
          
          event.stopPropagation();
          event.preventDefault();
        }
      };
  
      $('body').append(Meteor.ui.render(function() { return Template.madewith();}));
    }
  }
}
