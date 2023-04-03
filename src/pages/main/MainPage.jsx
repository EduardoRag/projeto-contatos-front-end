import './styles.css';
import Header from '../../components/header/Header';
import DataTable from '../../components/table/Table';
import AddContactModal from '../../components/AddContactModal/AddContactModal';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../configs/api';
import { getItem, clear } from '../../functions/token';

const MainPage = () => {
    const token = getItem('token');
    const navigate = useNavigate();
    const [allContacts, setAllContacts] = useState([]);

    const getContacts = async () => {

        try {
            const response = await api.get('/contatos', {
                headers: {
                    Authorization: token
                }
            });

            setAllContacts(response.data);
        } catch (error) {
            if (error.response.data === 'Não autorizado') {
                clear();
                return navigate('/');
            }

            return console.log(error.response.data);
        }
    }

    useEffect(() => {
        getContacts();
    }, [allContacts]);

    return (
        <>
            <Header />
            <div className='main-content-div'>
                <AddContactModal
                    allContacts={allContacts}
                    setAllContacts={setAllContacts}
                />
                <DataTable
                    allContacts={allContacts}
                    setAllContacts={setAllContacts}
                />
            </div>
        </>
    )
}

export default MainPage;