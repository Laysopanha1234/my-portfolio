import React from 'react';

function Skills() {
  return (
    <div className="right-section">
      <div className="right-title">
        <i className="fas fa-graduation-cap"></i>
        <span>Education</span>
      </div>

      <div className="edu-item">
        <div className="exp-header">
          <span className="exp-title">High School Diploma</span>
          <span className="exp-date">2019 – 2020</span>
        </div>
        <div className="exp-org">Hun Sen Sompongchey High School</div>
      </div>

      <div className="edu-item">
        <div className="exp-header">
          <span className="exp-title">Bachelor's Degree in Computer Science</span>
          <span className="exp-date">2021 – 2024</span>
        </div>
        <div className="exp-org">Bachelor of Computer Science · Faculty of Information Technology</div>
        <div className="exp-desc">
          Core coursework: programming fundamentals, hardware architecture, networking basics, database systems.
        </div>
      </div>

      <div className="edu-item">
        <div className="exp-header">
          <span className="exp-title">Master's Degree (in progress)</span>
          <span className="exp-date">2025 – Present <span className="badge-current">Current</span></span>
        </div>
        <div className="exp-org">Faculty of Information Technology · Specialization in Computer Systems</div>
        <div className="exp-desc">
          Pursuing advanced studies in IT infrastructure, network security, and modern computing technologies. 
          Expected graduation: 2026.
        </div>
      </div>
    </div>
  );
}

export default Skills;