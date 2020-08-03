import React from 'react';

const Cell = (props) => (
    <div
        className={props.cellClass}
        id={props.id}
        onClick={() => { props.selectCell(props.row, props.col); }}
    >
    </div>
);

export default Cell
