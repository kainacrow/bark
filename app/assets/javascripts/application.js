// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
import 'stylesheets/application'
import JQuery from '../.gem/ruby/2.7.2/gems/jquery-rails-4.4.0/vendor/assets/javascripts/jquery';
window.$ = window.JQuery = JQuery;
//= require rails-ujs
//= require activestorage
//= require_tree .
//= require("jquery")
//= require 'jquery-ujs';
//= import 'owl.carousel/dist/assets/owl.carousel.css';
//= import 'owl.carousel';
//= require turbolinks



console.log('Welcome!');
