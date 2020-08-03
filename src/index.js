import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Buttons } from './Buttons';
import { Grid } from './Grid';

const arrayClone = (arr) => (JSON.parse(JSON.stringify(arr)));

class Main extends React.Component {
    constructor() {
        super();
        this.speed = 1000;
        this.rows = 30;
        this.cols = 50;
        this.state = {
            generation: 0,
            gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false)),
            paused: false,
        }
    }

    selectCell = (row, col) => {
        let gridCopy = arrayClone(this.state.gridFull);
        gridCopy[row][col] = !gridCopy[row][col];
        this.setState({
            gridFull: gridCopy,
        });
    }

    clear = () => {
        let gridCopy = arrayClone(this.state.gridFull);
        for (let i=0; i < this.rows; i++) {
            for (let j=0; j < this.cols; j++) {
                gridCopy[i][j] = false;
            }
        }
        this.setState({
            generation: 0,
            gridFull: gridCopy,
        });
        this.pauseButton();
    }

    seed = () => {
        let gridCopy = arrayClone(this.state.gridFull);
        for (let i=0; i < this.rows; i++) {
            for (let j=0; j < this.cols; j++) {
                gridCopy[i][j] = false;
                if (Math.floor(Math.random() * 4) === 1) {
                    gridCopy[i][j] = true;
                }
            }
        }
        this.setState({
            generation: 0,
            gridFull: gridCopy,
        });
        this.pauseButton();
    }

    playButton = () => {
        if (!this.intervalId) {
            this.intervalId = setInterval(this.play, this.speed);
            this.setState({
                paused: false,
            });
        }
        else {
            this.pauseButton();
        }
    }

    pauseButton = () => {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.setState({
            paused: true,
        });
    }

    faster = () => {
        this.pauseButton();
        this.speed -= 50;
        this.playButton();
    }

    slower = () => {
        this.pauseButton();
        this.speed += 50;
        this.playButton();
    }

    inbounds = (x, y) => {
        return (x > 0 && x < this.rows
             && y > 0 && y < this.cols);
    }

    isAlive = (x, y) => {
        return this.state.gridFull[x][y];
    }

    aliveNeighbors = (i, j) => {
        let count = 0;
        for (let xoffset = -1; xoffset < 2; xoffset++) {
            for (let yoffset = -1; yoffset < 2; yoffset++) {
                let x = i + xoffset;
                let y = j + yoffset;
                if (x === i && y === j) {
                    continue;
                }
                if (this.inbounds(x, y) && this.isAlive(x, y)){
                    count++;
                }
            }
        }
        return count;
    }

    play = () => {
        let newGrid  = arrayClone(this.state.gridFull);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let aliveNeighbors = this.aliveNeighbors(i, j);
                newGrid[i][j] = false;
                if (this.isAlive(i, j)) {
                    if (2 <= aliveNeighbors && aliveNeighbors <= 3) {
                        newGrid[i][j] = true;
                    }
                }
                else {
                    if (aliveNeighbors === 3) {
                        newGrid[i][j] = true;
                    }
                }
            }
        }
        this.setState({
            generation: this.state.generation+1,
            gridFull: newGrid,
        });
    }

    componentDidMount() {
        this.seed();
        this.playButton();
    }

    render() {
        return (
            <div>
                <h1>Conway's Game of Life</h1>
                <Buttons
                    playButton={this.playButton}
                    pauseButton={this.pauseButton}
                    clearButton={this.clear}
                    seedButton={this.seed}
                    nextButton={this.play}
                    paused={this.state.paused}
                />
                <Grid
                    gridFull={this.state.gridFull}
                    rows={this.rows}
                    cols={this.cols}
                    selectCell={this.selectCell}
                />
                <h2>Generations: {this.state.generation}</h2>
            </div>
        );
    }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
