import React from "react";

const AboutPageContainer = () => {
  return (
    <div className="container">
      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About Me</h2>
            <h3 className="section-subheading text-muted">
              Hi, I'm <span className="profile-name">Maniruzzaman Akash</span>
              <br />
              I'm a full stack web developer experiencing more than 3+ years
              with <code>PHP</code>, <code>Laravel</code>,{" "}
              <code>JavaScript</code>, <code>Vue Js</code>,{" "}
              <code>React Js</code>, <code>React Native</code> and many more..
            </h3>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                {/* <img
                  className="rounded-circle img-fluid"
                  src="assets/img/about/1.jpg"
                  alt=""
                /> */}
                <h4>PSTU</h4>
                <h6>Computer Science and Engineering</h6>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2015-2018</h4>
                  <h4 className="subheading">
                    Gratuated from Patuakhali Science and Technology University
                  </h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    I'm Gratuated from Patuakhali Science and Technology
                    University from the faculty of Computer Science and
                    Engineering
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>Freelance Web Developer</h4>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>May 2017 - Nov 2018</h4>
                  <h4 className="subheading">Freelance Web Developer</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <h4>Agami Soft Ltd.</h4>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>December 2019</h4>
                  <h4 className="subheading">
                    Web Developer at Agami Soft Ltd.
                  </h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="assets/img/about/4.jpg"
                  alt=""
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>July 2014</h4>
                  <h4 className="subheading">Phase Two Expansion</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  Be Part
                  <br />
                  Of my
                  <br />
                  Story!
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutPageContainer;
