import React from 'react';
import { IPlayerType } from '../../entities';
import ActionsContext from '../../contexts/handlerContext';
import Button from '../atoms/Button';

interface Props {
  active: IPlayerType;
  type: IPlayerType;
}

const PlayerTypeButton: React.FC<Props> = ({ active, type }) => {
  const { playerTypeAction } = React.useContext(ActionsContext);
  return (
    <Button
      active={type === active}
      onClick={() => playerTypeAction && playerTypeAction(type)}
    >
      {type}
    </Button>
  )
}

export default PlayerTypeButton;