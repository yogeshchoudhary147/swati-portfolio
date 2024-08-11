import React from 'react';
import FileSaver from 'file-saver';

const saveFile = () => {
  FileSaver.saveAs(
    process.env.API_URL + '/resources/cv.pdf',
    'Swati_Parmar_CV.pdf',
  );
};

export const Resume = () => (
  <div className="resume-container">
    <div className="main-container">
      <h1 className="heading">Resume</h1>
      <div className="sub-heading-container">
        <h2 className="sub-heading">Experience</h2>
        <button className="button blue-button" onClick={saveFile}>
          DOWNLOAD CV
        </button>
      </div>
      <div className="card">
        <div className="duration">
          <h3 className="blue-text">2018-2023</h3>
          <span>Senior Design Manager</span>
          <br />
          <span>Cult.fit Pvt. Ltd.</span>
          <br />
          <span>Bengaluru</span>
        </div>
        <div>
          <ul>
            <li>
              Established look & feel of the brand through apt visuals,
              communication & app interface.
            </li>
            <li>
              Developed multi-channel marketing campaigns, sales and
              go-to-market strategies to meet customer acquisition, revenue, and
              growth targets.
            </li>
            <li>
              Supervised the creation of marketing assets for digital campaigns,
              app & website creatives, BTL activities & print/TV ad campaigns.
            </li>
            <li>
              Led app merchandising & sales-led activities to drive customer
              acquisition & engage active member base. Delivered 200+ successful
              campaigns.
            </li>
            <li>
              Monitored sales performance & customer retention metrics and
              reported performance to senior leadership.
            </li>
          </ul>
        </div>
      </div>
      <div className="card">
        <div className="duration">
          <h3 className="blue-text">2017-2018</h3>
          <span>Assistant Manager - CX & Merchandising</span>
          <br />
          <span>Cleartrip Pvt. Ltd.</span>
          <br />
          <span>Bengaluru</span>
        </div>
        <div>
          <ul>
            <li>
              Led consumer experience & merchandising strategy in coordination
              with business & tech stakeholders on shaping & implementing key
              strategic initiatives.
            </li>
            <li>
              Provided business solutions & expertise to key partners to enable
              growth & solve their most critical business problems.
            </li>
            <li>
              Collaborated with sales leaders to drive growth & acquisition
              efforts and discuss business performance on a regular basis.
            </li>
          </ul>
        </div>
      </div>
      <div className="card">
        <div className="duration">
          <h3 className="blue-text">2014-2017</h3>
          <span>Site Merchandiser - Fashion Marketing</span>
          <br />
          <span>Flipkart Pvt. Ltd.</span>
          <br />
          <span>Bengaluru</span>
        </div>
        <div>
          <ul>
            <li>
              Planned and drove merchandising calendar and content strategies
              for the year, incorporating big events, festivals, seasonal
              refresh, thematic stores.
            </li>
            <li>
              Carried 500+ projects (building landing pages & curation of
              product assortment) from inception to completion with 100% brand
              guidelines adherence, an average of 10% faster than quoted
              timelines.
            </li>
            <li>
              Managed prime app properties pertaining to fashion vertical and
              developed engagement programs with tech, design & product teams.
              Published daily & weekly performance reports.
            </li>
          </ul>
        </div>
      </div>
      <div className="card">
        <div className="duration">
          <h3 className="blue-text">2011-2012</h3>
          <span>Audit Assistant - AERS</span>
          <br />
          <span>Deloitte & Touche</span>
          <br />
          <span>Hyderabad</span>
        </div>
        <div>
          <ul>
            <li>
              Received spot award for exemplary commitment exhibited for client.
            </li>
            <li>
              Prepared financial statement reports and documentation supporting
              Deloitte's audit opinions.
            </li>
            <li>
              Tested various significant areas such as cash, accounts receivable
              and payables, journal entries, reserve report for oil and gas
              companies.
            </li>
          </ul>
        </div>
      </div>
      <div className="sub-heading-container">
        <h2 className="sub-heading">Education</h2>
      </div>
      <div className="card">
        <div className="duration">
          <h3 className="blue-text">2008-2011</h3>
          <span>University of Delhi</span>
          <br />
          <span>B.com (Honors)</span>
          <br />
          <span>Ramjas College, Delhi</span>
        </div>
        <div>
          <p>
            I completed my graduation from Ramjas College, Delhi University,
            where I developed a strong foundation in business principles and
            analytical skills.
          </p>
          <br />
          <p>
            The exposure to various business concepts and projects fueled my
            passion for creating user-centered solutions and innovative
            marketing strategies.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="duration">
          <h3 className="blue-text">1998-2008</h3>
          <span>Delhi Public School</span>
          <br />
          <span>Schooling</span>
          <br />
          <span>Panipat, Haryana</span>
        </div>
        <div>
          <p>
            I completed my schooling at DPS Panipat, where I excelled
            academically, securing the first position in my class in both XI and
            XII standards.
          </p>
          <br />
          <p>
            Alongside my studies, I earned numerous prizes and awards in various
            extracurricular activities, showcasing my well-rounded skills and
            dedication.
          </p>
        </div>
      </div>
    </div>
  </div>
);
