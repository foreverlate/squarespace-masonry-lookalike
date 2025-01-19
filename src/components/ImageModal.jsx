import React from 'react';

    const ImageModal = ({ isOpen, onClose, images, currentImageIndex, onPrev, onNext }) => {
      if (!isOpen) return null;

      return (
        <div className={`image-modal ${isOpen ? 'open' : ''}`} onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[currentImageIndex].src} alt={images[currentImageIndex].title} />
            <div className="nav-arrow left" onClick={onPrev}>
              &lt;
            </div>
            <div className="nav-arrow right" onClick={onNext}>
              &gt;
            </div>
          </div>
        </div>
      );
    };

    export default ImageModal;
