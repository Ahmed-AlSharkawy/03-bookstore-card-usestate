import React, { useState, useEffect } from 'react'
import Loading from './Loading'
// import Tours from './Tours'
import booksList from './booksList'
import Books from './Books'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

// const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [books, setBooks] = useState([])

  const removeBook = (id) => {
    const newBooks = books.filter((book) => book.id !== id)
    setBooks(newBooks)
  }

  // const [tours, setTours] = useState([])

  /*  
  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const toursList = await response.json()

      setTours(toursList)
    } catch (error) {
      alert(error)
    }
    setLoading(false)
  }
  */

  useEffect(() => {
    // fetchTours()
    setLoading(false)
    setBooks(booksList)
  }, [])

  if (loading)
    return (
      <main>
        <Loading />
      </main>
    )

  if (books.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No books left</h2>
          <button className='btn' onClick={() => setBooks(booksList)}>
            Refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Books books={books} removeBook={removeBook} />
      {/* <Tours tours={tours} /> */}
    </main>
  )
}

export default App
