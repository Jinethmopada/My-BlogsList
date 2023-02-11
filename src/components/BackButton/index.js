import './index.css'
import {Link} from 'react-router-dom'

const BackButton = () => (
  <Link to="/" className="blog-link">
    <div className="button-container">
      <button className="btn" type="button">
        Back
      </button>
    </div>
  </Link>
)

export default BackButton
