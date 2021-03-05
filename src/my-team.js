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
//import './shared-styles.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import  './my-nav.js';
class Myteam extends PolymerElement {
  static get template() {
    return html`
    <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
    </app-location>

    <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
    </app-route>

      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px 20px;
          background-image: url(../images/all2.jpg);
          background-size: cover;
        	background-position: center;
	        background-attachment: fixed;
	        text-align:center;
	        color:#fff
          opacity: 0.5;

        }
        

          table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
          }
          
          td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
          }
          
          tr:nth-child(even) {
            background-color: powderblue;
          }
          h1{
              color: blue;
              text-align: center;
          }
          th,td {
                color: black;  
              }

              .head {
  
                width:100%;
                
               }
               table{
                width:50%;
                margin:0 auto;
                margin-top: 25px;
               margin-bottom:100px;
              }

              @media(max-width:600px){
                table{
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
      <my-nav></my-nav>
      <div class="head">
      <center><h1>Our Medical Expert Team<b><h1></center>
      </div>
      <div style="overflow-x:auto;">
<table>
  <tr>
    <th>Doctor Name</th>
    <th>Hospital</th>
    <th>Contact</th>
    <th>Specialist</th>
  </tr>
  <tr>
    <td>Prasad</td>
    <td>deccan Hospital</td>
    <td>040 2341 0640</td>
    <td>Genral Surgeon</td>
  </tr>
  <tr>
    <td>John Smith</td>
    <td>Care Hospitals</td>
    <td>040 6725 6666</td>
    <td>Dentist</td>
  </tr>
  <tr>
    <td>Jesicca</td>
    <td>Yashoda Hospitals </td>
    <td>040 4567 4567</td>
    <td>Dermatology</td>
  </tr>
  <tr>
    <td>vaisali</td>
    <td>Pranaam Hospital</td>
    <td>040 2304 2777</td>
    <td>Gynaecologist</td>
  </tr>
  <tr>
    <td>Smith</td>
    <td>KIMS Hospitals</td>
    <td>040 6750 5050</td>
    <td>ENT Specialist</td>
  </tr>
  <tr>
    <td>Amith</td>
    <td>Tulasi Hospitals</td>
    <td>040 4987 1613</td>
    <td>Pediatricians</td>
  </tr>
   <tr>
     <td>Anand</td>
    <td>Olive Hospitals</td>
    <td>9951108100</td>
    <td>General Physcian</td>
  </tr>
  <tr>
    <td>Nandhu</td>
    <td>Ernst Handel</td>
    <td>040 4410 8108</td>
    <td>Neurologist</td>
  </tr>
  <tr>
    <td>Rakesh</td>
    <td>deccan Hospital</td>
    <td>040 2341 0640</td>
    <td>Cardilogist</td>
  </tr>
  <tr>
    <td>Jessica</td>
    <td>Care Hospitals</td>
    <td>040 6725 6666</td>
    <td>Gyanacologists</td>

  </tr>
  <tr>
    <td>Harish</td>
    <td>Yashoda Hospitals</td>
    <td>040 4567 4567</td>
    <td>Physcian</td>
  </tr>
  <tr>
    <td>Srisha</td>
    <td>Pranaam Hospital</td>
    <td>040 2304 2777</td>
    <td>Gynacologist</td>
  </tr>
  <tr>
    <td>Sharan</td>
    <td>KIMS Hospitals</td>
    <td>040 6750 5050</td>
    <td>Kids Specialist</td>
  </tr>
  <tr>
    <td>Maneesha</td>
    <td>Tulasi Hospitals</td>
    <td>040 4987 1613</td>
    <td>Physcian</td>
  </tr>
  <tr>
    <td>Madhu</td>
    <td>deccan Hospital</td>
    <td>040 2341 0640</td>
    <td>Dentist</td>
  </tr>
  <tr>
    <td>Mohan</td>
    <td>Care Hospitals </td>
    <td>040 6725 6666</td>
    <td>Dermatology</td>
  </tr>
  <tr>
    <td>Amith</td>
    <td>Yashoda Hospitals</td>
    <td>040 4567 4567</td>
    <td>ENT Specialist</td>
  </tr>
  <tr>
    <td>Joe</td>
    <td>Pranaam Hospital</td>
    <td>040 2304 2777</td>
    <td>Dermatology</td>
  </tr>
  <tr>
    <td>Sandra</td>
    <td>KIMS Hospitals </td>
    <td>040 6750 5050</td>
    <td>Gynacologist</td>
  </tr>
</table>
</div>

        
    `;
  }


  
}


window.customElements.define('my-team', Myteam);

