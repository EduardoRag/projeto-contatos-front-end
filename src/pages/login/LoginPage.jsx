import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import LoginPageImage from '../../assets/login-page.png';
import useFormContext from '../../hooks/useFormContext';
import api from '../../configs/api';
import { setItem } from '../../functions/token';

const LoginPage = () => {
    const { error, setError, send, setSend } = useFormContext();
    const [loginForm, setLoginForm] = useState({
        email: '',
        senha: ''
    });
    const navigate = useNavigate();

    const loginSubmitHandle = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (!loginForm.email || !loginForm.senha) {
            setSend(true);
            setError('Todos os campos devem ser preenchidos');

            setTimeout(() => {
                setSend(false)
                setError('');
            }, 2000);

            return;
        }

        try {
            const response = await api.post('/login', { ...loginForm });

            const user = response.data.usuario

            setItem('token', response.data.token);
            setItem('user', JSON.stringify(user));

            navigate('/main');
        } catch (error) {
            setSend(true);
            setError(error.response.data);

            setTimeout(() => {
                setSend(false)
                setError('');
            }, 2000);
            return;
        }
    }

    const loginOnChangeHandle = (e) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    }

    return (
        <div className='content-div'>
            <img
                src={LoginPageImage}
                alt='Login page'
            />
            <div className='form-div'>
                <span>Bem Vindo</span>
                <h1> Faça o login com sua conta</h1>
                <form
                    onSubmit={loginSubmitHandle}
                >
                    <input
                        name='email'
                        type="email"
                        required
                        placeholder='E-mail'
                        onChange={(e) => loginOnChangeHandle(e)}
                    />
                    <input
                        name='senha'
                        type="password"
                        required
                        placeholder='Senha'
                        onChange={(e) => loginOnChangeHandle(e)}
                    />

                    <div className='btn-div'>
                        {send && <strong
                            className={error ? 'notification error' : 'notification success'}
                        >
                            {error ? error : 'Cadastro realizado com sucesso'}
                        </strong>}
                        <button>
                            LOGIN
                        </button>
                    </div>
                </form>

                <p>Não tem cadastro? <Link to='/register'>Clique aqui!</Link> </p>
            </div>
        </div>
    )
}

export default LoginPage;