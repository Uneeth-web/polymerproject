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

class Mynetwork extends PolymerElement {
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

          padding: 10px 20px;
          background-image: url(../images/all2.jpg);
          background-size: cover;
        	background-position: center;
	        background-attachment: fixed;
	        text-align:center;
	        color:#fff
          opacity: 0.5;

        }
        .card {
            margin: 24px;
            padding: 16px;

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
                {
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
      <center><h1>Health
      Insurance
      Network Hospitals<b><h1></center>
      </div>

     
      <div style="overflow-x:auto;">


<table>
  <tr>
    <th>Hospital Name</th>
    <th>Contact</th>
    <th>Address</th>
  </tr>
  <tr>
    <td>deccan Hospital</td>
    <td>040 2341 0640</td>
    <td>06-6-903 / A and B, Raj Bhavan Road, Somajiguda, Hyderabad - 500082</td>
  </tr>
  <tr>
    <td>Care Hospitals (Banjara Hills)</td>
    <td>040 6725 6666</td>
    <td>Door NO 6-3-248 / 1/A, Road No 1, Opposite Taj Banjara Hills, Hyderabad - 500034</td>
  </tr>
  <tr>
    <td>Yashoda Hospitals (Malakpet)</td>
    <td>040 4567 4567</td>
    <td>Nalgonda X Roads Malakpet, Hyderabad - 500036</td>
  </tr>
  <tr>
    <td>Pranaam Hospital</td>
    <td>040 2304 2777</td>
    <td>1-56/6/40 and 41, Mythri Nagar, Miyapur Madinaguda, Hyderabad - 500050</td>
  </tr>
  <tr>
    <td>KIMS Hospitals (Kondapur)</td>
    <td>040 6750 5050</td>
    <td>1-112 / 86, Survey No 5 / EE, Kondapur Village, Serilingampally Mandal Kondapur, Hyderabad - 500084</td>
  </tr>
  <tr>
    <td>Tulasi Hospitals</td>
    <td>040 4987 1613</td>
    <td>Shop A-12, Electronic Complex, Ecil X Roads, Beside State Bank Of Hyderabad Kushaiguda, Hyderabad - 500062</td>
  </tr>
   <tr>
    <td>Olive Hospitals</td>
    <td>9951108100</td>
    <td>12-2-718 / 3, 4, 5, X Road, Nanal Nagar Mehdipatnam, Hyderabad - 500028</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>040 4410 8108</td>
    <td>1-2-4 /13 B, Nizampet Road, Hydernagar Kukatpally, Hyderabad - 500072</td>
  </tr>
  <tr>
    <td>deccan Hospital</td>
    <td>040 2341 0640</td>
    <td>06-6-903 / A and B, Raj Bhavan Road, Somajiguda, Hyderabad - 500082</td>
  </tr>
  <tr>
    <td>Care Hospitals (Banjara Hills)</td>
    <td>040 6725 6666</td>
    <td>Door NO 6-3-248 / 1/A, Road No 1, Opposite Taj Banjara Hills, Hyderabad - 500034</td>
  </tr>
  <tr>
    <td>Yashoda Hospitals (Malakpet)</td>
    <td>040 4567 4567</td>
    <td>Nalgonda X Roads Malakpet, Hyderabad - 500036</td>
  </tr>
  <tr>
    <td>Pranaam Hospital</td>
    <td>040 2304 2777</td>
    <td>1-56/6/40 and 41, Mythri Nagar, Miyapur Madinaguda, Hyderabad - 500050</td>
  </tr>
  <tr>
    <td>KIMS Hospitals (Kondapur)</td>
    <td>040 6750 5050</td>
    <td>1-112 / 86, Survey No 5 / EE, Kondapur Village, Serilingampally Mandal Kondapur, Hyderabad - 500084</td>
  </tr>
  <tr>
    <td>Tulasi Hospitals</td>
    <td>040 4987 1613</td>
    <td>Shop A-12, Electronic Complex, Ecil X Roads, Beside State Bank Of Hyderabad Kushaiguda, Hyderabad - 500062</td>
  </tr>
  <tr>
    <td>deccan Hospital</td>
    <td>040 2341 0640</td>
    <td>06-6-903 / A and B, Raj Bhavan Road, Somajiguda, Hyderabad - 500082</td>
  </tr>
  <tr>
    <td>Care Hospitals (Banjara Hills)</td>
    <td>040 6725 6666</td>
    <td>Door NO 6-3-248 / 1/A, Road No 1, Opposite Taj Banjara Hills, Hyderabad - 500034</td>
  </tr>
  <tr>
    <td>Yashoda Hospitals (Malakpet)</td>
    <td>040 4567 4567</td>
    <td>Nalgonda X Roads Malakpet, Hyderabad - 500036</td>
  </tr>
  <tr>
    <td>Pranaam Hospital</td>
    <td>040 2304 2777</td>
    <td>1-56/6/40 and 41, Mythri Nagar, Miyapur Madinaguda, Hyderabad - 500050</td>
  </tr>
  <tr>
    <td>KIMS Hospitals (Kondapur)</td>
    <td>040 6750 5050</td>
    <td>1-112 / 86, Survey No 5 / EE, Kondapur Village, Serilingampally Mandal Kondapur, Hyderabad - 500084</td>
  </tr>
</table>
</div>




              
    `;
  }
  

  

  
}


window.customElements.define('my-network', Mynetwork);

