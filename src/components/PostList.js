import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

import UserHeader from './UserHeader'

class PostList extends React.Component {
  componentDidMount() {
    console.log("Hi, I'm an happy component")
    this.props.fetchPosts();
  }

  renderList() {
    const {posts} = this.props;
    if (!posts) {
      return null;
    }

    return posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>)
    });
  };

  render() {
    return (
      <div className="ui relaxed list">
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
