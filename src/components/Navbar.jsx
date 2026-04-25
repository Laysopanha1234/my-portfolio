import React from 'react';

function Navbar() {
  return (
    <aside className="sidebar">
      <div className="profile">
        <h1>Sihong Kimseng</h1>
        <div className="tagline">IT Support & Computer Repair Specialist</div>
      </div>

      <div className="contact-info">
        <div className="section-title">CONTACT</div>
        <div className="contact-details">
          <p><i className="fas fa-phone-alt"></i> +885 78 398 612</p>
          <p><i className="fas fa-envelope"></i> sihongkimseng@gmail.com</p>
          <p><i className="fas fa-map-marker-alt"></i> Sangkat Stueng Mean Chey, Phnom Penh</p>
        </div>
      </div>

      <div className="skill-block">
        <div className="section-title">TECHNICAL SKILLS</div>
        <ul className="skill-items">
          <li><i className="fas fa-desktop"></i> Computer Installation & Setup</li>
          <li><i className="fas fa-tools"></i> Hardware & Software Troubleshooting</li>
          <li><i className="fas fa-wifi"></i> Basic Networking (Wi-Fi & LAN Setup)</li>
          <li><i className="fas fa-paint-brush"></i> Graphic Design (Adobe Photoshop)</li>
          <li><i className="fas fa-file-excel"></i> Microsoft Office (Word, Excel, Access)</li>
        </ul>
      </div>

      <div className="skill-block">
        <div className="section-title">LANGUAGES</div>
        <div className="lang-item">
          <span className="lang-name">Khmer</span>
          <span className="lang-level">Native</span>
        </div>
        <div className="lang-item">
          <span className="lang-name">English</span>
          <span className="lang-level">Basic (A2)</span>
        </div>
      </div>
    </aside>
  );
}

export default Navbar;