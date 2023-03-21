import './styles.css';
import LogoutArrow from '../../assets/logout-arrow.png';

const Header = () => {
    return (
        <header>
            <h2>KONTACTS</h2>
            <img src={LogoutArrow} className="logout" />
        </header>
    )
}

export default Header;