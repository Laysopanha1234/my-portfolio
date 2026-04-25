import React from 'react';

function About() {
  return (
    <div className="right-section">
      <div className="right-title">
        <i className="fas fa-briefcase"></i>
        <span>Work Experience</span>
      </div>

      <div className="exp-item">
        <div className="exp-header">
          <span className="exp-title">Library Assistant</span>
          <span className="exp-date">2023 – 2025</span>
        </div>
        <div className="exp-org">Assistant Library · Information Center</div>
        <div className="exp-desc">
          Responsible for daily library operations, organizing and maintaining digital/physical resources, 
          assisting users with inquiries, and ensuring a well-organized, conducive study environment.
        </div>
      </div>

      <div className="exp-item">
        <div className="exp-header">
          <span className="exp-title">IT Support Specialist</span>
          <span className="exp-date">2026 – Present</span>
        </div>
        <div className="exp-org">On-site & Remote IT Support</div>
        <div className="exp-desc">
          <ul style={{ marginLeft: '1rem', listStyleType: 'disc' }}>
            <li>Installing and configuring computer systems & peripherals.</li>
            <li>Troubleshooting hardware and software issues, assisting users with daily technical problems.</li>
            <li>Maintaining network connections (Wi-Fi and LAN) to ensure smooth operation.</li>
            <li>Documenting support tickets and improving internal IT procedures.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;