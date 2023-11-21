import { useState } from 'react';
import { ButtonRight, Button  } from './components/button';
import Input from './components/Input';
import { Container, Content, Row} from './style';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () =>{
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }


  const handleAddNumber = (num) => {
       setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }


  const handleMinusNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    }else{
      const minus = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(minus))
      setOperation('')
    }
  }

  const handleDivisionNumber = () => {
    if (currentNumber === '0') {
      alert("Error: Cannot divide by zero!");
    } else if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division));
      setOperation('');
    }
  };
  
  const handleMultNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('X')
    }else{
      const mult = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(mult))
      setOperation('')
    }
  }


  const handleRestNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('%')
    }else{
      const rest = Number(firstNumber) % Number(currentNumber)
      setCurrentNumber(String(rest))
      setOperation('')
    }
  }


  const handleEquals = () =>{

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumber();
          break;
        case '-':
          handleMinusNumber();
          break;
        case 'X':
          handleMultNumber();
          break;
        case '/':
          handleDivisionNumber();
          break;    
        case '%':
          handleRestNumber();
          break;
        default:
          break;
      }
    }
  }






  return (
    <Container>
     <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label={'AC'} onClick={handleOnClear} />
          <Button label={'+/-'}/>
          <Button label={'%'} onClick={handleRestNumber}/>
          <ButtonRight label={'/'} onClick={handleDivisionNumber}/>
        </Row>
        <Row>
          <Button label={'7'} onClick={() => handleAddNumber('7')}/>
          <Button label={'8'} onClick={() => handleAddNumber('8')}/>
          <Button label={'9'} onClick={() => handleAddNumber('9')}/>
          <ButtonRight label={'X'} onClick={handleMultNumber}/>
        </Row>
        <Row>
          <Button label={'4'} onClick={() => handleAddNumber('4')}/>
          <Button label={'5'} onClick={() => handleAddNumber('5')}/>
          <Button label={'6'} onClick={() => handleAddNumber('6')}/>
          <ButtonRight label={'-'} onClick={handleMinusNumber}/>
        </Row>
        <Row>
          <Button label={'1'} onClick={() => handleAddNumber('1')}/>
          <Button label={'2'} onClick={() => handleAddNumber('2')}/>
          <Button label={'3'} onClick={() => handleAddNumber('3')}/>
          <ButtonRight label={'+'} onClick={handleSumNumber} />
        </Row>
        <Row>
          <Button label={'0'} onClick={() => handleAddNumber('0')}/>
          <Button label={'.'} onClick={() => handleAddNumber('.')}/>
          <ButtonRight label={'='} onClick={handleEquals}/>
        </Row>
     </Content>
    </Container>
  );
}

export default App;
