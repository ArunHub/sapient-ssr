import React from 'react';
import ProgramContainer from "./ProgramContainer/ProgramContainer.jsx";
import Filters from "./Filters/Filters.jsx";

class SpaceHome extends React.Component {
    state = {
        programList: []
    }

    componentDidMount() {
        // const URL = 'https://api.spaceXdata.com/v3/launches?limit=2';
        // fetch(URL).then(res => res.json())
        //     .then(response => {
        //         // console.log('resp', response)
        //         this.setState({ programList: response })
        //     })
        this.setState({
            programList: this.props.json
        })
    }

    handleLaunchYear = (response) => {
        this.setState({
            programList: response,
        })
    }

    render() {
        const { programList } = this.state;
        return (
            <>

                <h1>SpaceX Launch Programs</h1>
                <div className="container">
                    <aside>
                        <Filters handleLaunchYear={this.handleLaunchYear} />
                    </aside>
                    <main>
                        <ProgramContainer programList={programList} />
                    </main>
                    <footer>Developed by {this.props.developer}</footer>
                </div>
            </>
        );
    }
}

export default SpaceHome; 