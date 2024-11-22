import React, { useState } from 'react';
import axios from 'axios';

function AddBook() {
    const [form, setForm] = useState({
        title: '',
        author: '',
        published_year: '',
        genre: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/books', form)
            .then(response => {
                alert('Buku berhasil ditambahkan');
            })
            .catch(error => {
                console.error('Terjadi kesalahan:', error);
            });
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Tambah Buku</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input 
                        name="title" 
                        className="form-control" 
                        placeholder="Judul Buku" 
                        onChange={handleChange} 
                    />
                </div>
                <div className="mb-3">
                    <input 
                        name="author" 
                        className="form-control" 
                        placeholder="Penulis" 
                        onChange={handleChange} 
                    />
                </div>
                <div className="mb-3">
                    <input 
                        name="published_year" 
                        className="form-control" 
                        type="number" 
                        placeholder="Tahun Terbit" 
                        onChange={handleChange} 
                    />
                </div>
                <div className="mb-3">
                    <input 
                        name="genre" 
                        className="form-control" 
                        placeholder="Genre" 
                        onChange={handleChange} 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Tambah</button>
            </form>
        </div>
    );
}

export default AddBook;