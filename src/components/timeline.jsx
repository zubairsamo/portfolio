import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Internship at DD Exchange <span>2018-present</span>
                        </h2>
                        <p>
                          I recently have joined the DD Exchange Company as a
                          Web Developer-. My major part of the work has been
                          into the field of creating sustainable and flexible
                          Website and maintanance.I am also exploring the role
                          of container technology like Docker and
                          container-orchrastation technologies like K8s, Swarm
                          to create industry standard production environments.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Undergraduation at PafKiet<span>2015-2019</span>
                        </h2>
                        <p>
                          I am pursuing my under-graduation studies with major
                          in Pafkiet.(Pakistan Institute of Economics And
                          Technology). I have taken courses like DSA, OOPs,
                          Computer Networks, IOT, Web-Data Management over the
                          years and have better understanding of these subjects.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Primary and Higher Education <span>2003-2015</span>
                        </h2>
                        <p>
                          I have completed my higher secondary education with
                          major subjects as Physics,Chemistry & Maths with 91
                          merit. During my time at school, I have developed
                          interest in solving complex problems of the
                          fundamental physics which helped me to improve my
                          understanding of any problem and also my mathematical
                          skills to actually solve the problems.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
