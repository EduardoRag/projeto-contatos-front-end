import { Link } from 'react-router-dom';
import './styles.css';
import LoginPageImage from '../../assets/login-page.png';

const LoginPage = () => {
    return (
        <div className='content-div'>
            <img
                src={LoginPageImage}
                alt='Login page'
            />
            <div className='form-div'>
                <span>Bem Vindo</span>
                <h1> Faça o login com sua conta</h1>
                <form>
                    <input type="email" required placeholder='E-mail' />
                    <input type="password" required placeholder='Senha' />
                    <button>LOGIN</button>
                </form>

                <p>Não tem cadastro? <Link to='/register'>Clique aqui!</Link> </p>
            </div>
        </div>
    )
}

export default LoginPage;