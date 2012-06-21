Template.logo.site_name = function () {
  setting = Settings.findOne({key: 'site_name'});
  if ( setting && setting.value ) {
    return setting.value;
  }
  return false;
}
