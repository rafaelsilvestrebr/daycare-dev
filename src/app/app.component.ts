import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor() {
    // Initialize collapse button
    interface JQuery {
      sideNav();
    }
    (<any>$('.button-collapse')).sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is opened
      onClose: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is closed
    }
  );


    // (<any>$("div.printArea")).printArea();
    // $('.button-collapse').sideNav();
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
     // $('.collapsible').collapsible();
  }
}
