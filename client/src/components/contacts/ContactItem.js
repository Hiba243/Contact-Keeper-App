import React from 'react'

const ContactItem = ({ contact }) => {
    const { id, name, email, phone, type } = contact;
    return (
        <div className="card bg-light">
            <h3 className="text-primary text-left">{name}{' '}<span  
             style={{ float: 'right' }}
            className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }>{type}</span> </h3>
            <ul className="list">
                {email && (<li>{email}
                </li>)}
                {phone && (<li>{phone}
                </li>)}
            </ul>
            <button className="btn btn-dark btn-sm">Edit</button>
            <button className="btn btn-danger btn-sm">Delete</button>
        </div>
    )
}

export default ContactItem
