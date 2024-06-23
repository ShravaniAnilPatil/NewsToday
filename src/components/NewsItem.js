import React from 'react';

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl , author, date, source} = props;
  return (
    <div className="card my-3">
       <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left: '90%' , zIndex: 1}}> {source}
         </span>
      <img 
        src={!imageUrl? "https://static.toiimg.com/thumb/msid-110658489,width-1070,height-580,imgsize-88214,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg":imageUrl} 
        className="card-img-top img-fluid" 
        alt="news" 
      
        style={{ width: '100%', height: '220px', objectFit: 'cover' }} 
      />
      <div className="card-body" >
     
        <h5 className="card-title">{title}
        
       </h5>
        
        <p className="card-text">{description}...</p>
        <p className='card-text' ><small className="text-muted"> By {author? author:"unknown"} on { new Date(date).toGMTString()} </small> </p>
        <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
