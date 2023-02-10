import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  min-width: 80vw;
  background-color: #1f1f2f;
`

export const CountryName = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 26px;
  font-style: normal;
  margin: 5px;
`

export const HeaderLine = styled.hr`
  background-color: #1f1f2f;
  color: #334155;
  width: 100%;
`

export const VisitedText = styled.p`
  color: #94a3b8;
  font-family: 'Roboto';
  font-size: 24px;
  font-style: normal;
  margin: 5px;
  margin-right: 20px;
`

export const VisitedButton = styled.button`
  background-color: ${props => (props.bgColor ? 'transparent' : '#3b82f6')};
  color: ${props => (props.color ? '#334155' : '#ffffff')};
  font-family: 'Roboto';
  font-size: 26px;
  margin: 5px;
  height: 45px;
  min-width: 120px;
  max-width: 150px;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
`
