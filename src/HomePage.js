import React from "react";
import './HomePage.css'
// import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { db } from './firebase';  // Import Firebase Firestore instance
import { collection, addDoc } from 'firebase/firestore'
import { Link } from "react-router-dom";

const HomePage = () => {
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
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero">
                <h2>Smart Investment Choices for Your Family’s Future</h2>
                <p>Expert advice tailored for middle-class families to achieve financial stability and growth.</p>
                <button>Get Started</button>
            </section>

            {/* Features Section */}
            <section className="features" id="features">
                <h2>Key Features for Middle-Class Families</h2>
            <div className="feature-cards">
            <div className="card">
                <h3>Budget-Friendly Investment Plans</h3>
                <p>Choose affordable investment options that fit within your family’s budget.</p>
            </div>
            <div className="card">
                <h3>Education Savings</h3>
                <p>Learn how to save for your children’s education without straining your monthly income.</p>
            </div>
            <div className="card">
                <h3>Retirement Planning</h3>
                <p>Plan your retirement with easy-to-follow strategies, designed to secure your future.</p>
            </div>
             </div>
            </section>

            {/* Investment Tips Section */}
            <section className="investment-tips" id="investment-tips">
                <h2>Investment Tips for Middle-Class Families</h2>
                <ul>
                <li>Start saving small amounts regularly to create a habit of investing.</li>
                <li>Set aside an emergency fund before diving into other investments.</li>
                <li>Consider low-risk options like bonds or mutual funds for long-term stability.</li>
                <li>Use tax-saving instruments such as retirement accounts and health savings plans.</li>
                <li>Involve the whole family in budgeting and financial decisions to build financial literacy.</li>
                </ul>
            </section>

      {/* About Us Section */}
            <section className="about" id="about">
                <h2>About InvestmentGuidance</h2>
                <p>
                At InvestmentGuidance, we aim to provide clear and accessible financial guidance for middle-class families.
                Our mission is to help you achieve financial goals, whether it’s saving for a home, your children’s education,
                or retirement. We believe that financial success is within everyone’s reach, no matter the income level.
                </p>
            </section>

            {/* <Link to='/contact'> */}
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
    {/* </Link> */}
      {/* Footer */}
      <footer className="footer">
        <p>© 2024 FamilyFinance. Empowering your financial future.</p>
      </footer>
    </div>
    )
}

export default HomePage