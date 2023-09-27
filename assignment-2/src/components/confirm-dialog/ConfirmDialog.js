import closeIcon from '../../assets/close.svg';
import './ConfirmDialog.css';

const ConfirmDialog = ({ close, item, deleteItem }) => {
    return (
        <div id="confirm-dialog" className="modal">
            <div className="content">
                <button className="close-btn" type="button" onClick={close}>
                    <div class="close">
                        <img src={closeIcon} alt="close" class="close-img" />
                    </div>
                </button>
                <h2>Delete Book</h2>
                <p>Do you want to delete <b>{item.name}</b> book?</p>
                <div className="button-group">
                    <button type="button" className="btn btn-secondary" onClick={() => deleteItem(item)}>Delete</button>
                    <button type="button" className="btn btn-primary" onClick={close}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmDialog;