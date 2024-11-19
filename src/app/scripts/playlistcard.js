'use client';

export default function PlaylistCard({ playlistId, title, creator, imageUrl }) {
    return (
      <div className="playlist-card" style={{ backgroundImage: `url(${imageUrl})` }} onClick={() => window.location.href = `/playlist/${playlistId}`}>
        <div className="playlist-card-overlay">
          <h3>{title}</h3>
          <p>{creator}</p>
        </div>
      </div>
    );
  }
  