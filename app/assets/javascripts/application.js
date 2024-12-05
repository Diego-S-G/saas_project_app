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
//= require rails-ujs
//= require jquery
//= require activestorage
//= require turbolinks
//= require twitter/bootstrap
//= require bootstrap-datepicker
//= require_tree .

$(document).on('turbolinks:load', function() {
    $('.datepicker').datepicker({
        autoclose: true, // Fecha automaticamente após selecionar a data
        format: 'yyyy/mm/dd', // Formato de data
        todayHighlight: true // Destacar a data atual
    });
});

$(document).on('turbolinks:before-cache', function() {
    $('.datepicker').datepicker('destroy');
});
