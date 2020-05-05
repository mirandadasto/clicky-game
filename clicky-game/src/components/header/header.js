  
import React from 'react';
import FadeIn from '../fade-in/fade-in';

const Header = () => { return(
    <header className="App-header">
        <FadeIn in={true} duration={600} length={'50px'} direction={'bottom'} >
            <h1>Harry Potter Clicky Game!</h1>
        </FadeIn>
    </header>
)};

export default Header;