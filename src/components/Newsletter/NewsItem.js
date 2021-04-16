import React from 'react'

export default function NewsItem( props ) {
  const handleClick = (e) => {
    props.toggleNewsletter(props.content.id)
  }

  return (
    <div className="news-item">
      <div className="news-img">
        {
          props.content.url
            ? <img alt={props.content.title} src={props.content.url}/>
            : null
        }
      </div>
      <div className="news-content">
        <h3 className="news-title">{props.content.title}</h3>
        <p className="news-text">{props.content.content}</p>
      </div>
      <label className="news-select">
        <input onClick={handleClick} className="checkbox" type="checkbox"></input>
        <span></span>
      </label>
    </div>
  )
}
