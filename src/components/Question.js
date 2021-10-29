import React, {useState} from 'react'
import styled from 'styled-components';

function Question({title, description}) {
    const [toggle, setTootle] = useState(true);
    return (
        <QuestionStyled>
            <div className="q-con">
                <h4>{title}</h4>
                {toggle && <p>{description}</p>}
            </div>
        </QuestionStyled>
    )
}

const QuestionStyled = styled.div`

`;

export default Question;
