import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/books')
            .then(response => {
                setBooks(response.data); // Menyimpan data buku ke state
            })
            .catch(error => console.error('Terjadi kesalahan:', error));
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Daftar Buku</h1>
            <ul className="list-group">
                {books.length > 0 ? (
                    books.map(book => (
                        <li key={book.id} className="list-group-item">
                            <strong>{book.title}</strong> - {book.author} ({book.published_year})
                        </li>
                    ))
                ) : (
                    <li className="list-group-item">Tidak ada data buku.</li>
                )}
            </ul>
        </div>
    );
}

export default BookList;