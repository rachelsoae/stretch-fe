import './Card.css';


const Card = ({image, quote, type, font}) => {
  // const backgroundImage = 'https://www.mattpaynephotography.com/images/960/San-Juan-Mountains-Sunrise-Panorama.webp' 
  return (
    <article className='frame'>
      <div 
        className='img' 
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }} 
      >
        <p 
          className='quote'
          style={{fontSize: `${font}`}}
        >{`${quote}`}</p>
      </div>
      <div className='emojis'>
        <button className='card-button'>{type === 'wholesome' ? '🥹' : '😈'}</button>
      </div>
    </article>
  )
}

export default Card;