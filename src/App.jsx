import React, { useState, useEffect } from 'react';
    import Header from './components/Header';
    import Overview from './components/Overview';
    import Portrait from './components/Portrait';
    import Landscape from './components/Landscape';
    import Travel from './components/Travel';
    import ImageModal from './components/ImageModal';
    import About from './components/About';

    const App = () => {
      const [activeCategory, setActiveCategory] = useState('overview');
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
      const [images, setImages] = useState([]);

      const handleCategoryChange = (category) => {
        setActiveCategory(category);
      };

      const handleOpenModal = (images, index) => {
        setImages(images);
        setCurrentImageIndex(index);
        setIsModalOpen(true);
      };

      const handleCloseModal = () => {
        setIsModalOpen(false);
      };

      const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : images.length - 1
        );
      };

      const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex < images.length - 1 ? prevIndex + 1 : 0
        );
      };

      useEffect(() => {
        const handleKeyDown = (event) => {
          if (isModalOpen) {
            if (event.key === 'ArrowLeft') {
              handlePrevImage();
            } else if (event.key === 'ArrowRight') {
              handleNextImage();
            } else if (event.key === 'Escape') {
              handleCloseModal();
            }
          }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, [isModalOpen, handlePrevImage, handleNextImage, handleCloseModal]);

      const renderCategoryPage = () => {
        switch (activeCategory) {
          case 'overview':
            return <Overview onOpenModal={handleOpenModal} />;
          case 'portrait':
            return <Portrait onOpenModal={handleOpenModal} />;
          case 'landscape':
            return <Landscape onOpenModal={handleOpenModal} />;
          case 'travel':
            return <Travel onOpenModal={handleOpenModal} />;
          case 'about':
            return <About />;
          default:
            return <Overview onOpenModal={handleOpenModal} />;
        }
      };

      return (
        <div>
          <Header activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
          <div className="container">
            {renderCategoryPage()}
          </div>
          <ImageModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            images={images}
            currentImageIndex={currentImageIndex}
            onPrev={handlePrevImage}
            onNext={handleNextImage}
          />
          <footer className="footer">
            © 2025 BeyondJJ Photography. All rights reserved.
          </footer>
        </div>
      );
    };

    export default App;
