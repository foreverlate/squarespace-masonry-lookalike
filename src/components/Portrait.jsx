import React from 'react';
    import Masonry from 'react-masonry-css';

    const Portrait = ({ onOpenModal }) => {
      const imageURLs = [
        "https://images.unsplash.com/photo-1542224566-6e85f2e6772f",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
        "https://images.unsplash.com/photo-1542224566-6e85f2e6772f",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
        "https://images.unsplash.com/photo-1542224566-6e85f2e6772f",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
        "https://images.unsplash.com/photo-1542224566-6e85f2e6772f",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963"
      ];

      const images = imageURLs.map((url, index) => ({
        src: url,
        title: ``,
      }));

      const breakpointColumnsObj = {
        default: 4,
        1024: 3,
        768: 2,
        640: 1,
      };

      const shuffledImages = [...images].sort(() => Math.random() - 0.5);

      return (
        <div>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {shuffledImages.map((image, index) => (
              <div
                key={index}
                className="masonry-grid_item"
                onClick={() => onOpenModal(shuffledImages, index)}
              >
                <img src={image.src} alt={image.title} />
              </div>
            ))}
          </Masonry>
        </div>
      );
    };

    export default Portrait;
