import { useState } from "react";
import { Container } from "./styled";

export default function Contadordois() {
    const [qtd, setQtd] = useState(0)

    function aumentar() {
        setQtd(qtd + 1)
    }

    function diminuir() {
        setQtd(qtd -1)
    }

    function aumentar100() {
        setQtd(qtd + 100)
    }

    function diminuir100() {
        setQtd(qtd -100)
    }

    function aumentar500() {
        setQtd(qtd + 100)
    }

    function diminuir500() {
        setQtd(qtd -100)
    }

    function aumentar1000() {
        setQtd(qtd + 1000)
    }

    function diminuir1000() {
        setQtd(qtd -1000)
    }

    function resetar() {
        setQtd(0)
    }

    function resetarpara1m() {
        setQtd(qtd * 10000000000)
    }
    return (
        <Container>
            <h1> Contador </h1>
            <div>{qtd}</div>
            <div> <button onClick={aumentar}> + 1   </button>  </div>
            <div> <button onClick={diminuir}>  - 1  </button>   </div>


            <div> <button onClick={aumentar100}> + 100   </button>  </div>
            <div> <button onClick={diminuir100}>  - 100  </button>   </div>
            <div> <button onClick={aumentar500}> + 500   </button>  </div>
            <div> <button onClick={diminuir500}>  - 500  </button>   </div>
            <div> <button onClick={aumentar1000}> + 1000   </button>  </div>
            <div> <button onClick={diminuir1000}>  - 1000  </button>   </div>
            <Filhote  resetarapórratoda={resetar} baaa={resetarpara1m} />
        </Container>
    )
}


function Filhote(props) {
    function resetar() {
        props.resetarapórratoda(0)
        
    }

    function umamilhaaa() {
        props.baaa()
    }

    return (
        <Container>
            <div> <button onClick={resetar}>  reset   </button>   </div>
            <div> <button onClick={umamilhaaa}>  1 milha   </button>   </div>

        </Container>
    )
}