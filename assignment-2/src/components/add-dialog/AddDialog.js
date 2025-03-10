import closeIcon from '../../assets/close.svg';
import './AddDialog.css';

const AddDialog = ({ close, addItem }) => {

    function onAddItem(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        const item = {
            name: formData.get('name'),
            author: formData.get('name'),
            topic: formData.get('topic'),
        }
        addItem(item);
    }

    return (
        <div id="add-modal" className="modal">
            <div className="content">
                <button className="close-btn" type="button" onClick={close}>
                    <div class="close">
                        <img src={closeIcon} alt="close" class="close-img" />
                    </div>
                </button>
                <h2>Add Book</h2>
                <form id="addNewForm" onSubmit={onAddItem}>
                    <label htmlFor="name">Name</label><br />
                    <input id="name" name="name" type="text" /><br /><br />

                    <label htmlFor="author">Author</label><br />
                    <input id="author" name="author" type="text" /><br /><br />

                    <label htmlFor="topic">Topic</label><br />
                    <select id="topic" name="topic">
                        <option value="Programming">Programming</option>
                        <option value="Database">Database</option>
                        <option value="Frontend">Front end</option>
                        <option value="Backend">Back end</option>
                        <option value="Fullstack">Fullstack</option>
                        <option value="DevOps">DevOps</option>
                        <option value="AI">AI</option>
                    </select><br /><br />

                    <div className="button-group">
                        <button type="submit" className="btn btn-primary">Create</button>
                    </div>
                </form>

            </div>
        </div>

    )
}

export default AddDialog;