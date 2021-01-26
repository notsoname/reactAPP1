/* eslint-disable react/prop-types */
import React from 'react';
import PostListItem from '../postListItem/postListItem';
import { ListGroup } from 'reactstrap';
import './postList.css'


const PostList = ({posts, onDelete, onToogleImportant, onToogleLiked}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item
        return (
            <li key={id} className='list-group-item'>
                <PostListItem 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToogleLiked={() => onToogleLiked(id)}
                onToogleImportant={() => onToogleImportant(id)}/>
            </li>
        )
    });

    return (
        <ListGroup className='app-list'>
            {elements}
        </ListGroup>
    )
}

export default PostList;