import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card" >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    } >
                        <span className="badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>{source}</span>
                    </div>
                    <img src={!imageUrl ? "https://images.hindustantimes.com/img/2022/03/05/1600x900/Russia-Ukraine-War-Disinformation-0_1646441769048_1646441818799.jpg" : imageUrl} className="card-img-top" alt="..." onError={event => {
                        event.target.src = "https://img.freepik.com/free-photo/gray-painted-background_53876-94041.jpg?w=360"
                        event.onerror = null
                    }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {date}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
// {new Date(date).toGMTString()}