import React, { useState } from 'react';
import './Adminmenu.css';
import Adminside from './Adminside';

export default function Adminmenu() {
    const [galleryItems, setGalleryItems] = useState([
        { id: 1, title: "NON-VEG", description: "Price:20K", imageUrl: "https://thrissurcateringservices.com/wp-content/uploads/2013/05/usthad-non-vegetarian-menu-900pxl22222222222221.jpg" },
        { id: 2, title: "COMBO", description: "Price:70K", imageUrl: "https://i.pinimg.com/736x/f1/66/7d/f1667da395452fb890f134b5612150bb.jpg" },
        { id: 3, title: "VEG", description: "Price:50K", imageUrl: "https://thrissurcateringservices.com/wp-content/uploads/2013/05/usthad-vegetarian-menu-900pxl111111111111111.jpg" }
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
        <div className="admin-menu-container">
            <h2 className="menu-header">MENU</h2>
            <button className="add-button" onClick={addGalleryItem}>Add Menu</button>
            <div className="image-grid">
                {galleryItems.map(item => (
                    <div key={item.id} className="menu-card">
                        <img src={item.imageUrl} alt={item.title} />
                        <div className="menu-details">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className="card-buttons">
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
