var template = require('../../../src/templates/notfound.html');
var Model = require('../models/notfound-model');
var NotFound = function NotFound(app) {
    this.model = new Model();
    this.view = function() {
        var view = app.handlebars.compile(template);
        view = view(this.model);
        return view;
    };
    this.title = function() {
        return this.model.title;
    };
    this.render = function() {
    };
    this.destroy = function() {
    };
    this.animateIn = function(complete) {
        app.controller.content.addClass('content-show');
        setTimeout(function() {
            complete();
            clearTimeout();
        }, 500);
    };
};


module.exports = NotFound;