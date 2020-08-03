import React from 'react';
import { Cell } from './Cell';

const Grid = (props) => {
    const width = props.cols * 14;
    const rowsArr = [];
    for (let i=0; i < props.rows; i++) {
        for (let j=0; j < props.cols; j++) {
            const cellId = i + "_" + j;
            const cellClass = props.gridFull[i][j] ? "cell alive": "cell dead";
            rowsArr.push(
                <Cell
                    cellClass={cellClass}
                    key={cellId}
                    cellId={cellId}
                    row={i}
                    col={j}
                    selectCell={props.selectCell}
                />
            );
        }
    }
    return (
        <div className="grid" style={{width: width}}>
            {rowsArr}
        </div>
    );
}

export default Grid;
