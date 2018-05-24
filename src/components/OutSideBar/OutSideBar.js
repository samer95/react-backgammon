import React, { PureComponent } from 'react';
import './OutSideBar.css';

import PieceFlat from './PieceFlat/PieceFlat';

class OutSideBar extends PureComponent {

    
    getFlatCheckers = (player, numberOfCheckers) => {

        const checkers = [];

        for (let i = 0; i < numberOfCheckers; i++) {
            checkers.push(<PieceFlat player={player} key={'OSBP' + player + 'P' + i} />);
        }

        return checkers
    }

    componentDidUpdate() {
        console.log("[OUTSIDEBAR UPDATE] - Inside Did Update");
    }

    render() {

        let classReceivableP1 = '';
        let classReceivableP2 = '';
        if (this.props.checkers.p1CanReceive) {
            classReceivableP1 = ' receivable';
        }
        if (this.props.checkers.p2CanReceive) {
            classReceivableP2 = ' receivable';
        }

        const checkersP1 = this.getFlatCheckers("1", this.props.checkers.checkersP1);
        const checkersP2 = this.getFlatCheckers("2", this.props.checkers.checkersP2);

        let undoButtonclass = 'disabled';
        let undoButtonFunction;
        if (this.props.currentPosition) {
            console.log("hascurrent Position");
            undoButtonclass = '';
            undoButtonFunction = this.props.undoHandler;
        }

        return (
            <div id="outSide" className="row">

                <div className="undoButton">
                    <button
                        className={"btn btn-warning " + undoButtonclass}
                        onClick={undoButtonFunction}>Undo
                    </button>
                </div>

                <div className="blocksUp">
                    <div className="shadowBox"></div>
                    <div className={"pieceContainer" + classReceivableP1}
                        onClick={this.props.checkers.p1CanReceive}
                    >
                        {checkersP1}
                    </div>
                </div>

                <div className="blocksDown">
                    <div className="shadowBox"></div>
                    <div className={"pieceContainer pieceContainerDown" + classReceivableP2}
                        onClick={this.props.checkers.p2CanReceive}
                    >
                        {checkersP2}
                    </div>
                </div>
            </div>
        )
    }
}


export default OutSideBar;