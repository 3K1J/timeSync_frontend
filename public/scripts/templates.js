$(document).ready(() => {

  Handlebars.getTemplate = function(name) {

  	if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {

  		$.ajax({
  			url : './templates/' + name + '.hbs',
  			success : function(data) {
  				// console.log("success compiling template");
  				if (Handlebars.templates === undefined) {
  					Handlebars.templates = {};
  				}
  			Handlebars.templates[name] = Handlebars.compile(data);
  			},
  		async : false
  		});
  	}
  	return Handlebars.templates[name];
  };



  var header = Handlebars.getTemplate("header");
  var footer = Handlebars.getTemplate("footer");

  $("#header").append(header);
  $("#footer").append(footer);




});
