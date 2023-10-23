import { useState } from 'react';

import * as S from './styles';

import menuOptions from '../../assets/resources/menuOptions.json';
import { Link } from 'react-router-dom';

export default function Menu() {
  const [selectedOption, setSelectedOption] = useState('Quadro Resumo');

  function handleSelectedItem(itemSelected) {
    const item = selectedOption === itemSelected ? '' : itemSelected;
    setSelectedOption(item);
  }

  return (
    <S.Container>
      {menuOptions.map((option) => {
        const { name, path } = option;

        const isSelected = selectedOption === name;

        return (
          <Link key={name} to={path}>
            <S.Option  isSelected={isSelected} onClick={() => handleSelectedItem(name)}>
              <span>{name}</span>
            </S.Option>
          </Link>
        );
      })}
    </S.Container>
  );
}
