import React, { useState } from "react";
import styled from "styled-components";

const DropDownContainer = styled.div`
  width: 300px;
  margin: 20px;
  border: solid;
  border-width: 2.5px;
  border-radius: 3px;
  //height: 100px;
  overflow-y: auto;
  align-self: self-start;
  cursor: pointer;
`;
const DropDownHeader = styled.div`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  font-size: 20px;
  background: #ffffff;
  height: 35px;
`;
const DropDownListContainer = styled.div``;
const DropDownList = styled.ul`
  postition: relative;
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  box-sizing: border-box;
  font-size: 20px;
  &:first-child {
    padding-top: 0.8em;
  }
  max-height: 70px;
`;
const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.5em;
`;

const options = [
  "Physical Accident",
  "Police Brutality",
  "Miscarriage",
  "Car accident",
  "Witness of OD",
  "Sexual Assault",
  "Failed Suicide",
  "Health Crisis",
  "Workplace Issues",
  "Death of a Loved One",
  "Military Death",
  "Loss of home",
  "Divorce",
  "Drug Abuse",
  "Hate Crime"
];

const Dropdown = ({selectedOption, changeOption}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setIsOpen(false);
    changeOption(value)
  };

  return (
    <>
      <DropDownContainer onClick={toggling}>
        <DropDownHeader> Joining For {selectedOption}</DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option) => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </>
  );
};

export default Dropdown;
