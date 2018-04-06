import React from 'react';
import { Button } from 'reactstrap';

 
const Navigate = ({onClick, postId, disabled}) => (
    <div>
        <Button
            color="teal"
            content="Previous"
            icon="left arrow"
            labelPosition="left"
            onClick={
                () => onClick('PREV')
            }
            disabled={disabled}
        />
        <Button
            color="teal"
            content="title"
            labelPosition="middle"
            onClick={
                () => onClick('PREV')
            }
            disabled={disabled}
        />
        <div className="Navigate-page-num">
            {postId}
        </div>
        <Button
            color="teal"
            content="Next"
            icon="right arrow"
            labelPosition="right"
            className="Navigate-right-button"
            onClick={
                () => onClick('NEXT')
            }
            disabled={disabled}
        /> 
    </div>
);
 
export default Navigate;