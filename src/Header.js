import React from 'react';

export default function Header({children}){ // children propriedade automática com o conteudo da tag
    return (
        <header>
            <h1>{children}</h1>
        </header>
    )
}

// export default Header; // Assim ou do jeito que foi feito aí em cima
// XXX componente não mais utilizado