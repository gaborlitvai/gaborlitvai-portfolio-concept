import React from "react";
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personel Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__section">
          <div className="qualification__content">
            {/* left */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">University</h3>
                <span className="qualification__subtitle">
                Széchenyi István Egyetem
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>
            {/* right */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
              <div>
                <h3 className="qualification__title">University</h3>
                <span className="qualification__subtitle">
                  Széchenyi István Egyetem
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - Present
                </div>
              </div>
            </div>
            {/* left */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">University</h3>
                <span className="qualification__subtitle">
                Széchenyi István Egyetem
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>
            {/* right */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
              <div>
                <h3 className="qualification__title">University</h3>
                <span className="qualification__subtitle">
                  Széchenyi István Egyetem
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - Present
                </div>
              </div>
            </div>
            {/* left */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">University</h3>
                <span className="qualification__subtitle">
                Széchenyi István Egyetem
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
