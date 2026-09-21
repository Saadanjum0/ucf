import { useEffect } from 'react';
import { SITE } from '../data';
import { CloseThinIcon } from './Icons';

export default function VideoPopup({ onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  return (
    <div className="popup" role="dialog" aria-modal="true">
      <div className="popup-overlay" onClick={onClose} />
      <div className="popup-content">
        <button className="popup-close" aria-label="Close" onClick={onClose}><CloseThinIcon /></button>
        <div className="popup-video">
          <iframe src={SITE.videoEmbed} title="Community Health & Life Center video" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
        </div>
      </div>
    </div>
  );
}
