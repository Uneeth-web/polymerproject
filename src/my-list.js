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
class EmployeeList extends PolymerElement {

    
    static get is() { return 'employee-list'; }
    
    static get properties() {
      return {
          

        employees: {
          value() {
            return [
              {first: 'Bob', last: 'Smith'},
              {first: 'Sally', last: 'Johnson'},
            ];
            
          }
          
        }
        
      };
      
    }
    <dom-module id="employee-list">

  <template>

    <div> Employee list: </div>
    <dom-repeat items="{{employees}}">
      <template>
        <div>First name: <span>{{item.first}}</span></div>
        <div>Last name: <span>{{item.last}}</span></div>
      </template>
    </dom-repeat>

  </template>

</dom-module>
}


window.customElements.define('my-view404', MyView404);
