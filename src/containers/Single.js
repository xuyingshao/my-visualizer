import React from "react";
import {FaSearch } from "react-icons/fa";
import {ScrollArea} from "react-scrollbar"; 
import {LeafletAnnotation } from "./client/views/leaflet_annotation.js";

class Single extends React.Component {
    constructor(props) {
        super(props);

        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(event) {
        console.log(event.target.value);
    }


    render() {
        let options = ["hello", "1", "2"];
        let i = 0;

        return (
            <div className="container-fluid">
                <h2>Single Model Visualizer</h2>
                <div className="container-fluid row">
                    <select className="col-6" onChange={this.onSelect}>
                        <option defaultValue="" key={i++} disabled selected>Select a mode to visualizer</option>
                        {options.map(op => {
                            return (
                            <option value={op} key={i++}>
                                {op}
                            </option>);
                        })}
                    </select>
                    <button className="btn btn-primary">
                        <i className="fa fa-search"/>
                    </button>
                </div>

                <div className="container-fluid row">
                    <div className="col-6">
                        <img src="https://cdn.pixabay.com/photo/2016/09/01/10/23/image-1635747_960_720.jpg" width="700" height="500"/>


                        <LeafletAnnotation ref={m => { this.leafletImage = m; }}
                            imageElement={this.state.imageElement}
                            image={this.props.image}
                            annotations={this.props.annotations}
                            categories={this.props.categories}
                            enableEditing={true}
                            onSave={this.performSave}/>
                    </div>
                    <div className="btn-group-vertical">
                        {/* <button className="btn btn-light">
                            <i className="fa fa-arrow-up"/>
                        </button>
                        <button className="btn btn-light">
                            <i className="fa fa-arrow-down"/>
                        </button>
                        <button className="btn btn-light">
                            <i className="fa fa-arrow-left"/>
                        </button>
                        <button className="btn btn-light">
                            <i className="fa fa-arrow-right"/>
                        </button>
                        <button className="btn btn-light">
                            <i className="fa fa-plus"/>
                        </button>
                        <button className="btn btn-light">
                            <i className="fa fa-minus"/>
                        </button> */}

                        <button className="btn btn-outline-dark">
                            <i className="fa fa-arrow-up"/>
                        </button>
                        <button className="btn btn-outline-dark">
                            <i className="fa fa-arrow-down"/>
                        </button>
                        <button className="btn btn-outline-dark">
                            <i className="fa fa-arrow-left"/>
                        </button>
                        <button className="btn btn-outline-dark">
                            <i className="fa fa-arrow-right"/>
                        </button>
                        <button className="btn btn-outline-dark">
                            <i className="fa fa-plus"/>
                        </button>
                        <button className="btn btn-outline-dark">
                            <i className="fa fa-minus"/>
                        </button>

                    </div>   
                </div>

                <div className="container-fluid row">
                    {/* <ScrollArea speed={0.8}
                                className="area"
                                contentClassName="content"
                                horizontal={false}>
                        <div>Some long content.</div>
                    </ScrollArea> */}
                </div>

            </div>
        );
    }
}

export default Single;
