StellarSkeleton
======

Skeleton Application for Stellar and Meteor.
Current version: 0.0.1


How to use
----------

To use the app, you need to install Meteor:

    curl install.meteor.com | sh

Then you can clone the code onto your system:

    git clone https://github.com/manarius/StellarSkeleton.git

Add packages StellarSkeleton needs:

    //You need to add in Stellar which isn't an official package yet
    //My meteor package dir was here: /usr/lib/meteor/packages/  or  /usr/local/meteor/packages. You should just be able to run the following command there.
    //If however this offends you, you should be able to copy stellars contents into the lib/ folder and it work fine :)
    git clone git://github.com/jonathanKingston/stellar.git
    
    //In the app direcory now:
    meteor add stellar

    //i used stylus for my css (see clients/css/stellarskeleton.styl)
    meteor add stylus

Move to that directory and deploy to your own location:

    cd stellarskeleton
    meteor deploy [yourlocation].meteor.com
    
    or just
    cd stellarskeleton
    meteor
    
    to run meteor locally.

You can then visit your applications address and login with username: a and password: p
