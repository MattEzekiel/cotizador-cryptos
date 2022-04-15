import styled from "@emotion/styled";
import {useState} from "react";

const Label = styled.label`
  color: #FFF;
  display: block;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
`

const useSelectMonedas = ( label, opciones ) => {
  const [estado, setEstado] = useState('');

  const SelectMonedas = () => (
      <>
        <Label htmlFor="moneda">{label}</Label>
        <Select
            name="moneda"
            id="moneda"
            value={estado}
            onChange={e => setEstado(e.target.value)}
        >
          <option value="">Seleccione</option>
          {opciones.map( opcion => (
              <option
                  value={opcion.id}
                  key={opcion.id}
              >{opcion.nombre}
              </option>
          ))}
        </Select>
      </>
  )

  return [ estado, SelectMonedas];
}

export default useSelectMonedas