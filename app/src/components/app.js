import _ from "lodash";
import React, { Component } from "react";
import * as actions from '../actions';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title.rendered}<br/>
            {post.content.plaintext}
          </Link>
        </li>
      );
    });
  }

  render() {
    console.log('POST_SUBMITTER', POST_SUBMITTER);
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.data
  };
}

export default connect(mapStateToProps, actions)(PostsIndex);
