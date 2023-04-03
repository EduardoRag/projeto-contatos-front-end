import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import EditIcon from '../../assets/edit-icon.svg';
import TrashIcon from '../../assets/icon-trash.png';
import './styles.css';
import api from '../../configs/api';
import { getItem } from '../../functions/token';


export default function DataTable({ allContacts, setAllContacts }) {
    const token = getItem('token');

    const handleDeleteBtn = async (contact) => {
        const contacts = allContacts;

        const contactFound = contacts.find(element => element === contact);

        try {
            await api.delete(`/contatos/${contactFound.id}`, {
                headers: {
                    Authorization: token
                }
            });
        } catch (error) {
            return console.log(error.response.data);
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead className='table-head'>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Telefone</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allContacts.map((user) => (
                        <TableRow
                            key={user.id}
                        >
                            <TableCell>
                                {user.nome}
                            </TableCell>
                            <TableCell>
                                {user.email}
                            </TableCell>
                            <TableCell>
                                {user.telefone}
                            </TableCell>
                            <TableCell align='right'>
                                <div className='icon-divs'>
                                    <img
                                        className='edit-icon'
                                        src={EditIcon}
                                        alt='Icone de editar'
                                        onClick={(e) => console.log(e)}
                                    />
                                    <img
                                        className='trash-icon'
                                        src={TrashIcon}
                                        alt='Icone de lixeira'
                                        onClick={() => handleDeleteBtn(user)}
                                    />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
