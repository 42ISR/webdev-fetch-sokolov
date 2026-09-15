import { useEffect } from "react";
import { useParams } from "react-router-dom";
const Book = () => {
    const {id} = useParams()
    // Где хранить книжку
    
    // Обработать состояние загружки, ошибки и результата
    useEffect(() => {
        // Написать запрос
    }, [])

    if (isLoading) return <Loader label="Загружаем книжку"/>

    return (
        <section className="book-page">
            <div className="book-page-cover">
                <img
                    id="bookCover"
                    src="https://covers.openlibrary.org/b/id/8231856-L.jpg"
                    alt=""
                />
            </div>
            <div className="book-page-content">
                <div className="section-label">КНИГА</div>
                <h1 id="bookTitle"></h1>
                <div className="book-page-author" id="bookAuthor">
                    Antoine de Saint-Exupéry
                </div>
                <div className="book-meta">
                    <span id="bookYear"></span>
                    <span>Fiction</span>
                </div>
                <div className="description">
                    <h3>Об этой книге</h3>
                    <p id="bookDescription">
                        The Little Prince is a poetic tale about a young prince
                        who travels from planet to planet and learns about
                        friendship, love and the strange behavior of adults.
                    </p>
                </div>
                <div className="modal-actions">
                    <button className="primary-button">Читать</button>
                    <button className="secondary-button">♡ Сохранить</button>
                </div>
            </div>
        </section>
    )
}

export default Book