import React, { useState } from 'react';
import styled from 'styled-components';
import {ColumnContainer} from '../../../styles/CakeComponentStyles/Cake.styled';
// Define the CakeButton component

import { Divider } from 'antd';
import { ColorLabel } from '../../../styles/CakeComponentStyles/ColorPicker.styled';

import strawberry from '../../../../assets/cake/ToppingIcon/Decoration/strawberry.png'
import cherry from '../../../../assets/cake/ToppingIcon/Decoration/cherry.png'
import choco from '../../../../assets/cake/ToppingIcon/Decoration/choco.png'
import chocopar from '../../../../assets/cake/ToppingIcon/Decoration/chocopar.png'
import raspbery from '../../../../assets/cake/ToppingIcon/Decoration/raspberry.png'
import rose from '../../../../assets/cake/ToppingIcon/Decoration/rose.png'

// Define the CakeButton component
const CakeButton = styled.button<{ active: boolean }>`
   background-color: #ffffff;
  color: #141313;
  width: 7.5em;
  height: 5.5em;
  border: #C47B83 0.17em solid;
  border-radius: 11px;
  text-align: center;
  transition: all 0.6s ease;
  margin-top: 8px;
  margin-right: 8px;
  margin-left: 10px;


  &:hover {
    //background-color: ${({theme}) => theme.colors.secondary};
    transform: scale(1.05);
    cursor: pointer;
  }

  img {
    width: 80px;
    height: 80px;
    margin-right: 8px;
  }
`;

interface DecorationSelectorProps {
  onSelectDecoration: (Decoration: string | null) => void;
  onSelectMidDecoration: (Decoration: string | null) => void;

  
}

const DecorationSelector: React.FC<DecorationSelectorProps> = ({ onSelectDecoration , onSelectMidDecoration}) => {
  const [selectedDecoration, setSelectedDecoration] = useState<string | null>(null);
 
  const handleDecorationClick = (Decoration: string) => {
    const newDecoration = selectedDecoration === Decoration ? null : Decoration;
    setSelectedDecoration(newDecoration);
    onSelectDecoration(newDecoration);
  };

  const handleMidDecorationClick = (Decoration: string) => {
    const newDecoration = selectedDecoration === Decoration ? null : Decoration;
    setSelectedDecoration(newDecoration);
    onSelectMidDecoration(newDecoration);
  }


  return (
    <ColumnContainer>
      <div style={{ width: '100%' , margin: '0 auto' , justifyContent: 'center' , alignItems: 'center' }}>
        <div style={{ width: '100%', margin: '0 auto' }}>
                <Divider style={{ borderColor: '#1a1a19b3' }}>
                  <ColorLabel>Select The Decoration:</ColorLabel>
                </Divider>
               </div>
        <CakeButton
          onClick={() => handleDecorationClick('strawberry')}
          active={selectedDecoration === 'strawberry'}
        >
        <img src={strawberry}  />
        <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Strawberry</div>
        </CakeButton>
        
        <CakeButton
          onClick={() => handleDecorationClick('cherry')}
          active={selectedDecoration === 'cherry'}
        >
          <img src={cherry}  />
          <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Cherry</div>
        </CakeButton>
        
        
        
      </div>
      <div>
        <div style={{ width: '100%', margin: '0 auto' }}>
                <Divider style={{ borderColor: '#1a1a19b3' }}>
                  <ColorLabel>Select The Mid Decoration:</ColorLabel>
                </Divider>
         </div>
        <CakeButton
          onClick={() => handleMidDecorationClick('choco')}
          active={selectedDecoration === 'choco'}
         >
          <img src={choco}  />
          <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Choco</div>
        </CakeButton>
        <CakeButton
          onClick={() => handleMidDecorationClick('raspberry')}
          active={selectedDecoration === 'raspberry'}
        >
          <img src={raspbery}  />
          <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Raspberry</div>
        </CakeButton>
        <CakeButton
          onClick={() => handleMidDecorationClick('chocoPar')}
          active={selectedDecoration === 'chocoPar'}
        >
          <img src={chocopar}  />
          <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>ChocoPar</div>
        </CakeButton>
        <CakeButton
          onClick={() => handleMidDecorationClick('rose')}
          active={selectedDecoration === 'rose'}
        >
          <img src={rose}  />
          <div style={{marginTop: '5px' , textAlign: 'center' , fontWeight: '500'}}>Rose</div>
        </CakeButton>

      </div>
     
    </ColumnContainer>
  );
};

export default DecorationSelector;