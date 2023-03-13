import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { sessionStorageGet } from '../../functions/commonFunctions';
import '../../styles/SuccessfulPage/successfulPageStyle.css'


export default function SuccessfulPage() {

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        console.log("params", params)
        const userData = sessionStorageGet("user-info")
        if (userData) {
            console.log("Post API", userData)
        }

    }, [])

    return (
        <section className='section'>
            <div class="card">
                <div style={{ borderRadius: "200px", height: "200px", width: "200px", "background": " #F8FAF5", margin: "0 auto" }}>
                    <i class="checkmark">✓</i>
                </div>
                <h1>Success</h1>
                <p>We received your purchase request;<br /> we'll be in touch shortly!</p>
                <Link to="/home">
                    <button className='button'>
                        Home
                    </button>
                </Link>
            </div>
        </section >
    )
}
