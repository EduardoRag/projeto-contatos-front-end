import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import RegisterPageImage from '../../assets/register-page.png';
import registerSubmitHandle from '../../functions/registerSubmitHandle';
import useFormContext from '../../hooks/useFormContext';

const RegisterPage = () => {
    const { error, setError, send, setSend } = useFormContext();
    const navigate = useNavigate();
    const [registerForm, SetRegisterForm] = useState({
        nome: '',
        email: '',
        senha: ''
    });

    const onChangeFormHandle = (e) => {
        SetRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
    }

    const cancelHandleBtn = () => {
        SetRegisterForm({
            nome: '',
            email: '',
            senha: ''
        });

        navigate('/');
    }

    return (
        <div className='content-div'>
            <div className='form-div'>
                <h1>Cadastre-se</h1>
                <form
                    onSubmit={(e) => registerSubmitHandle(e, registerForm, setSend, setError, navigate)}
                >
                    <input
                        type='text'
                        name='nome'
                        placeholder='Nome'
                        value={registerForm.nome}
                        required
                        onChange={(e) => onChangeFormHandle(e)}
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='E-mail'
                        value={registerForm.email}
                        required
                        onChange={(e) => onChangeFormHandle(e)}
                    />
                    <input
                        type='password'
                        name='senha'
                        placeholder='Senha'
                        value={registerForm.senha}
                        required
                        onChange={(e) => onChangeFormHandle(e)}
                    />
                    <div className='btn-div'>
                        {send && <strong
                            className={error ? 'notification error' : 'notification success'}
                        >
                            {error ? error : 'Cadastro realizado com sucesso'}
                        </strong>}
                        <button>
                            CADASTRAR
                        </button>
                        <button
                            type='button'
                            onClick={() => cancelHandleBtn()}
                        >
                            CANCELAR
                        </button>
                    </div>
                </form>
                <p>
                    Já tem cadastro?
                    <Link to='/'>
                        Clique Aqui!
                    </Link>
                </p>
            </div>
            <img
                src={RegisterPageImage}
                alt='Register page'
            />
        </div>
    )
}

export default RegisterPage;