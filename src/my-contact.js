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
import '@silverlinkz/sl-gallery';
import '@silverlinkz/sl-gallery';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@material/mwc-icon';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import  './my-nav.js';
class MyContact extends PolymerElement {
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

         
      
          background-image: url(../images/all4.jpg);
          
        }
        .card {
          margin-top: 50px;
          margin-left:500px;
          padding: 16px;
          color: #757575;
          width:500px;
          border-radius: 5px;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }
        
       
        .green{
          align:center;
          color:black;
          background-color:blue;
        }

        
 .head h1{
  color:black;
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
    color:black;
    margin:0 auto;
    
  }
    
  }
      
      </style>
    
      <my-nav></my-nav>
      <div class="head">
      <center><h1><b>MediCare Health Insurance Resolves all your Queries<b><h1></center>
      </div>

      <div class="card">
        <div class="circle">Contact</div>
        <paper-input  always-float-label label="UserName" required auto-validate error-message="Provide valid details!"  pattern="[a-zA-Z]*"></paper-input>
        <paper-input  always-float-label label="Mobile No" required auto-validate error-message="Provide valid details!"  pattern="[a-zA-Z]*"></paper-input>
        <paper-input  always-float-label label="Concern Area  " required auto-validate error-message="Provide valid details!"  pattern="[a-zA-Z]*"></paper-input>
        <br>
        <paper-button toggles raised class="green" on-click="handleClick">submit</paper-button>

      </div>


      <sl-gallery>
      <sl-gallery-image
          src="../images/all0.jpg"
          small="../images/all0.jpg"
          title="While nothing
          is more uncertain
          than a single life,
          nothing is more certain
          than the average duration
          of a thousand lives.">
      </sl-gallery-image>
      <sl-gallery-image
          src="../images/all1.jpg"
          small="../images/all1.jpg"
          title="we care for your family">
      </sl-gallery-image>
      <sl-gallery-image
          src="../images/all2.jpg"
          small="../images/all2.jpg"
          title="love health"
          caption="Be safe with Health insurance.">
      </sl-gallery-image>
      <sl-gallery-image
          src="../images/all4.jpg"
          small="../images/all4.jpg"
          title="Insurance"
          caption="
          “Peace of mind.” “Who we are.” “If your futureself could talk to you – what would it say?” “Better Benefits at Work.”">
      </sl-gallery-image>
      </sl-gallery>


    `;
  }

  
  
  handleClick(){
    this.set('route.path','/success')
    
    }
    
}



window.customElements.define('my-contact', MyContact);