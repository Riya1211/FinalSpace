import Logo from '../img/logo.png';
import React, { Component } from 'react';



class CbaseAPI extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: []
      }
    }

    async componentDidMount(){
        const url = 'https://finalspaceapi.com/api/v0/location'
        const res = await fetch(url);
        const posts = await res.json();
        console.log(posts);
        this.setState({ posts })
    }
  render() {

    const { posts } = this.state;
    return (
        <>
          <div className='logo-container'>
            <img src={Logo} className='logo'/>
          </div>
          <div className='space-container'>

            {posts && posts.map(post => 
            <div key={post.id} className='space'>
                <div className='img-container'>
                    <img src={post.img_url} alt={post.name}/>
                </div>
                <div className='info'>
                    <h3 className='name'>Name: {post.name}</h3>
                    <h3 className='inhabitants'>Inhabitants: {post.inhabitants[0]}</h3>
                    <span className='type'>Type: {post.type}</span>
                </div>
            </div>
            )}
          </div>
        </>
    )
  }
}

export default CbaseAPI