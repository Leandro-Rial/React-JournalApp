import React from 'react'
import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="note__content">
                <input type="text" placeholder="Best Place" className="notes__title-input" autoComplete="off" />
                <textarea placeholder="In my dreams" className="notes__textarea"></textarea>

                <div className="notes__image">
                    <img src="https://s.france24.com/media/display/0851897a-e20a-11eb-b871-005056a97e36/07-10%20CA%20Foto%20Principal.jpeg" alt="messi" />
                </div>
            </div>
        </div>
    )
}

export default NoteScreen
