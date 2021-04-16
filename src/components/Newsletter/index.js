import React, { useState, useContext } from 'react';
import NotifyContext from '../../context/NotifyContext';
import NewsItem from './NewsItem';
import Form from './Form';
import './newsletter.css';
const data = require('../../mock_data.json');

export default function Newsletter() {
  const notifyContext = useContext(NotifyContext);
  const [newsletters, setNewsletters] = useState([]);
  const [consent, setConsent] = useState(false);
  const [email, setEmail] = useState('');

  const toggleNewsletter = (newsletterId) => {
    if(newsletters.includes(newsletterId)){
      return setNewsletters( newsletters.filter( id => id !== newsletterId ? id : null ));
    }
    return setNewsletters( newsletters.concat(newsletterId) );
  }

  const isEmailValid = (email) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (pattern.test(email)) {
      return true;
    }
    return false;
  };
  
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleConsent = (e) => {
    setConsent(e.target.checked);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      consent: consent,
      newslettersToReceive: newsletters
    }

    // Fire post request
    setTimeout(() => {
      fakeRequest() ? notifyContext.notify(`Successfully subscribed to ${newsletters.length} newsletter(s).`) : notifyContext.notify('Failed to subscribe to newsletter.');
    }, 2000)
  }

  const fakeRequest = () => {
    const req = Math.floor(Math.random() * 2);
    return req
  }

  return (
    <div className="newsletter-container">
      <div className="newsletter-header">
        <h1>Newsletters</h1>
        <p>Select all the newsletters you'd like to receive</p>
      </div>
      <div className="news-item-container">
        {
          data.map( item => { 
            return <NewsItem 
                    toggleNewsletter={toggleNewsletter}
                    content={item}
                  />
          })
        }
      </div>
      <Form 
        handleEmail={handleEmail}
        handleConsent={handleConsent}
        handleSubmit={handleSubmit}
        emailValid={isEmailValid(email)}
      />
    </div>
  )
}
