import React from 'react'

import styles from "./modalInserir.module.css"

export default function ModalInserir(props) {
    if (props.open){
        return (
            <div className={styles.container}>
                <h1>ModalInserir</h1>
                <button onClick={()=>props.setOpen(false)}>Close-Modal</button>
            </div>
        )
    }
}
