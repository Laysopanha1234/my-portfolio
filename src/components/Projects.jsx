import React from 'react';

function Projects() {
  return (
    <div className="right-section">
      <div className="right-title">
        <i className="fas fa-microchip"></i>
        <span>Core Competencies</span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem', marginTop: '0.5rem' }}>
        <span style={{ background: '#eef2fa', padding: '5px 12px', borderRadius: '30px', fontSize: '0.75rem', fontWeight: '500' }}>🔧 PC Hardware Repair</span>
        <span style={{ background: '#eef2fa', padding: '5px 12px', borderRadius: '30px', fontSize: '0.75rem', fontWeight: '500' }}>🖥️ Windows & Linux basics</span>
        <span style={{ background: '#eef2fa', padding: '5px 12px', borderRadius: '30px', fontSize: '0.75rem', fontWeight: '500' }}>🌐 LAN / Wi-Fi configuration</span>
        <span style={{ background: '#eef2fa', padding: '5px 12px', borderRadius: '30px', fontSize: '0.75rem', fontWeight: '500' }}>📸 Adobe Photoshop</span>
        <span style={{ background: '#eef2fa', padding: '5px 12px', borderRadius: '30px', fontSize: '0.75rem', fontWeight: '500' }}>📊 MS Office Suite</span>
      </div>
      <div className="about-text" style={{ marginTop: '1rem' }}>
        💡 <strong>Willing to learn:</strong> Cloud services, network security, and advanced system administration. 
        Open for internships or junior IT support roles to deliver real impact.
      </div>
    </div>
  );
}

export default Projects;