import React, { useState } from 'react';
import './Adminevent.css';
import Adminside from './Adminside';

export default function Adminevent() {
    const [galleryItems, setGalleryItems] = useState([
        { id: 1, title: "WEDDING",  imageUrl: "https://i0.wp.com/moviegalleri.net/wp-content/uploads/2022/06/Nayanthara-Vignesh-Shivan-Wedding-Photos-HD.jpg?resize=1000%2C1003&ssl=1" },
        { id: 2, title: "BIRTHDAY",  imageUrl: "https://images.pexels.com/photos/6800133/pexels-photo-6800133.jpeg?cs=srgb&dl=pexels-cottonbro-studio-6800133.jpg&fm=jpg" },
        { id: 3, title: "BACHELORATTE",  imageUrl: "https://www.njpartyshop.com/pub/media/wysiwyg/Bachelorette_Party_Decorations.jpg" }
    ]);

    // Function to add a new gallery item
    const addGalleryItem = () => {
        const newGalleryItem = {
            id: galleryItems.length + 1,
            title: "New Image",
            description: "New Description",
            imageUrl: "https://via.placeholder.com/150"
        };
        setGalleryItems([...galleryItems, newGalleryItem]);
    };

    // Function to delete a gallery item
    const deleteGalleryItem = (id) => {
        const updatedGalleryItems = galleryItems.filter(item => item.id !== id);
        setGalleryItems(updatedGalleryItems);
    };

    // Function to update gallery item details
    const updateGalleryItem = (id, updatedItem) => {
        const updatedGalleryItems = galleryItems.map(item => {
            if (item.id === id) {
                return updatedItem;
            }
            return item;
        });
        setGalleryItems(updatedGalleryItems);
    };

    return (
        <div>
        <Adminside/>
        <div className="admin-event-container">
            <h2 className="event-header">EVENTS</h2>
            <button className="add-button" onClick={addGalleryItem}>Add Events</button>
            <div className="image-grid">
                {galleryItems.map(item => (
                    <div key={item.id} className="event-card">
                        <img src={item.imageUrl} alt={item.title} />
                        <div className="event-details">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className="event-buttons">
                                <button onClick={() => deleteGalleryItem(item.id)}>Delete</button>
                                <button onClick={() => updateGalleryItem(item.id, { ...item, title: `${item.title} Updated` })}>Update</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}
