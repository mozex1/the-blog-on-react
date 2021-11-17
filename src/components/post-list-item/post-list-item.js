import React, { Component } from 'react';
import './post-list-item';

export default class PostListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            important: false,
            like: false,
        };
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);

    }

    onImportant() {
        this.setState(({important}) => ({
            important: !important,
        }));
    }
    onLike() {
        this.setState(({like}) => ({
            like: !like,
        }));
    }

    render() {
        const {label} = this.props;
        const {important, like} = this.state;

        let classNames = "app-list-item d-flex justify-content-between";

        if (important){
            classNames += " important";
        }
        if (like){
            classNames += " like";
        }
        return (
            <div className = {classNames}>
            <span
            onClick ={this.onLike}
            className = "app-list-item-label">
                {label}
            </span>
            <div className = "d-flex justify-content-center align-items-center">
                <button
                onClick={this.onImportant}
                type="button" 
                className="btn-star btn-sm icon">
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                    </i>
                </button>
                <button type="button" className="btn-trash btn-sm icon">
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </i>
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
            </div>
            </div>
        )
    }
}
