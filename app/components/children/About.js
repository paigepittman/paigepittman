var React = require("react");
var Link = require("react-router").Link;

var About = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12 about-page">
          <div className="card-panel aboutme">
            <div className="panel-heading">
              <h3 className="panel-title title">about me</h3>
            </div>
            <div className="panel-body">
              I recently completed a Full Stack Development bootcamp with UCLA and am currently working as a Teaching Assistant for the same program. I have experience in HTML5, CSS3, Javascript, JQuery, Node JS, Express, MySql, React and Handlebars JS and I love working with the Front End. Prior to transitioning into Web Development, I received my Bachelor's Degree from California State University, Northridge in English and managed 5 multi-million dollar Abercrombie and Fitch retail locations (2 of which are in the company’s top earning stores). I was responsible for managing store operations and overseeing tasks in visual merchandising. I am a highly organized multi-tasker with the ability to drive results and meet deadlines in a fast pace work environment. In my spare time I go to music festivals and hang out with my dog, Thumper. You can checkout my porfolio <Link to="/Portfolio" className="link">here</Link>
            </div>
          </div>
            <div className="card-panel skills">
              <div className="card-content">
                <center>
                  <h5 className="title" id="skills-header">skills</h5>
                  <div className="list">
                    <ul>
                      <li>
                        HTML5
                      </li>
                      <li>
                        CSS3
                      </li>
                      <li>
                        JavaScript
                      </li>
                      <li>
                        JQuery
                      </li>
                      <li>
                        Node JS
                      </li>
                    </ul>
                  </div>
                  <div className="list2">
                    <ul>

                      <li>
                        Express
                      </li>
                      <li>
                        MySql
                      </li>
                      <li>
                        Handlebars JS
                      </li>
                      <li>
                        React
                      </li>
                      <li>
                        MongoDB
                      </li>
                    </ul>
                  </div>

                </center>
              </div>
            </div>
          </div>
        </div>

    );
  }
});

module.exports = About;
