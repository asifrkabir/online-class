import React from 'react';
import './Card.css'

const Card = (props) => {

    const { name, description, price } = props.course;

    return (
        <div className="card-container">

            <div className="card">
                <img className="card-img-top" src="https://picsum.photos/id/1042/300/200" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">Price: $ {price}</p>
                    <button className="btn btn-primary" onClick={() => {
                        props.handleAddCourse(props.course);
                    }}>Enroll Now</button>
                </div>
            </div>

        </div>
    );
};

export default Card;