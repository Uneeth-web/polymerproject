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
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-layout/app-grid/app-grid-style';
import '@polymer/app-layout/app-layout.js';
import '@material/mwc-icon/mwc-icon';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@material/mwc-icon';
import '@silverlinkz/sl-gallery';
import  './my-nav.js';
class Myhome extends PolymerElement {
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
       }
/*-----------------------------------------------------------------
Nav  
---------------------------------------------------------*/
  .home{
  overflow:hidden;
   }
    .topnav  {
      overflow: hidden;
      background-color:#4285f4;
      text-align:right;
    }


    .topnav . active {
     float: left;
   display: block;
   color: #4285f4;
   text-align: center;
   padding: 21px 16px;
   text-decoration: none;
   font-size: 17px;
  }

  .topnav . active:hover {
   background-color:blue;
   color: black;
  }

  .topnav .active {
   background-color:#4285f4;
   color: white;
  }

 .topnav .icon {
  display: none;
  }
  /**<!-- navigation bar hidden-->

  @media screen and (max-width: 600px) {
  .topnav .active:not(:first-child) {display: none;}
  .topnav .active.icon {
    float: right;
    display: block;
    }
  }*/

  @media screen and (max-width: 600px) {
   .topnav.responsive {position: relative;}
   .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
    }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
  .home{
    overflow:hidden;
  }
}





        /*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
#hero {
    width: 100%;
    height: 95vh;
    background: url("img0.jpg") center;
    background-size: cover;
    background-color:  #99b3ff;
    position: relative;
  }
  
  #hero .container {
    padding-top: 300px;
  } 
  
  #hero:before {
    content: "";
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  } 
  
  #hero h1 {
    margin: 0 10 10px 0;
    text-align:center;
    font-size: 52px;
    font-weight: 600;
    line-height: 56px;
    color:blue;
  }
  
  #hero h2 {
    color: black;
    text-align:center;
    margin-bottom: 40px;
    font-size: 25px;
    font-weight: 500;
    font-family: "Open Sans", sans-serif;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  
  .container flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
   }

  paper-card{
    width:100%;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    transition: all 0.15s ease;
    border: none;
    background: -webkit-linear-gradient(left, #a445b2, #fa4299);    position: relative;
  }
  .card:hover {
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
  }
  .flex {
    @apply(--layout-horizontal);
    text-align: justify;
    -ms-text-justify: distribute-all-lines;
    text-justify: distribute-all-lines;
    width:100%;
    
  }
  
      .card {
          background-color:white;

         }
        
         .container{
           margin-left:2px;
           margin-right: 2px;

         }
         paper-card{
          column-gap: 70px;
         }
        
    
 

        /* ==================================================
  Medicare SEction
  ================================================== */
  .care {
    background-color:#4285f4;
    padding-bottom:15px;
    margin:0 auto;
  }
  
  .care h2 {
    color: #000;
    margin-bottom: 55px;
    
  }
  
        /*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
footer {
  text-align: center;
  padding: 3px;
  marin-top:10px;
  background-color:white;
  color: black;
}

.fancy {
  color: #03a9f4;
  --mdc-icon-size: 64px;
}
@media only screen and (max-device-width: 430px){

  .container{
    display: flex;
    flex-wrap: wrap;
    width:100%;
    justify-content: space-around;
    
   }
  }
  

      </style>

 
        <div class="home">  
      
      <my-nav></my-nav>
      <section id="hero" class="d-flex align-items-center">
      <div class="container text-center position-relative">
        <h1>Medicare Insurance</h1>
        <h2>A power to heal to improves health.</h2>
        
      </div>
      </section>
      <!-- End Hero -->


      <div class="container flex">
<div class="card">
  <paper-card heading="Complete Health Insurance"> <i class="material-icons red large">claim</i>
    <div class="card-content">
    <h1>Complete Health Insurance</h1>
   <p> Plan covers Medical insurance for Your family members.
   This simply Complete family cover in one plan Plan covers Medical insurance for Your family members 
    medical expenses.You can choose coverage for health insurance as per your medical 
    needs such as maternity cover,
    OPD cover, critical illness cover, donor expenses cover, etc.</p>
  </div>
</div>


<div class="card">
  <paper-card heading="Arogya Sanjeevani Policy"> <i class="material-icons red large">claim</i>
    <div class="card-content">
    <h1>Arogya Sanjeevani Policy</h1>
   <p>The Arogya Sanjeevani Health Insurance is a standard health insurance plan that covers you 
   from healthcare expenses from 3 lakhs to up to 5 lakhs. This coverage includes pre and post 
   hospitalization expenses, hospital room rent 
   (stay and bed charges), ICU services, and even new age treatments..</p>
  </div>
</paper-card>
</div>

<div class="card">
  <paper-card heading="Health Booster"> <i class="material-icons red large">claim</i>
    <div class="card-content">
    <h1>Health Booster</h1>
   <p> Health Booster is a super top-up health insurance plan that offers cover 
   for excess payment that may arise due to treatment expenses to be paid 
   over and above the existing health insurance policy
   Plan provides Additional annual limit and extra benefits, 
              such as Screening,Vaccinations,Home_Health checkups.</p>
  </div>
</paper-card>
</div>
</div>

<div class="container flex">

<div class="card">
  <paper-card heading="Personal Protect"> <i class="material-icons red large">claim</i>
    <div class="card-content">
    <h1>Personal Protect</h1>
   <p> A policy that reimbuse your medical costs,provides
   compensation in case of disabilites and other circumstances.The Personal Protect Insurance policy 
   covers you against Accidental Death and (PTD) on account of Accident 
   and optional cover 
   Hospitalisation Expenses and  Allowance.</p>
  </div>
</paper-card>
</div>


<div class="card">
  <paper-card heading="COVID Recovery"> <i class="material-icons red large">claim</i>
    <div class="card-content">
    <h1>COVID Recovery</h1>
   <p>Protection againsts corona virus at hospital as 
   well as allow to recover in relative comfort at home
   While you focus on a quick recovery, we take care of your medical expenses for 
   hospitalisation, pre-hospitalization, and post-hospitalization as well. </p>
  </div>
</paper-card>
</div>

<div class="card">
  <paper-card heading="Ambulance Services"> <i class="material-icons red large">claim</i>
    <div class="card-content">
    <h1>Ambulance Services</h1>
   <p>Services across the Hyderabad,Anytime and Anywhere for immediate
   medical assistances with well equipped devices .When an ambulance ride is "medically necessary," 
   it is common for insurance providers to cover some of the costs and in fact likely..</p>
  </div>
</paper-card>
</div>
</div>
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


<!-- ======= medicare Section ======= -->
  <section class="care">

    <div class="container text-center">
      <h2 class="py-3">
        Medicare Wecare
      </h2>

      <p>
        A health insurance plan can provide the financial support which one may need during a medical emergency. Furthermore, 
        the plan comes along with a number of benefits for those who are insured under it.
      </p>
<br>
<br>
    </div>
  </section>

      </div>
    </div>
  </section><!-- End Portfolio Section -->
  
   
      
      <!-- Footer-->
      <footer>
  <p>Copyright � Your Website 2021<br>
  <a href="mailto:UniqueHire@example.com">uneeth@example.com</a></p>
</footer>
 </div>

     

    `;
  }
  
  
  
  

}

window.customElements.define('my-home', Myhome);
