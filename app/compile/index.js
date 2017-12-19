const React = require("react");
const ReactDOM = require("react-dom");
require('../../sass/index.scss');
var Navi = require('../module/navi.js');
var a=123;
class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({

        });
    }

    render() {
        return (
            <div>
                <Navi/>
            </div>
        );
    }
}

ReactDOM.render(
    <MainPage/>,
    document.body
)
