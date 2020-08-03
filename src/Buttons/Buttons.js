import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';

const Buttons = (props) => (
    <div className="center">
        <ButtonToolbar>
            <button className="btn btn-default btn-secondary" onClick={props.playButton} styles="width: 20px;">
                {props.paused ? "Play" : "Pause"}
            </button>
            <button className="btn btn-default btn-secondary" onClick={props.nextButton}>
                Step
            </button>
            <button className="btn btn-default btn-secondary" onClick={props.clearButton}>
                Clear
            </button>
            <button className="btn btn-default btn-secondary" onClick={props.seedButton}>
                Seed
            </button>
        </ButtonToolbar>
    </div>
)

export default Buttons;
