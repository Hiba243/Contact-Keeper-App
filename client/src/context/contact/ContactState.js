import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    GET_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_CONTACTS,
    CLEAR_FILTER,
    CONTACT_ERROR
} from '../types';


const ContactState= props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Hiba',
                email: 'xyz@gmail.com',
                phone: '111-111-1111',
                type:'personal'
            },
            {
                id: 2,
                name: 'Fareha',
                email: 'fyz@gmail.com',
                phone: '211-111-1111',
                type:'personal'
            },
            {
                id: 3,
                name: 'Nabah',
                email: 'nyz@gmail.com',
                phone: '311-111-1111',
                type:'professional'
            }
        ],
        current: null,
        filtered: null

    };

    const [state,dispatch]=useReducer(contactReducer,initialState);

    //add contact
    const addContact= contact =>{
        contact.id=uuidv4();
        dispatch({type: ADD_CONTACT, payload: contact});
    }
    //delete
    const deleteContact= id =>{
        dispatch({type: DELETE_CONTACT, payload: id});
    }
    //set current contact
    const setCurrent= contact =>{
        dispatch({type: SET_CURRENT, payload: contact});
    }

    //clear current contact
    const clearCurrent= () =>{
        dispatch({type: CLEAR_CURRENT});
    }

    //update contact
    const updateContact= contact =>{
        dispatch({type: UPDATE_CONTACT, payload: contact});
    }
    //filter 
    const filterContacts= text =>{
        dispatch({type: FILTER_CONTACTS, payload: text});
    }
    //clear filter
    const clearFilter= () =>{
        dispatch({type: CLEAR_FILTER});
    }

    return (
        <ContactContext.Provider value={{
            contacts: state.contacts,
            current: state.current,
            filtered: state.filtered,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact,
            clearFilter,
            filterContacts,
        }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState;