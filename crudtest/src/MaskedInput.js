import React from "react";
import { useState } from "react";
import InputMask from 'react-input-mask';

const onlyNumbers = (str) => {
  str.replace(/[^0-9]/g, '')

}

const MaskedInput = ({value, onChange}) =>{
  const [data, setData]=useState({
    cpf: ""
  })
  const handleChange=(e)=>{
    setData({ ...data, [e.target.name]: onlyNumbers(e.target.value)});
  }
  return <InputMask mask="999.999.999-99" onChange={handleChange} />;
};

export default MaskedInput;