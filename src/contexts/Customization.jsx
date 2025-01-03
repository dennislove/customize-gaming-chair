import { createContext, useContext, useState } from 'react';

const chairColors = [
  {
    color: '#683434',
    name: 'brown'
  },
  {
    color: '#1a5e1a',
    name: 'green'
  },
  {
    color: '#659994',
    name: 'blue'
  },
  {
    color: '#896599',
    name: 'mauve'
  },
  {
    color: '#ffa500',
    name: 'orange'
  },
  {
    color: '#59555b',
    name: 'grey'
  },
  {
    color: '#222222',
    name: 'black'
  },
  {
    color: '#ececec',
    name: 'white'
  }
];

const cushionColors = [
  {
    color: '#683434',
    name: 'brown'
  },
  {
    color: '#1a5e1a',
    name: 'green'
  },
  {
    color: '#659994',
    name: 'blue'
  },
  {
    color: '#896599',
    name: 'mauve'
  },
  {
    color: '#ffa500',
    name: 'orange'
  },
  {
    color: '#59555b',
    name: 'grey'
  },
  {
    color: '#222222',
    name: 'black'
  },
  {
    color: '#ececec',
    name: 'white'
  }
];
const threadColors = [
  {
    color: '#683434',
    name: 'brown'
  },
  {
    color: '#1a5e1a',
    name: 'green'
  },
  {
    color: '#659994',
    name: 'blue'
  },
  {
    color: '#896599',
    name: 'mauve'
  },
  {
    color: '#ffa500',
    name: 'orange'
  },
  {
    color: '#59555b',
    name: 'grey'
  },
  {
    color: '#222222',
    name: 'black'
  },
  {
    color: '#ececec',
    name: 'white'
  }
];

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [chairColor, setChairColor] = useState(chairColors[0]);
  const [cushionColor, setCushionColor] = useState(cushionColors[0]);
  const [threadColor, setThreadColor] = useState(threadColors[0]);
  const [textField, setTextField] = useState('');

  return (
    <CustomizationContext.Provider
      value={{
        chairColors,
        chairColor,
        setChairColor,
        cushionColors,
        cushionColor,
        setCushionColor,
        threadColors,
        threadColor,
        setThreadColor,
        textField,
        setTextField
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
