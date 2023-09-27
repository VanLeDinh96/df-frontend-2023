import React, { useEffect, useState } from "react";
import AddDialog from "../add-dialog/AddDialog";
import ConfirmDialog from "../confirm-dialog/ConfirmDialog";

const Action = {
    CREATE: 'CREATE',
    DELETE: 'DELETE',
}

const dataKey = 'bookList';
const limit = 10;
let action, selectedItem;

const Dashboard = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([]);
    const [searchKey, setSearchKey] = useState('');
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        try {
            const bookList = JSON.parse(localStorage.getItem(dataKey) || '[]');
            setData(bookList);
        } catch (e) {
            console.error('Cannot fetch data', e);
            throw e;
        }
    }, []);

    useEffect(() => {
        calculatePages();
    }, [data, searchKey]);

    const openModal = (selectedAction, item) => {
        selectedItem = item;
        action = selectedAction;
        setIsOpen(true);
    }

    const closeModal = () => {
        action = null;
        setIsOpen(false);
    }

    const renderModal = () => {
        if (action === Action.CREATE) {
            return <AddDialog close={closeModal} addItem={addItem} />
        } else if (action === Action.DELETE) {
            return <ConfirmDialog item={selectedItem} close={closeModal} deleteItem={deleteItem} />
        } else {
            return null;
        }
    }

    const updateData = data => {
        try {
            localStorage.setItem(dataKey, JSON.stringify(data));
        } catch (e) {
            console.error('Cannot update data', e);
            throw e;
        }
        setData(data);
        setPage(0);
    }

    const addItem = newItem => {
        const updatedData = [...data, newItem];
        updateData(updatedData);
        setIsOpen(false);
    }

    const deleteItem = item => {
        const idx = data.findIndex(i => i.name === item.name);
        if (idx === -1) {
            return;
        }
        const updatedData = [...data];
        updatedData.splice(idx, 1);
        updateData(updatedData);
        setIsOpen(false);
    }

    const filterData = () => {
        return data.filter(i => i.name.toLowerCase().includes(searchKey.toLowerCase()));
    }

    const calculatePages = () => {
        const filteredData = filterData();
        const numberOfPages = Math.ceil((filteredData.length) / limit);
        setTotal(numberOfPages);
    }

    const renderItems = () => {
        const filteredData = filterData();
        const pagedData = filteredData.slice(page * limit, (page + 1) * limit);
        return pagedData.map(i => {
            return (
                <tr key={i.name}>
                    <td colSpan={2}>{i.name}</td>
                    <td>{i.author}</td>
                    <td>{i.topic}</td>
                    <td>
                        <button className="btn btn-link" type="button"
                            onClick={() => openModal(Action.DELETE, i)}><span>Delete</span></button>
                    </td>
                </tr>
            )
        });
    }

    return (
        <main>
            <div className="container">
                <section className="toolbar">
                    <input type="text" placeholder="Search books" aria-label="search-box" id="searchBox"
                        value={searchKey} onChange={(e) => setSearchKey(e.target.value)} />
                    <button className="btn btn-primary" type="button" onClick={() => openModal(Action.CREATE)}>Add
                        Book
                    </button>
                </section>
                <table className="main-content">
                    <thead>
                        <tr>
                            <th colSpan={2}>Name</th>
                            <th>Author</th>
                            <th>Topic</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderItems()}
                    </tbody>
                </table>
                <div className="pagination">
                    {
                        Array.from({ length: total }, (v, i) => <button
                            className={"btn btn-link" + (i === page ? ' active' : '')}
                            type="button" onClick={() => setPage(i)} key={i}>{i + 1}</button>)
                    }
                </div>
            </div>

            {modalIsOpen ?
                renderModal()
                : null}
        </main>
    );
}

export default Dashboard;
