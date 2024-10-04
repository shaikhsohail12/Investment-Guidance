import React from 'react';
import './Contact.css'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { db } from './firebase';  // Import Firebase Firestore instance
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
        reset,
      } = useForm();
    
      // Function to handle form submission
      const onSubmit = async (data) => {
        try {
          // Store the message in Firestore
          const docRef = await addDoc(collection(db, "messages"), {
            name: data.name,
            email: data.email,
            message: data.message,
            timestamp: new Date(),  // Optional: Add timestamp
          });
          
          console.log("Message sent to Firestore with ID: ", docRef.id);
          reset();  // Reset the form after successful submission
        } catch (e) {
          console.error("Error adding message to Firestore: ", e);
        }
      };
    return(
    <section className="contact-us-section">
          <div className="container">
          <h2>Contact Us</h2>
        {isSubmitSuccessful ? (
          <div className="success-message">
            <p>Thank you! We have received your message.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <span className="error-message">{errors.name.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && <span className="error-message">{errors.email.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Your Message"
                {...register('message', { required: 'Message is required' })}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message.message}</span>}
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
)}

export default Contact