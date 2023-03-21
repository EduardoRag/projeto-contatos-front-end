import './styles.css';
import Header from '../../components/header/Header';
import DataTable from '../../components/table/Table';

const MainPage = () => {
    return (
        <>
            <Header />
            <div className='main-content-div'>
                <button className='add-btn'>Adicionar</button>
                <DataTable />
            </div>
        </>
    )
}

export default MainPage;