/* eslint-disable react/prop-types */
import React from 'react';
import './postListItem.css';


export default class PostListItem extends React.Component {
    render() {
        const {label, onDelete, onToogleImportant, onToogleLiked, important, like} = this.props;

        let classNames = 'app-list-item d-flex justify-content-between';
    
        if (important) {
            classNames +=' important'
        }

        if (like) {
            classNames +=' like'
        }

        return (
            <div className={classNames}>
            <span 
            className='app-list-item-label'
            onDoubleClick={onToogleLiked}>
                {label}
            </span>
            <div className='d-flex justify-content-center alighn-items-center'>
                <button onClick={onToogleImportant} type='button' className='btn-star btn-sm'>
                    <i className='fa fa-star'></i>
                </button>
                <button onClick={onDelete} type='button' className='btn-trash btn-sm'>
                    <i className='fa fa-trash-o'></i>
                </button>
                <i className='fa fa-heart'></i>
            </div>
        </div>
        )
    }
}


