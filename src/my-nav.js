/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-route.js';
class MyNav extends PolymerElement {
  static get template() {
    return html`

    <!-- app-location is an element that provides
   synchronization between the browser location bar and the state of an app.it bind app url-->
   
    <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
    </app-location>

    <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
    </app-route>

    <style include="shared-styles">
    :host {
      display: block;
   }
/*-----------------------------------------------------------------
Nav  
---------------------------------------------------------*/
.home{
overflow:hidden;
}
.topnav  {
  overflow: hidden;
  background-color:#4285f4;
  text-align:right;
}


.topnav . active {
 float: left;
display: block;
color: #4285f4;
text-align: center;
padding: 21px 16px;
text-decoration: none;
font-size: 17px;
}

.topnav . active:hover {
background-color:blue;
color: black;
}

.topnav .active {
background-color:#4285f4;
color: white;
}

.topnav .icon {
display: none;
}
/**<!-- navigation bar hidden-->

@media screen and (max-width: 600px) {
.topnav .active:not(:first-child) {display: none;}
.topnav .active.icon {
float: right;
display: block;
}
}*/

@media screen and (max-width: 600px) {
.topnav.responsive {position: relative;}
.topnav.responsive .icon {
position: absolute;
right: 0;
top: 0;
}
.topnav.responsive a {
float: none;
display: block;
text-align: left;
}
.home{
overflow:hidden;
}
}

</style>


    
    <div class="topnav" >
    <paper-button on-click="home" class="active" >Home</paper-button>
    <paper-button on-click="about" class="active" >About</paper-button>
    <paper-button on-click="team" class="active" >Team</paper-button>
    <paper-button on-click="network" class="active" >Network</paper-button>
    <paper-button on-click="services" class="active" >Services</paper-button>
    <paper-button on-click="contact" class="active" >Contact</paper-button>
    <paper-button on-click="logout" class="active" >Logout</paper-button>
    </div>
    `;
  }
    
  home(){
    this.set('route.path','/home');
   }

  logout(){
    this.set('route.path','/login');
    location.reload();

   }
  
    
    network(){
  
      this.set('route.path','/network');
   }
   

contact(){
  this.set('route.path','/contact');
}
team(){
  this.set('route.path','/team');
}

about(){
  this.set('route.path','/about');
}

services(){
  this.set('route.path','/services');
}



}



window.customElements.define('my-nav', MyNav);


