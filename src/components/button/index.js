import { ButtonContainer, ButtonRightStyle } from "./style";

export const Button = ({label, onClick}) =>{
    return (
        <ButtonContainer onClick={onClick}>{label}</ButtonContainer>
    );  
}
export const ButtonRight = ({label, onClick}) => {
    return(
        <ButtonRightStyle onClick={onClick}>{label}</ButtonRightStyle>
    );
}

