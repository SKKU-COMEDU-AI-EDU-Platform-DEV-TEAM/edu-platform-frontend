import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/join.css"
import { useState } from 'react';
import Select from "react-select";
import styled from 'styled-components';
const Join = () => {
    const StyledSelect = styled(Select)`width: 550px;`
    const [value, setValue] = useState("선택");
    const options = [
        { value: "선택", label: "선택", isDisabled: true },
        { value: "인문계열", label: "인문계열" },
        { value: "사회계열", label: "사회계열" },
        { value: "자연계열", label: "자연과학계열" },
        { value: "공학계열", label: "공학계열" },
        { value: "사범계열", label: "사범계열" },
        { value: "의약계열", label: "의약계열" },
        { value: "예체능계열", label: "예체능계열" },
    ];
    const handleTypeSelect = e => {
        setValue(e.value);
    };
    return (
        <center>
            <h1>Create Account</h1>
            <p>Already have an account? <a href=".">Log in</a></p>
            <form action="/">
                
                <label htmlFor="username">Username</label><br/>
                <input type="text" id="username" name="username"/><br/>
                
                <label htmlFor="email">Email</label><br/>
                <input type="email" id="email" name="email"/><br/>
                
                <label htmlFor="password" >Password</label><br/>
                <input type="password" id="password" name="password" /><br/>
                
                <label htmlFor="password-confirm">Password Confirm</label><br/>
                <input type="password" id="password-confirm" name="password-confirm"/><br/>
                
                <label htmlFor="major">Major</label><br/>
                <StyledSelect classNamePrefix="styledSelect"
                    options={options}
                    onChange={handleTypeSelect}
                    value={options.filter(function(option) {
                    return option.value === value;
                    })}
                    label="Single select"
                    name="major"
                />

                <input type="submit" value="Sign Up"/>
            </form> 
        </center>
    )
  }
  
  export default Join