import React from 'react'
import '../css/modal.css'

function Modal({ open, children, onClose }) {
    if(!open) return null
    return (
        <div className='modal' onClick={onClose}>
            <button className="closeModal" onClick={onClose}>
                <i className='fa-solid fa-x'/>
            </button>
            {children}
        </div>
    )
}

export default Modal
