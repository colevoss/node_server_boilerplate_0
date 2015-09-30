import React, {Component} from 'react';
import Path from 'paths-js/path';

export default class SVGTest extends Component {
    getPath() {
        let path = Path()
            .moveto(10, 20)
            .lineto(30, 50)
            .lineto(25, 28)
            .qcurveto(27, 30, 32, 27)
            .closepath();

        return path.print();
    }

    render() {
        return (
            <div>
                Hello World
                <svg width="300" height="300">
                    <path d={this.getPath()} fill="blue"/>
                </svg>
            </div>
        )
    }
}
