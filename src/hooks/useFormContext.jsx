import { useContext } from "react";
import CreateContextStance from "../contexts/FormContext";

const useFormContext = () => {
    return useContext(CreateContextStance);
}

export default useFormContext;