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
import './shared-styles.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@material/mwc-icon';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';

class Login extends PolymerElement {
  static get template() {

  return html`
  <style include="shared-styles">
    :host {
      display: block;
  
      padding:10%;

    }
    .green{
       align:center;
       color:black;
       background-color:#4285f4;
      }
 
 .head h1{
  color:blue;
  text-align:center;


 }
 .head {
  
  width:100%;
  
 }
 .card{
   width:50%;
   margin:0 auto;
 }
 @media(max-width:600px){
  .card{
    margin-top: 25px;
    margin-bottom:100px;
    padding: 10px;
    color: #757575;
    width:100%;
    border-radius: 5px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);

   }
  .head{
    text-align:center;
    color:blue;
    margin:0 auto;
    
  }
    
  }


  </style>
  <!-- app-location is an element that provides
   synchronization between the browser location bar and the state of an app.it bind app url-->

   
<app-location route="{{route}}"></app-location>
<!-- html content for login page-->

  <div class="head">
  <center><h1><b>Welcome To MediCare Health Insurance<b><h1></center>
  </div>
  <div class="card">
    <div class="circle">Login</div>
    
    <paper-input id="email" always-float-label label="User Email" ></paper-input>
    <paper-input id="password" type="password" always-float-label label="Password"></paper-input>
    <paper-button toggles raised class="green" on-click="handleClick">LOGIN</paper-button>
    <paper-button toggles raised class="green" on-click="handleClick1">SignUp</paper-button>

 
  </div>
  

    
    
`;
}
login(){
  window.alert("event clicked");
} 

handleClick(){
  if(this.$.email.value=="uneeth@gmail.com" && this.$.password.value=="uneeth123"){
    alert("Login Success.!")
   this.set('route.path','/home');
}
else{
  alert("provide valid Credentials")
}
}
handleClick1(){
  this.set('route.path','/register')
  
  }

  
}


window.customElements.define('log-in', Login);
