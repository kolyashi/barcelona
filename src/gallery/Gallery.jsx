import React, { useState } from 'react';
import Modal from 'react-modal';
import './Gallery.css';
import like from '../img/icon.png';
import { cardData } from '../components/index';

const Gallery = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [galleryIsOpen, setGalleryIsOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState(null);
    const [currentGalleryPhotos, setCurrentGalleryPhotos] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    const itemsPerSlide = 3;
    const totalSlides = Math.ceil(cardData.length / itemsPerSlide);

    const openModal = (photoSrc) => {
        setCurrentPhoto(photoSrc);
        setModalIsOpen(true);
        setGalleryIsOpen(false);
    };

    const openGallery = (photos) => {
        setCurrentGalleryPhotos(photos);
        setGalleryIsOpen(true);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setCurrentPhoto(null);
        setCurrentGalleryPhotos([]);
    };

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <>
            <div className="container_gallery">
                <div className="gallery_content">
                    <h1 className="gallery_profile">Отзывы о Барселоне</h1>
                    <div className="slider">
                        <div className="slider-wrapper" style={{ transform: `translateX(-${currentSlide * 50}%)` }}>
                            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                <div className="slider-slide" key={slideIndex}>
                                    {cardData.slice(slideIndex * itemsPerSlide, (slideIndex + 5) * itemsPerSlide).map((card, cardIndex) => (
                                        <div key={cardIndex} className="profile_container">
                                            <div className="profile">
                                                <img className="avatarka" src={card.img} alt={card.username} />
                                                <p className="name">{card.username}</p>
                                            </div>
                                            <div className="text_profile">
                                                <p><span className="highlight">БАРСЕЛОНА</span> - О ГОРОДЕ:</p>
                                                <p>{card.description}</p>
                                            </div>
                                            <div className="flex_photos">
                                                {card.photos.slice(0, -1).map((photo, index) => (
                                                    <img
                                                        key={index}
                                                        src={photo}
                                                        alt={`Photo ${index + 1}`}
                                                        onClick={() => openModal(photo)}
                                                        className="photo"
                                                    />
                                                ))}
                                                <div className="photo-container" onClick={() => openGallery(card.photos)}>
                                                    <img src={card.photos[card.photos.length - 1]} alt="Additional Photos" className="photo photo-overlay" />
                                                    <span className='number'>+{card.photos.length + 3}</span>
                                                </div>
                                            </div>
                                            <div className='footer_profile'>
                                                <p className='data_text'>{card.date}</p>
                                                <p className='separator'>.</p>
                                                <p className='comm'>{card.comments}</p>
                                                <img className='like_reaction' src={like} alt="likes" />{card.likes}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <button className="prev" onClick={prevSlide}>❮</button>
                        <button className="next" onClick={nextSlide}>❯</button>
                    </div>
                    <div className="slider-dots">
                        {Array.from({ length: totalSlides }).map((_, dotIndex) => (
                            <span
                                key={dotIndex}
                                className={`dot ${dotIndex === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(dotIndex)}
                            ></span>
                        ))}
                    </div>
                    <button className='btn'>Все Отзывы</button>
                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className="modal"
                    overlayClassName="overlay"
                >
                    <button className="close-popup" onClick={closeModal}>
                        &times;
                    </button>
                    {galleryIsOpen ? (
                        <div className="modal-gallery">
                            {currentGalleryPhotos.map((photo, index) => (
                                <img key={index} src={photo} alt={`Gallery ${index + 1}`} className="gallery-photo" />
                            ))}
                        </div>
                    ) : (
                        currentPhoto && (
                            <div className="modal-content">
                                <img src={currentPhoto} alt="Popup" className="popup-photo" />
                            </div>
                        )
                    )}
                </Modal>
                
            </div>
        </>
    );
}

export default Gallery;
