import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "./styles.css";
import CloseIcon from "../../assets/x-close-window.svg";
import { useState, useEffect } from 'react';
import api from "../../configs/api";
import { getItem } from "../../functions/token";


export default function AddContactModal({ allContacts, setAllContacts }) {
    const token = getItem('token');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [contactForm, setContactForm] = useState({
        nome: "",
        email: "",
        telefone: ""
    });

    const formHandleChange = (e) => {
        setContactForm({ ...contactForm, [e.target.name]: e.target.value });
    };

    const handleAddBtn = async () => {
        try {
            await api.post('/contatos', { ...contactForm }, {
                headers: {
                    Authorization: token
                }
            });

            setOpen(false);
        } catch (error) {
            console.log(contactForm);
            return console.log(error.response.data);
        }
    };

    const handleCleanBtn = () => {
        setContactForm({
            nome: "",
            email: "",
            telefone: ""
        });
    };

    return (
        <div>
            <Button
                className="add-btn"
                onClick={handleOpen}
                sx={{ color: "white" }}
            >
                ADICIONAR
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="new-contact-div">
                    <img
                        src={CloseIcon}
                        alt="icone para fechar o modal"
                        className="x-icon"
                        onClick={handleClose}
                    />
                    <h1>Novo Contato</h1>
                    <form>
                        <input
                            type="text"
                            placeholder="Nome"
                            name="nome"
                            value={contactForm.nome}
                            onChange={(e) => formHandleChange(e)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={contactForm.email}
                            onChange={(e) => formHandleChange(e)}
                        />
                        <input
                            type="tel"
                            placeholder="Telefone"
                            name="telefone"
                            value={contactForm.telefone}
                            onChange={(e) => formHandleChange(e)}
                        />
                        <div className="btn-div">
                            <button
                                type="button"
                                onClick={() => handleAddBtn()}
                            >
                                ADICIONAR
                            </button>
                            <button
                                type="button"
                                onClick={() => handleCleanBtn()}
                            >
                                LIMPAR
                            </button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
