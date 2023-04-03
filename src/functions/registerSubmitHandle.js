import api from '../configs/api';

const registerSubmitHandle = async (e, dataForm, send, error, navigate) => {
    e.preventDefault();
    e.stopPropagation();

    if (!dataForm.nome || !dataForm.email || !dataForm.senha) {
        send(true);
        error('Todos os campos devem ser preenchidos');

        setTimeout(() => {
            send(false)
            error('');
        }, 2000);

        return
    }

    if (dataForm.senha.length < 5) {
        send(true);
        error('A senha precisa conter mais de 5 caracteres');

        setTimeout(() => {
            send(false)
            error('');
        }, 2000);

        return;
    }

    try {
        await api.post('/usuarios', { ...dataForm });

        send(true);
        setTimeout(() => {
            navigate('/');
            send(false);
        }, 2000);
    } catch (error) {
        console.log(error.response);
    }
}

export default registerSubmitHandle;