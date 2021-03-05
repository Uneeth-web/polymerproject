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
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import  './my-nav.js';

class Myabout extends PolymerElement {
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
          
          padding-top:10%;

   
        }

        .about-section {
          padding: 50px;
          text-align: center;
          background-color: #474e5d;
          color: white;
          width:100%;

          
        }
        
        .column {
           margin:auto;
          width: 33.3%;
          margin-bottom: 16px;
          padding: 0 0px;
        }
        
        .card {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          width:70%;
          margin:0 auto;
        }
        
        .container::after, .row::after {
          content: "";
          clear: both;
          display: table;
        }
        
        .title {
          color: grey;
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
          .about-section{
            text-align:center;
            color:white;
            text-align:left;
            margin:0 auto;

            
          }
            
          }

      </style>
    
      <app-location route="{{route}}"></app-location>
      
      <div class="about-section">
 <h1>About Us</h1>
  <p>The sole purpose of  insurance to 
          financial support at the time of medical emergency.</p>
  <p>It is important to read below Health insurance claim process</p>
</div>

<h2 style="text-align:center"> How it Works</h2>
<div class="row">
  <div class="column">
    <div class="card">
    <img src="../images/all6.jpg" style="width:100%">
      <div class="container">
        <h1>Claim & Intimation</h1>
        <p>Register in the medicare health insurance and fill up the basic details.</p>
        <h2>Approval/<br>Rejection</h2>
        <p>Once hospital approval of details we will update the status</p>
        <h3>Hospitalisation</h3>
        <p>Hospitialisation is done on the basis of network hospitals</p>
         <h2>Claim Settlement</h2>
        <p>At the time of discharge we settle the claim directly with hospital</p>
      </div>
    </div>
  </div>
  </div>

      
     
    `;
  }
  

}    

window.customElements.define('my-about',Myabout);
