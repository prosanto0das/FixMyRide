import './Gallery.css';

export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      title: 'Premium Car Detailing',
      category: 'Detailing',
      image: '/assets/pic_for_gallary/alexis-amz-da-cruz-qVnkGg7hHlI-unsplash.jpg',
      description: 'Complete car detailing and polishing service'
    },
    {
      id: 2,
      title: 'Manual Car Wash',
      category: 'Cleaning',
      image: '/assets/pic_for_gallary/brad-starkey-eP8h7YVhFHk-unsplash.jpg',
      description: 'Expert manual car washing and exterior cleaning'
    },
    {
      id: 3,
      title: 'Professional Car Wash',
      category: 'Detailing',
      image: '/assets/pic_for_gallary/clement-m-Ng3xrviPrhk-unsplash.jpg',
      description: 'Professional car washing with advanced detailing'
    },
    {
      id: 4,
      title: 'Scratch Removal',
      category: 'Wheels',
      image: '/assets/pic_for_gallary/deniz-demirci-dlJelFmdpOc-unsplash.jpg',
      description: 'Professional scratch removal and paint correction'
    },
    {
      id: 5,
      title: 'Battery Service',
      category: 'Electrical',
      image: '/assets/pic_for_gallary/kate-ibragimova-bEGTsOCnHro-unsplash.jpg',
      description: 'Battery testing and replacement'
    },
    {
      id: 6,
      title: 'Engine Service',
      category: 'Engine',
      image: '/assets/pic_for_gallary/kate-ibragimova-iFQpqbLMOFU-unsplash.jpg',
      description: 'Engine inspection and maintenance service'
    },
    {
      id: 7,
      title: 'Paint Coating & Detailing',
      category: 'Protective Coating',
      image: '/assets/pic_for_gallary/man-working-car-detailing-coating-car.jpg',
      description: 'Professional paint protection coating and detailing'
    },
    {
      id: 8,
      title: 'Brake Service',
      category: 'Safety',
      image: '/assets/pic_for_gallary/maxim-tolchinskiy-bDerlrw72-g-unsplash.jpg',
      description: 'Brake inspection and replacement'
    },
    {
      id: 9,
      title: 'Professional Detailing',
      category: 'Premium Care',
      image: '/assets/pic_for_gallary/mehmet-talha-onuk-rU_bvNfr8pQ-unsplash.jpg',
      description: 'Complete vehicle detailing and polishing'
    },
    {
      id: 10,
      title: 'Vehicle Inspection Service',
      category: 'Maintenance',
      image: '/assets/pic_for_gallary/neelabh-raj-rS9PBJBY5pc-unsplash.jpg',
      description: 'Thorough vehicle inspection and maintenance check'
    },
    {
      id: 11,
      title: 'Interior Restoration',
      category: 'Restoration',
      image: '/assets/pic_for_gallary/nina-mercado-e9YFrEBWit8-unsplash.jpg',
      description: 'Professional interior cleaning and restoration'
    },
    {
      id: 12,
      title: 'Full Vehicle Restoration',
      category: 'Restoration',
      image: '/assets/pic_for_gallary/quilia-2K_-PG95qlI-unsplash.jpg',
      description: 'Complete vehicle restoration and renewal'
    },
    {
      id: 13,
      title: 'Exterior Cleaning & Care',
      category: 'Cleaning',
      image: '/assets/pic_for_gallary/sincerely-media-Ou_JxayY8dQ-unsplash.jpg',
      description: 'Professional exterior cleaning and protective care'
    },
    {
      id: 14,
      title: 'Professional Mechanical Work',
      category: 'Repairs',
      image: '/assets/pic_for_gallary/sten-rademaker-UZUzvJEvKnI-unsplash.jpg',
      description: 'Expert mechanical repairs and assembly'
    }
  ];

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <div className="gallery-hero">
        <h1>Our Gallery</h1>
        <p>Professional Service Portfolio</p>
      </div>

      {/* Gallery Container */}
      <div className="gallery-container">

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-card">
              <div
                className="gallery-image"
                style={{ backgroundImage: `url(${image.image})` }}
              >
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3>{image.title}</h3>
                    <p>{image.description}</p>
                  </div>
                </div>
              </div>
              <div className="gallery-info">
                <h3>{image.title}</h3>
                <p className="category">{image.category}</p>
                <p className="description">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}