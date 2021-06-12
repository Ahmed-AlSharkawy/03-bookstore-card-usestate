import React from 'react'
import Book from './Book'

const Books = ({ books, removeBook }) => {
  return (
    <section>
      <div className='title'>
        <h2>Our Books</h2>
        <div className='underline'></div>
      </div>
      <div>
        {books.map((book) => {
          return <Book key={book.id} {...book} removeBook={removeBook} />
        })}
      </div>
    </section>
  )
}

export default Books
