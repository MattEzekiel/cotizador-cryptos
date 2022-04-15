import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`

const Imagen = styled.img`
  display: block;
  width: 100%;
  max-width: 150px;
  height: auto;
`

const Texto = styled.p`
    margin: 1rem 0;
  font-size: 18px;
`

const Precio = styled.span`
    font-size: 26px;
      span {
        font-weight: 700;
      }
`

export default function Resultado({resultado}) {
    const { PRICE, HIGHDAY, LOWDAY, CHANGE24HOUR, IMAGEURL, LASTUPDATE} = resultado

    return (
        <Contenedor>
            <Imagen
                src={`https://cryptocompare.com/${IMAGEURL}`}
                alt="Imagen de la cripto"
            />
            <div>
                <Precio>El precio es de <span>{PRICE}</span></Precio>
                <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
                <Texto>Variación últimas 24 horas: <span>{CHANGE24HOUR}</span></Texto>
                <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Contenedor>
    )
}