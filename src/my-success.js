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


class Mysuccess extends PolymerElement {
  static get template() {
    return html`

    <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <style include="shared-styles">
        :host {
          display: block;
          
          padding:10%;
 
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
  .bi bi-patch-check-fill{
    align:center;
  }
    
  }

      </style>

      <app-location route="{{route}}"></app-location>
      
  <div class="head">
  <center><h1><b>Thanks for  Consulting <b><h1></center>
  </div>
      
      <div class="card">
      <center>
      <p>Back with your problem solution with in a short time</p>
      <center>
      <i class="bi bi-patch-check-fill" color:blue></i>
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
        </svg>
        </center>

     

      </div>
     
    `;
  }
  


    

}    

window.customElements.define('my-success',Mysuccess);