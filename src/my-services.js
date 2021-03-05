/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
 import {
	PolymerElement,
	html
} from '@polymer/polymer/polymer-element.js';
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
import './my-nav.js';
class Myservices extends PolymerElement {
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
      <my-nav></my-nav>
    
      <div class="head">
      <center><h1><b>MediCare Health Insurance<b><h1></center>
      </div>

      <div class="card">
        <div class="circle">MyAccount</div>
        <paper-input  always-float-label label="Name" required auto-validate error-message="Provide valid details!" value="{{username}}"char-counter pattern="[a-zA-Z]*"></paper-input>
        <paper-input  always-float-label label="Mobile Number" required auto-validate error-message="Provide valid details!" value="{{mobile}}" char-counter maxlength="12" pattern="[0-9]*"  ></paper-input>
        <paper-input  always-float-label label="Aadhar Number" required auto-validate error-message="Provide valid details!" value="{{aadhar}}" char-counter maxlength="10" pattern="[0-9]*"></paper-input>
        <paper-input  always-float-label label="City" required auto-validate error-message="Provide valid details!" value="{{city}}"char-counte pattern="[a-zA-Z]*"></paper-input>

  
      
        <p>Policy Plan</p>  
        <paper-dropdown-menu   value={{policyPlan}} label="Policy Plan">
        <paper-listbox slot="dropdown-content" selected="1">
          <paper-item>Complete Health Insurance</paper-item>
          <paper-item>Arogya Sanjeevani Policy</paper-item>
          <paper-item>Health Booster</paper-item>
          <paper-item>Personal Protect</paper-item>
          <paper-item>COVID Recovery</paper-item>
        </paper-listbox>
      </paper-dropdown-menu>

      <p>Policy Terms </p>  
      <paper-dropdown-menu value={{policyTerm}} label="Policy Term Years">
      <paper-listbox slot="dropdown-content" selected="1">
        <paper-item>5  years</paper-item>
        <paper-item>10 years</paper-item>
        <paper-item>15 years</paper-item>
        <paper-item>20 years</paper-item>
      </paper-listbox>
    </paper-dropdown-menu>

    <p>Family Members</p>  
    <paper-dropdown-menu  value={{members}} label="members">
    <paper-listbox slot="dropdown-content" selected="1">
      <paper-item>1 Member @ 99/months</paper-item>
      <paper-item>2 Members  @ 250/months</paper-item>
      <paper-item>3 Members  @ 356/months</paper-item>
      <paper-item>4 Members  @ 569/months</paper-item>
    </paper-listbox>
  </paper-dropdown-menu>
  
  
        
        <br>
        <paper-button toggles raised class="green" on-click="handleClick">submit</paper-button>

      </div>
       

    `;
	}
	static get properties() {
		return {
			//page property which is used for page navigation
			username: {
				type: String,
				value:'',
			},
			aadhar: {
				type: String,
				value:'',
			},
			mobile: {
				type: Number,
				value:'',
			},
			city: {
				type: String,
				value:'',
			},
      policyPlan: {
				type: String,
				value:'',
			},
      policyTerm: {
				type: String,
				value:'',
			},
      members: {
				type: String,
				value:'',
			},
			insuranceData: {
				type: Object,
				value: {},
				notify: true
			},
			userList: {
				type: Array,
				value: [],
				notify: true
			}
     
		};
  }

		handleClick() {
			if (this.username.trim() == '' || this.aadhar.trim() == '' || this.mobile.trim() == '' || this.city.trim() == '') {
				alert('please enter all fields');
        return false;
			}
			this.insuranceData = {
				"username": this.username,
				"aadhar": this.aadhar,
				"mobile": this.mobile,
				"city": this.city,
        "policyPlan": this.policyPlan,
        "policyTerm": this.policyTerm,
        "members": this.members
			}
			//pushing the data into userlist
			this.userList.push(this.insuranceData);
      //modify and added the data
			let users = this.userList.map((username) => {
				return username;
			});
			this.set('userList', users); //setting the users into userlist 
			console.log(this.insuranceData);
      console.log(this.userList);

			//reset input fields
			this.username = '';
			this.aadhar = '';
			this.mobile = '';
			this.city = '';
		this.set('route.path', '/plan'); //route path to plan page
		}


	}

window.customElements.define('my-services', Myservices);