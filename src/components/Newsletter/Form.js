import React from 'react'

export default function Form(props) {
  return (
    <div className="newsletter-form-container">
      <form className="newsletter-form">
        <div className="input-group">
          <input onChange={props.handleEmail} className="email" type="text" placeholder="Enter email"/>
        </div>
        <div className="input-group">
          {
            props.emailValid
              ? <input onClick={ props.handleSubmit }className="subscribe-btn" type="submit" value="SUBSCRIBE"/>
              : <input onClick={ props.handleSubmit }className="subscribe-btn" type="submit" value="SUBSCRIBE" disabled/>
          }
        </div>
        <div className="input-group">
          <input onClick={props.handleConsent} className="consent" type="checkbox"/>
          <label className="consent-label">I do not want to receive information about future newsletters.</label>
        </div>
      </form>
    </div>
  )
}
