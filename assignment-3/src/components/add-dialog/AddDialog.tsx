import React, { FormEvent } from "react";
import closeIcon from '../../assets/close.svg';
import './AddDialog.css';

interface AddDialogProps {
    close: () => void;
    addItem: (item: { name: string; author: string; topic: string }) => void;
}

const AddDialog: React.FC<AddDialogProps> = ({ close, addItem }) => {

    function onAddItem(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        const item = {
            name: formData.get('name') as string,
            author: formData.get('author') as string,
            topic: formData.get('topic') as string,
        }
        addItem(item);
    }

    return (
        <div id="add-modal" className="modal">
            <div className="content">
                <button className="close-btn" type="button" onClick={close}>
                    <div className="close">
                        <img src={closeIcon} alt="close" className="close-img" />
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
    );
}

export default AddDialog;
