function slugifyInput(e) {
  //populate the change-slug input with the slugified title
  $('input.change-slug').val(slugify($(e.target).val()));
}

function slugify(slug) {
  //first replace spaces with underscores and lowercase the slug
   slug = slug.replace(/\s/g, '_').toLowerCase();
   
  //replace äüö with ae ue and oe for german titles
  //later add support for more/other special chars defined in the admin interface 
  //removing the need of adding them all here and always test against those that we need to test against
  tr = {"\u00e4":"ae", "\u00fc":"ue", "\u00f6":"oe", "\u00df":"ss" }
  slug = slug.replace(/[\u00e4|\u00fc|\u00f6|\u00df]/g, function($0) { return tr[$0] });
  
  //remove all remaining specialchars, i dont like multiple underscores, so replace with nothing?
  slug = slug.replace(/[^a-z0-9_]+/g, '');
  
  return slug;
}
