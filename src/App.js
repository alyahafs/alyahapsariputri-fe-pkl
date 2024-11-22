import React from 'react';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <AddBook />
            <BookList />
        </div>
    );
}

export default App;
