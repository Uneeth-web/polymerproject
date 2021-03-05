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
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './my-network.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {

  
  
  static get template() {
    return html`
    
    <!-- app-location is an element that provides
    synchronization between the browser location bar and the state of an app.it bind app url-->

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>    
      <!--iron-selector is an element which can be used to manage a
          list of elements that can be selected.-->
          <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="login" href="[[rootPath]]login"></a>
            <a name="register" href="[[rootPath]]register"></a>
            <a name="home" href="[[rootPath]]home"></a>
            <a name="contact" href="[[rootPath]]contact"></a>
            <a name="logout" href="[[rootPath]]logout"></a>
            <a name="team" href="[[rootPath]]team"></a>
            <a name="network" href="[[rootPath]]network"></a>
            <a name="success" href="[[rootPath]]success"></a>   
            <a name="services" href="[[rootPath]]services"></a>   
            <a name="plan" href="[[rootPath]]plan"></a>   
            <a name="about" href="[[rootPath]]about"></a>
      
          </iron-selector>

        <!-- Main content -->
        <!--iron-pages is used to select one of its children to show. 
        One use is to cycle through a list of children "pages".-->

          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <log-in name="login"></log-in>
            <my-register name="register"></my-register>
            <my-home name="home"></my-home>
            <my-about name="about"></my-about>
            <my-policy name="policy"></my-policy>
            <my-contact name="contact"></my-contact>
            <my-output name="output"></my-output>
            <my-success name="success"></my-success>
            <my-services insurance-data="{{insuranceData}}" user-list="{{userList}}" name="services"></my-services>
            <my-team name="team"></my-team>
            <my-network name="network"></my-network>
            <my-plan insurance-data="{{insuranceData}}"  user-list="{{userList}}" name="plan"></my-plan>
            <my-view404 name="view404"></my-view404>
          </iron-pages>
       
    `;
  }

  static get properties() {
    return {
    //page property which is used for page navigation
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      insuranceData:{
        type:Object,
        value:{},
      },
      userList:{
        type:Array,
        value:[],
      },
      routeData: Object,
      subroute: Object
    };
  }
   //Observers are methods invoked when observable changes occur to the element's data. 
   //
  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
     // Show the corresponding page according to the route.
     //
     // If no page was found in the route data, page will be an empty string.
     // Show 'login' in that case. And if the page doesn't exist, show 'view404'.
    if (!page) {
      this.page = 'login';
    } else if (['login', 'register', 'home','contact','team','success','network','about','services','plan','logout'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }

    // Close a non-persistent drawer when the page & route are changed.
   
  }
  

  _pageChanged(page) {
    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
      case 'login':
        import('./log-in.js');
        break;
      case 'register':
        import('./my-register.js');
        break;
      case 'home':
        import('./my-home.js');
        break;
        case 'contact':
          import('./my-contact.js');
          break;
          case 'team':
            import('./my-team.js');
            break;
            case 'success':
              import('./my-success.js');
              break;
            case 'network':
              import('./my-network.js');
              break;
              case 'services':
              import('./my-services.js');
              break;
              case 'about':
                import('./my-about.js');
                break;
                case 'logout':
                  import('./my-logout.js');
                  break;
                case 'plan':
                import('./my-plan.js');
                break;
      case 'view404':
        import('./my-view404.js');
        break;
    }
  }
}

window.customElements.define('my-app', MyApp);
