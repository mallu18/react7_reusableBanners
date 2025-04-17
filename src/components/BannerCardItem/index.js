// Write your code here.
import './index.css'

const BannerCardItem = ({bannerDetails}) => {
  const {headerText, description, className} = bannerDetails

  return (
    <li className={`banner-card ${className}`}>
      <h1 className="banner-header">{headerText}</h1>
      <p className="banner-description">{description}</p>
      <button className="banner-button" type="submit">
        Show More
      </button>
    </li>
  )
}

export default BannerCardItem
