import './CardBackground.css'

const CardBackground = ({
  title,
  description,
  image,
  alt
}) => {
  return (
    <div className='card_background-container'>

      <div className='card_background-container_info'>

        <div className='card_background-container_text'>
          <h3>
            {title}
          </h3>
          <p>
            {description}
          </p>
        </div>

        <div className='card_background-container_image'>
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>

  )
}

export default CardBackground