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
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/paper-radio-group/paper-radio-group.js';
import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js'
import '@polymer/iron-input/iron-input.js';
import  './my-nav.js';
class Plan extends PolymerElement {
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
          padding:10%;
          
          
        }
       

      
 .head h2{
  color:blue;
  text-align:center;


 }
 .head {
  
  width:100%;
  
 }
 .overflow-x:auto{
   width:50%;
   margin:0 auto;
 }
 
  h2{
    text-align:center;
  }
    
  }


.thead{
  background:lightblue;
}
data {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin:50px;
  margin-left:100px;
}

#data td, #customers th {
border: 1px solid #ddd;
padding: 8px;
}

#customers tr:nth-child(even){
background-color: #f2f2f2;
}

#data tr:hover {
background-color: #ddd;
      }

#data th {
padding-top: 12px;
padding-bottom: 12px;
text-align: left;
color: white;
}

      
      </style>
    
      <link rel = "stylesheet" 
      href = "https://storage.googleapis.com/code.getmdl.io/1.0.6/material.indigo-pink.min.css">
   <link rel = "stylesheet" 
      href = "https://fonts.googleapis.com/icon?family=Material+Icons">

    <div class="head">
    <h2>Welcome You Have Enrolled Your Account Successfully </h2>
    <center>
    <i class="bi bi-patch-check-fill" color:blue></i>
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
        </svg>
        
    </div>
    <center>
    <div style="overflow-x:auto;">

    <center>
    <table id="data">
    <thead class="thead"><!---use to group header content in a html table-->
       <tr>
         <!---The scope attribute specifies whether a header cell is a header for a column, row, or group of columns or rows.   ---->
         <th scope="col">username</th>
         <th scope="col">mobile</th>
         <th scope="col">aadhar</th>
         <th scope="col">city</th>
         <th scope="col">policy plan</th>
         <th scope="col">policy term</th>
         <th scope="col">members</th>
       </tr>
     </thead>
     
           <tbody>	
   <template is="dom-repeat" items="{{userList}}">
           <tr>
                     <td>{{item.username}}</td>
                     <td>{{item.mobile}}</td>                     
                     <td>{{item.aadhar}}</td>
                     <td>{{item.city}}</td>
                     <td>{{item.policyPlan}}</td>
                     <td>{{item.policyTerm}}</td>
                     <td>{{item.members}}</td>
           </tr>
    
   </template>

          
</tbody>
</table>
</center>
</div>
 `;
}

static get properties() {
 return {
    //registerData is property which is taking userList array values from registration.js
   insuranceData:{
     type:Object,
     value:{},
     notify:true
   },
   userList:{
     type:Array,
     value:[],
     notify:true
   }
 };
}
    
}



window.customElements.define('my-plan', Plan);