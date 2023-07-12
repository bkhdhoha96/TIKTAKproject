import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  background-color: #f1f1f1;
  border-radius: 5px;
  margin: 2rem;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

const About = () => {
  return (
    <div>
      <Section>
        <Heading>TikTak -  The Fastest Home Delivery</Heading>
        <Paragraph>At Tik Tak , our passion is to provide you with the best fresh and flavorful food products, delivered directly to your doorstep. We believe in the importance of eating well and supporting healthy eating habits.</Paragraph>
        <Paragraph>Our story began 2 years ago when our founder Dhoha and Rakia, decided to create an online platform to make access to quality food easier. Coming from a family of farmers, he grew up appreciating fresh, locally grown produce. He wanted to share this passion with as many people as possible and make fresh products accessible to everyone.</Paragraph>
        <Paragraph>At Tik Tak, we take pride in our meticulous product selection. We work closely with local producers and trusted suppliers to offer you fresh seasonal fruits and vegetables, high-quality meats and fish, artisanal dairy products, and much more.</Paragraph>
        <Paragraph>We understand the paramount importance of freshness. That's why we source our products daily to ensure optimal quality. Our team of food experts ensures that each item meets our stringent standards before it is made available to you.</Paragraph>
        <Paragraph>At Tik Tak, we believe that food should not only be a necessity but also a pleasure. That's why we offer a wide variety of choices to satisfy all tastes and preferences. Whether you are looking for fresh ingredients for your favorite recipes or want to discover new gourmet products, our website is filled with options to awaken your taste buds.</Paragraph>
        <Paragraph>We are committed to providing you with an exceptional online shopping experience. Our user-friendly website allows you to navigate easily through our product categories, read detailed descriptions, and place your order with just a few clicks. We also provide fast and reliable delivery to ensure your products arrive fresh and on time.</Paragraph>
        <Paragraph>At Tik Tak, we value the trust of our customers. That's why we guarantee the security of your personal data and adhere to the highest safety standards. Your satisfaction is our top priority, and our customer service team is always available to answer your questions and provide personalized assistance.</Paragraph>
        <Paragraph>Join us now and discover a new way to shop for groceries online. With Tik Tak, freshness and quality are just a click away. Make every meal a delicious and healthy experience!</Paragraph>
      </Section>
    </div>
  );
};

export default About;
