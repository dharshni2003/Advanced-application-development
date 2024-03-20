import React, { useState } from 'react';
import './Adminvenue.css';
import Adminside from './Adminside';

export default function Adminvenue() {
    const [galleryItems, setGalleryItems] = useState([
        { id: 1, title: "MINI", description: "Price:3Lakhs", imageUrl: "https://images.unsplash.com/photo-1542665952-14513db15293?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFucXVldCUyMGhhbGx8ZW58MHx8MHx8fDA%3D" },
        { id: 2, title: "MEDIUM", description: "Price:5Lakhs", imageUrl: "https://www.shutterstock.com/image-photo/wedding-hall-other-function-facility-260nw-487246921.jpg" },
        { id: 3, title: "MEGA", description: "Price:7Lakhs", imageUrl: "https://images.foody.vn/res/g1/59/s800/foody-gala-royale-814-636800690308615155.jpg" }
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
        <div className="admin-venue-container">
            <h2 className="venue-header">VENUE</h2>
            <button className="add-button" onClick={addGalleryItem}>Add Venue</button>
            <div className="image-grid">
                {galleryItems.map(item => (
                    <div key={item.id} className="venue-card">
                        <img src={item.imageUrl} alt={item.title} />
                        <div className="venue-details">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className="venue-buttons">
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
