import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import auth0Client from '../Auth';
// Import Materialize
import M from "materialize-css";



function Landing(props) {

  // console.log(auth0Client.getProfile().name);
  return (
    <div class="container">
    <h1 className="center"></h1>
    <div class="row">

      <div class="col s4">
          <div class="row">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                <span class="card-title">学习资料 </span>
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div class="card-action">
                  <a href="/reviews">开始学习</a>
                </div>
              </div>
            </div>
          </div>
      </div>
      
      <div class="col s4">
          <div class="row">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">课程测评</span>
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div class="card-action">
                  <a href="/ratecourse">查看测评</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col s4">
          <div class="row">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">换课系统</span>
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div class="card-action">
                  <a href="/questions">查看课程</a>
                  {/* <a href="#">This is a link</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col s4">
          <div class="row">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">校友系统</span>
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div class="card-action">
                  <a href="/profiles">查看校友</a>
                  {/* <a href="#">This is a link</a> */}
                </div>
              </div>
            </div>
          </div> 
        </div>

        {/* <div class="col s4">
          <div class="row">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">讨论系统</span>
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div class="card-action">
                  <a href="/questions">参与讨论</a>
                </div>
              </div>
            </div>
          </div>
        </div> */}

    </div>
    </div>
  );
}

export default Landing;
