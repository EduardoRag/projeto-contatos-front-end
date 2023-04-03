import { useState } from "react";

const useFormProvider = () => {
    const [error, setError] = useState('');
    const [send, setSend] = useState(false);

    return {
        error,
        setError,
        send,
        setSend
    }
}

export default useFormProvider;