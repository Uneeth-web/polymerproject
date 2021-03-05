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
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/paper-radio-group/paper-radio-group.js';
import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js'
import '@polymer/iron-input/iron-input.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';

class Myregister extends PolymerElement {
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
          padding: 10px;
        }
        .green{
          align:center;
          color:black;
          background-color:blue;
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
        
         @media(max-width:480px){
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
          }
        }
           
          

      </style>
      <app-location route="{{route}}"></app-location>
      <div class="head">
      <center><h1><b>Welcome To MediCare Health Insurance<b><h1></center>
      </div>
      <div class="card">
        <div class="circle">Register</div>
        <paper-input  always-float-label label="FirstName" required auto-validate error-message="Provide valid details!" char-counter maxlength="10" pattern="[a-zA-Z]*"></paper-input>
        <paper-input  always-float-label label="LastName" required auto-validate error-message="Provide valid details!" char-counter maxlength="10" pattern="[a-zA-Z]*"></paper-input>
        <paper-input  always-float-label label="Email"required auto-validate error-message="Enter correct Email Id!" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" ></paper-input>
        <p>Gender</p>  
      <paper-radio-group selected="small">
      <paper-radio-button name="medium">Male</paper-radio-button>
      <paper-radio-button name="large">Female</paper-radio-button>
    </paper-radio-group>

    <p>Date of Birth:
    <iron-input><input placeholder="type=date" type="date"></iron-input></p>

    <p>Policy Terms</p>  
    <paper-dropdown-menu label="years">
    <paper-listbox slot="dropdown-content" selected="1">
      <paper-item>5  years</paper-item>
      <paper-item>10 years</paper-item>
      <paper-item>15 years</paper-item>
      <paper-item>20 years</paper-item>
    </paper-listbox>
  </paper-dropdown-menu>

  <p>Tobacco Habit</p>  
      <paper-radio-group selected="small">
      <paper-radio-button name="medium">yes</paper-radio-button>
      <paper-radio-button name="large">no</paper-radio-button>
    </paper-radio-group>

  
        <paper-input type="password" always-float-label label="password" required auto-validate error-message="Provide valid details!" char-counter maxlength="10" pattern="[a-zA-Z]*"></paper-input>
       <br>
        <paper-button toggles raised class="green" on-click="handleClick">Register</paper-button>
        <p>Please fill the above details your response will be submitted.</p>

        </div>
  
        
    `;
  }
   
  login(){
    window.alert("event clicked");
  } 
  
handleClick(){
  
  this.set('route.path','/login')
  
  }
}

window.customElements.define('my-register', Myregister);
