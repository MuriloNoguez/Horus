import React, { useState } from "react";
import Modal from "react-responsive-modal";
import { NovaPubli } from "./NovaPublic";
import "react-responsive-modal/styles.css";

export function Cabecalho() {
    const [publis, setPublis] = useState([]);
    const [open, setOpen] = useState(false);

    function abrirForm() {
        setOpen(true);
    }

    function fecharForm() {
        setOpen(false);
    }

    return (
        <>
            <div>
                <button onClick={abrirForm}>add</button>
            </div>
            <Modal open={open} onClose={fecharForm} center>
                <NovaPubli publis={publis} setPublis={setPublis} />
            </Modal>
        </>
    );
}
