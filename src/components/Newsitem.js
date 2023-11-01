import React, { Component } from 'react'

export class Newsitem extends Component {
   
    render() {
        let {title,discription,imageUrl,newsUrl,author,date,source} = this.props; 
        return (
            
            <div className='my-3'>
                <div className="card " style={{marginTop:'30px'}}>
                <h4><span className="badge bg-secondary">{!source?"unknown":source}</span></h4>
                    <img src={!imageUrl?"https://hips.hearstapps.com/hmg-prod/images/legacy-fre-image-placeholder-1642515924.png?resize=980:*":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{discription}</p>
                            <p class="card-text"><small class="text-body-secondary">By {author} at {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} target="_blank" className="btn btn-sm btn-secondary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
