import React, { useState } from 'react'

const Book = ({ id, img, title, author, info, price, removeBook }) => {
  const [readAll, setReadAll] = useState(false)

  return (
    <article className='single-tour'>
      <img src={img} alt={title} />
      <footer>
        <div className='tour-info'>
          <div>
            <h4>{title}</h4>
            <h6 style={{ marginTop: '5px' }}>{author}</h6>
          </div>
          <h4 className='tour-price'>{price}</h4>
        </div>
        <p>
          {readAll ? info : `${info.substring(0, 200)}...`}
          <button className='btn-readmore' onClick={() => setReadAll(!readAll)}>
            &nbsp;
            {readAll ? 'فقرة أصغر' : 'فقرة كاملة'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeBook(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  )
}
export default Book
