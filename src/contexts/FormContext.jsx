import { createContext } from 'react';
import useFormProvider from '../hooks/useFormProvider';

const CreateContextStance = createContext({});

export const FormContextProvider = (props) => {
    const formProvider = useFormProvider();

    return (
        <CreateContextStance.Provider value={formProvider}>
            {props.children}
        </CreateContextStance.Provider>
    );
}

export default CreateContextStance;