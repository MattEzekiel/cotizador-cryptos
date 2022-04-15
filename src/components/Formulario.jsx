import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import {monedas} from "../data/monedas";
import {useEffect, useState} from "react";
import Error from "./Error";

const ButtonSubmit = styled.button`
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 30px;
  transition: background-color 0.3s ease-in-out;
  
  &:hover {
    background-color: #7A7DFE;
  }
`

export default function Formulario({setMonedas}) {
    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);
    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu moneda', monedas);
    const [ criptomoneda, SelectCriptomoneda ] = useSelectMonedas('Elige tu Crypto', criptos);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const arrayCrypto = resultado.Data.map( cripto => {
                return {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName,
                };
            });
            setCriptos(arrayCrypto);
        }
        consultarAPI();
    },[]);

    const handleSubmit = e => {
      e.preventDefault();

      if ([moneda, criptomoneda].includes('')) {
          return setError(true);
      }

      setError(false);
      setMonedas({ moneda, criptomoneda });
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {error && <Error>Todos los campos son obligatorios</Error>}
            <SelectMonedas />
            <SelectCriptomoneda />
            <ButtonSubmit type={"submit"}>Cotizar</ButtonSubmit>
        </form>
    )
}