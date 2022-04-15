import styled from "@emotion/styled";

const Texto = styled.p`
  background-color: #B7322C;
  color: #fff;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
`

export default function Error({children}) {
    return (
        <Texto>{children}</Texto>
    )
}