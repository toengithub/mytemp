import React from 'react';
import ReactDOM from 'react-dom';
class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        // 设置 initial state
        let reg = new RegExp("(^|&)mark=([^&]*)(&|$)");
        var mark = window.location.search.substr(1).match(reg)[2];
        this.state = {
            mark: mark
        };

        // ES6 类中函数必须手动绑定
        //this.handleChange = this.handleChange.bind(this);
    }
    /*
    handleChange(event) {
        this.setState({
            text: event.target.value
        });
    }
    */
    render() {
        if(this.state.mark == "signin"){
            return (
                <div className="register w3layouts agileits">
        			<h2>注 册</h2>
        			<form action="#" method="post">
        				<input type="text" name="Name" placeholder="用户名" required=""/>
        				<input type="text" name="Email" placeholder="邮箱" required=""/>
        				<input type="password" name="Password" placeholder="密码" required=""/>
        				<input type="text" name="Phone Number" placeholder="手机号码" required=""/>
        			</form>
        			<div className="send-button w3layouts agileits">
        				<form>
        					<input type="submit" value="免费注册"/>
        				</form>
        			</div>
        			<div className="clear"></div>
        		</div>
            )
        }else{
            return (
                <div className="login w3layouts agileits">
                    <h2>登 录</h2>
                    <form action="#" method="post">
                        <input type="text" name="Userame" placeholder="用户名" required=""/>
                        <input type="password" name="Password" placeholder="密码" required=""/>
                    </form>
                    <ul className="tick w3layouts agileits">
                        <li>
                            <input type="checkbox" id="brand1" value=""/>
                                <label for="brand1"><span></span>记住我</label>
                        </li>
                    </ul>
                    <div className="send-button w3layouts agileits">
                        <form>
                            <input type="submit" value="登 录"/>
                        </form>
                    </div>
                    <a href="#">记住密码?</a>
                    <div className="social-icons w3layouts agileits">
                        <p>- 其他方式登录 -</p>
                        <ul>
                            <li className="qq"><a href="#">
                                <span className="icons w3layouts agileits"></span>
                                <span className="text w3layouts agileits">QQ</span></a></li>
                            <li className="weixin w3ls"><a href="#">
                                <span className="icons w3layouts"></span>
                                <span className="text w3layouts agileits">微信</span></a></li>
                            <li className="weibo aits"><a href="#">
                                <span className="icons agileits"></span>
                                <span className="text w3layouts agileits">微博</span></a></li>
                            <div className="clear"> </div>
                        </ul>
                    </div>
                    <div className="clear"></div>
                </div>
            )
        }

    }
};

ReactDOM.render(
    <LoginForm/>,
    document.getElementById('container')
);
