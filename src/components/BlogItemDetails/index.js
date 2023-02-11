import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import BackButton from '../BackButton'

class BlogItemDetails extends Component {
  state = {blogItem: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItem()
  }

  getBlogItem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogItem: updatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogItem} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogItem
    return (
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>

        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
        <div className="button-container">
          <BackButton />
        </div>
      </div>
    )
  }

  onRenderLoader = () => {
    ;<Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blog-container">
        {isLoading ? this.onRenderLoader() : this.renderBlogItemDetails()}
      </div>
    )
  }
}

export default BlogItemDetails
