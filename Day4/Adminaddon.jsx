import React, { useState } from 'react';
import './Adminaddon.css';
import Adminside from './Adminside';

export default function Admindeco() {
    const [galleryItems, setGalleryItems] = useState([
        { id: 1, title: "MAGIC SHOW", description: "Price:4K", imageUrl: "https://www.dynamicevents.ie/static/a547ca20f0abbab54a162b4f9da8b56d/fb60a/online_magic_show_featured.jpg" },
        { id: 2, title: "DJ", description: "Price:20K", imageUrl: "https://www.billboard.com/wp-content/uploads/2023/04/dj-console-1260.jpg?w=942&h=623&crop=1" },
        { id: 3, title: "FOOD STALL", description: "Price:50K", imageUrl: "https://ajeygore.in/assets/images/hawker_stall.jpg" }
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
        <div className="admin-add-container">
            <h2 className="menu-header">ADDONS</h2>
            <button className="add-button" onClick={addGalleryItem}>Add Addons</button>
            <div className="image-grid">
                {galleryItems.map(item => (
                    <div key={item.id} className="deco-card">
                        <img src={item.imageUrl} alt={item.title} />
                        <div className="add-details">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className="deco-buttons">
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
