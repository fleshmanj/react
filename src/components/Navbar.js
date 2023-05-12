import React from 'react';

function Navbar(props) {
    function handleClick(file) {
        props.onFileChange(file);
    }

    function openWebsite() {
  window.open('https://github.com/fleshmanj/react/blob/main/src/pdfs/33%20MXG%2000-20-1.pdf', '_blank');
}

    return (
        <nav>
            <ul>
                <li><button onClick={() => handleClick('https://static.e-publishing.af.mil/production/1/af_a4/publication/dafi21-101/dafi21-101_dafgm2022-01.pdf')}>DAFI 21-101</button></li>
                <li><button onClick={() => handleClick('https://static.e-publishing.af.mil/production/1/aetc/publication/afi21-101_aetcsup/afi21-101_aetcsup.pdf')}>AFI21-101 AETC Sup</button></li>
                <li><button onClick={() => handleClick('https://static.e-publishing.af.mil/production/1/aetc/publication/afi21-101_aetcsup_add_a/afi21-101_aetcsup_add_a.pdf')}>AFI 21-101 AETC Sup Addendum A</button></li>
                <li><button onClick={() => handleClick('https://static.e-publishing.af.mil/production/1/33fw/publication/afi21-101_aetcsup_33fwsup/afi21-101_aetcsup_33fw_sup.pdf')}>AFI 21-101 33FW Sup</button></li>
                <li><button onClick={() => handleClick('https://fleshmanj.github.io/filestore/PDF/33%20MXG%2000-20-1.pdf')}>TO 00-20-1 33FW Sup</button></li>
            </ul>
        </nav>
    );
}

export default Navbar;


