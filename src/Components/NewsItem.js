import React from 'react';

const NewsItem =(props)=>{
    
        let {title,description,imageUrl,newsUrl}=props
        return (
            <div>
                <div className="card" >
                    <img src={imageUrl?imageUrl:"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>

            </div>
        );
    
}

export default NewsItem;
