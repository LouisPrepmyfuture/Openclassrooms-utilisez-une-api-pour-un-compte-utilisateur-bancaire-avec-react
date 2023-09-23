import React from 'react';

function CardImg({imgSrc, imgAlt, title, text}) {
	
    return (
		<div className="card">
			<img className="card-img" src={imgSrc} alt={imgAlt}/>
			<div className="card-body">
				<h3 className="card-title">{title}</h3>
				<p>{text}</p>
			</div>
		</div>
		)
}

export default CardImg ;