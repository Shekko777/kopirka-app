import './Modal.css';

export default function Modal ({opened, handleCloseModal}) {
  return (
    <div className={opened ? 'modal modal_opened' : 'modal'}>
      <div className="modal__container">
        <button className="modal__close-button" onClick={handleCloseModal}>Закрыть</button>
        <h2 className="modal__title">Модалка</h2>
      </div>
    </div>
  )
}