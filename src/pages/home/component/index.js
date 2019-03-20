import React from 'react';
import Link from 'next/link'

export default props => <div>
    <header>HEADER</header>
    <div className="mainContainer">
        <h1>Hola Mundo!</h1>
        <p>Bienvenido al curso de Next.js {props.data}</p>
        <button type="button" className="btn btn-primary" onClick={() => props.sendMessage('mensaje nuevo')}>agregar dato</button><br />
        <Link href="/contact">
            <a>ir a contact</a>
        </Link>
    </div>

    <style jsx>{`
    header {
        text-align: center;
        background-color: #353590;
        padding: 16px;
        color: #fff;
    }
    .mainContainer {
        padding: 20px;
    }`}</style>
</div>