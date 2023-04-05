import TableDatail from './TableDatail';
import './ModalStyle.scss'

function ModalDatail({ openModal, dataC, handleOpenModal }) {

  return (
    <>
      {openModal && (
        <div className="modalContainer" onClick={handleOpenModal}>
              <div>
              {<TableDatail dataC={dataC} />}
              </div>
        </div>
      )}
    </>
  );
}

export default ModalDatail;