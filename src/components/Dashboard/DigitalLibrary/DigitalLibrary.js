import React from 'react';
import './DigitalLibrary.css';

const DigitalLibrary = () => {

    return (
        <React.Fragment>
            <div className="digital-library-head">ACM DIGITAL LIBRARY</div>
            <section className="icons">
                <a href="https://learning.acm.org/e-learning/skillsoft" className="iconbtn fas fa-laptop">{}</a>
                <a href="https://dl.acm.org/" className="iconbtn fas fa-book">{}</a>
                <a href="https://idp.acm.org/idp/profile/SAML2/Redirect/SSO?execution=e5s1" className="iconbtn fas fa-cog">{}</a>
                <a href="https://technews.acm.org/" className="iconbtn fas fa-newspaper">{}</a>
                <a href="https://learning.acm.org/e-learning/science-direct" className="iconbtn fas fa-flask">{}</a>
                <a href="https://xrds.acm.org/" className="iconbtn fas fa-link">{}</a>
            </section>  
        </React.Fragment>
    )
}

export default DigitalLibrary;
