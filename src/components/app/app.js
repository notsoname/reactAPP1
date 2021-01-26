/* eslint-disable no-unused-vars */
import React from 'react';
import AppHeader from '../appHeader/appHeader';
import PostAddForm from '../postAddForm/postAddForm';
import PostList from '../postList/postList';
import PostStatusFilter from '../postStatusFilter/postStatusFilter';
import SearchPanel from '../searchPanel/searchPanel';
import './app.css'
import styled from 'styled-components';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

/* const StyledAppBlock = styled(AppBlock)`
  background-color: grey;
` */

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {label: 'Going to learn React', important: false, like:false, id:1},
        {label: 'That is so good', important: false, like:false, id:2},
        {label: 'I need a break', important: false, like:false, id:3}
      ],
      term: '',
      filter: 'all'
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToogleImportant = this.onToogleImportant.bind(this);
    this.onToogleLiked = this.onToogleLiked.bind(this);
    this.onUpdateSeatch = this.onUpdateSeatch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);

    this.maxId = 4;
  }

  deleteItem(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);

/*    const before = data.slice(0, index);
      const after = data.slice(index + 1); */

      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

      return {
        data: newArr
      }
    });
  }

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  onToogleImportant(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);

      const old = data[index];
      const newItem = {...old, important: !old.important}
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      
      return {
        data: newArr
      }
    })
  }

  onToogleLiked(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      
      const old = data[index];
      const newItem = {...old, like: !old.like}
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

      return {
        data: newArr
      }
    })
  }

  searhPost(items, term) {
    if (term.length === 0) {
      return items
    }
    return items.filter((item) => {
      return item.label.indexOf(term) > -1
    })
  }

  onUpdateSeatch(term) {
    this.setState({term})
  }

  filterPost(items, filter) {
    if (filter === "like") {
      return items.filter(item => item.like)
    } else {
      return items
    }
  }

  onFilterSelect(filter) {
    this.setState({filter})
  }

  render() {
    const {data, term, filter} = this.state
    const liked = data.filter(item => item.like).length;
    const allPosts = data.length

    const visiblePosts = this.filterPost(this.searhPost(data, term), filter);

    return (
      <AppBlock>
        <AppHeader 
        liked={liked}
        allPosts={allPosts}/>
        <div className='search-panel d-flex'>
          <SearchPanel onUpdateSeatch={this.onUpdateSeatch}/>    
          <PostStatusFilter 
          filter={filter}
          onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList 
        posts={visiblePosts}
        onDelete={this.deleteItem}
        onToogleImportant={this.onToogleImportant}
        onToogleLiked={this.onToogleLiked}/>
        <PostAddForm
        onAdd={this.addItem}/>
      </AppBlock>
    )
  }
}




