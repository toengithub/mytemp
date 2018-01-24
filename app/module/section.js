const React = require("react");
const ReactDOM = require("react-dom");

require('../../sass/section.scss');

class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgs:[],
            show:0,
            url:""
        };
        this.imgClick = this.imgClick.bind(this);
        this.closeShow = this.closeShow.bind(this);
    }
    imgClick(event) {
        let img = event.target;
        this.setState({url:img.getAttribute("src"),show:1});
    }
    closeShow(event){
        this.setState({show:0});
    }
    componentDidMount() {
        var mod = this;
        var url = '/getImgs';
        fetch(url, {
            method: "Get",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
            }).then(function(response) {
                response.status     //=> number 100–599
                response.statusText //=> String
                response.headers    //=> Headers
                response.url        //=> String
                response.text().then(function(responseText) {
                    var list = [];
                    for(let i = 1;i < 73;i ++){
                        list.push(
                            <div className="item" key={"Images"+i}>
                                <img src={"images/list/Images"+i+".jpg"} onClick={mod.imgClick.bind(this)}/>
                            </div>
                        )
                    }
                    mod.setState({imgs:list});
                })
            }, function(error) {
                error.message //=> String
        });
    }
    componentDidUpdate(){
        if(this.state.show){
            var el = document.getElementsByClassName("showarea")[0];
            el.style.left = "calc(50% - "+el.offsetWidth/2+"px)";
            el.style.top = "calc(50% - "+el.offsetHeight/2+"px)";
        }
    }
    render() {
        /*
        var imgs = [];
        for (var i = 1;i < 73;i ++){
            imgs.push(
                <div class="item">
                    <img src={"../resource/images/list/Images"+i+".jpg"} />
                </div>
            )
        }
        */
        let showStyle = {
            display:this.state.show==1&&this.props.active == 7?"block":"none"
        };
        let scrollStyle = {
            overflowY:this.state.show==1&&this.props.active == 7?"hidden":"auto"
        };
        return (
            <section id="main-content">
                <div className={this.props.active == 1?"active contentdiv":"contentdiv"}>{this.props.active}1</div>
                <div className={"contentdiv"}>2</div>
                <div className={"contentdiv"}>3</div>
                <div className={"contentdiv"}>4</div>
                <div className={"contentdiv"}>5</div>
                <div className={"contentdiv"}>6</div>
                <div className={this.props.active == 7?"active imgcontainer contentdiv":"imgcontainer contentdiv"} style={scrollStyle}>
                    <div className="imglist">
                        {this.state.imgs}
                    </div>
                </div>
                <div className="showarea" style={showStyle} onClick={this.closeShow.bind(this)}>
                    <img src={this.state.url}/>
                </div>
                <div className="cover" style={showStyle}>

                </div>
            </section>
        );
    };
}

module.exports = Section;
