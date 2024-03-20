import React, { useState } from 'react';
import './Admindeco.css';
import Adminside from './Adminside';

export default function Admindeco() {
    const [galleryItems, setGalleryItems] = useState([
        { id: 1, title: "SIMPLE", description: "Price:4K", imageUrl: "https://media.istockphoto.com/id/1163718652/photo/delicious-wedding-reception-birthday-cake-on-a-background-balloons-party-decor-copy-space.jpg?s=612x612&w=0&k=20&c=Zml6qzgFd3sH7KQ4uFWKdqpy5qpKVKpVAV6xwVHIiyw=" },
        { id: 2, title: "CLASSY", description: "Price:20K", imageUrl: "https://www.deepamflowerdecorators.com/images/prettyPhotoImages/thumb_pic9.jpg" },
        { id: 3, title: "GRAND", description: "Price:50K", imageUrl: "https://cdn0.weddingwire.in/vendor/0675/3_2/960/jpg/wedding-decoration-hd-decor-wedding-decor-3_15_360675-160983135646038.jpeg" }
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
        <div className="admin-deco-container">
            <h2 className="menu-header">DECORATION</h2>
            <button className="add-button" onClick={addGalleryItem}>Add Decorations</button>
            <div className="image-grid">
                {galleryItems.map(item => (
                    <div key={item.id} className="deco-card">
                        <img src={item.imageUrl} alt={item.title} />
                        <div className="deco-details">
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
