import React from 'react';

    const About = () => {
      return (
        <div style={{ padding: '120px 0', textAlign: 'center', overflow: 'auto' }}>
          <h2 style={{ marginBottom: '20px', color: '#F6B17A' }}>Beyond the Lens</h2>
          <p style={{ fontSize: '1.2em', color: '#7077A1', lineHeight: '1.6', marginBottom: '40px' }}>
            Capturing moments that tell stories, create emotions, and preserve memories for generations to come.
          </p>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', padding: '0 32px', marginBottom: '40px' }}>
            <div style={{ flex: '1', maxWidth: '50%', paddingRight: '32px' }}>
              <img
                src="https://images.unsplash.com/photo-1519682337058-d058128c8a81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt="Camera"
                style={{ width: '100%', borderRadius: '8px' }}
              />
            </div>
            <div style={{ flex: '1', maxWidth: '50%', textAlign: 'left' }}>
              <h3 style={{ color: '#F6B17A', marginBottom: '10px', textAlign: 'left' }}>The Artist</h3>
              <p style={{ fontSize: '1em', color: '#7077A1', lineHeight: '1.6' }}>
                With over a decade of experience in photography, I've developed a unique style that combines technical precision with artistic vision. My work spans across various genres, from intimate portraits to vast landscapes, each image telling its own story.
              </p>
              <p style={{ fontSize: '1em', color: '#7077A1', lineHeight: '1.6', marginTop: '10px' }}>
                I believe in creating not just photographs, but experiences that resonate with the soul and capture the essence of every moment.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '0 32px' }}>
            <div style={{ width: '200px', padding: '20px', margin: '10px', backgroundColor: '#424769', borderRadius: '8px', textAlign: 'center' }}>
              <span style={{ fontSize: '2em', color: '#F6B17A', display: 'block', marginBottom: '10px' }}>📸</span>
              <h4 style={{ color: '#F6B17A', marginBottom: '10px' }}>Portrait Sessions</h4>
              <p style={{ color: '#7077A1', fontSize: '0.9em' }}>Professional portraits that capture your authentic self</p>
            </div>
            <div style={{ width: '200px', padding: '20px', margin: '10px', backgroundColor: '#424769', borderRadius: '8px', textAlign: 'center' }}>
              <span style={{ fontSize: '2em', color: '#F6B17A', display: 'block', marginBottom: '10px' }}>🗺️</span>
              <h4 style={{ color: '#F6B17A', marginBottom: '10px' }}>Travel Photography</h4>
              <p style={{ color: '#7077A1', fontSize: '0.9em' }}>Documenting adventures and landscapes worldwide</p>
            </div>
            <div style={{ width: '200px', padding: '20px', margin: '10px', backgroundColor: '#424769', borderRadius: '8px', textAlign: 'center' }}>
              <span style={{ fontSize: '2em', color: '#F6B17A', display: 'block', marginBottom: '10px' }}>👥</span>
              <h4 style={{ color: '#F6B17A', marginBottom: '10px' }}>Events</h4>
              <p style={{ color: '#7077A1', fontSize: '0.9em' }}>Preserving your special moments with artistic flair</p>
            </div>
            <div style={{ width: '200px', padding: '20px', margin: '10px', backgroundColor: '#424769', borderRadius: '8px', textAlign: 'center' }}>
              <span style={{ fontSize: '2em', color: '#F6B17A', display: 'block', marginBottom: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </span>
              <h4 style={{ color: '#F6B17A', marginBottom: '10px' }}>Workshops</h4>
              <p style={{ color: '#7077A1', fontSize: '0.9em' }}>Teaching the art and science of photography</p>
            </div>
          </div>
        </div>
      );
    };

    export default About;
