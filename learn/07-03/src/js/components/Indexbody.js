import React from 'react';

export default class BodyIndex extends React.Component {
	constructor() {
		super();
		this.state = {
			username: 'parry',
			age: 20
		}
	}
	componentWillMount () {
		console.log('this is you bodyindx ');
	}

	componentDidMount () {

	}

	render () {
		setTimeout(()=>{
			this.setState({username: "IMOOC", age: 30});
		}, 4000);

		var userName = 'shanchao';
		var boolInput = true;
		var html = 'shanchao&nbsp;shi&nbsp;tiancai';
		// 可以使用unicode 转码
		var html_unicode = 'shanchao\u0020shi';
		// commit
		return (
			<div>
				<h1>{this.state.username}{this.state.age}</h1>
				<h2>页面的主体s内容</h2>
				<p>{userName == '' ? '用户还没存在' : '用户名' + userName}</p>
				<p><input type='button' value='默认按钮' disabled={boolInput}/></p>
			{/* woshi zhushi*/}
			{
				// sss

			}
				<p>{html_unicode}</p>{/*需要进行 unicode的转码*/}
				<p dangerouslySetInnerHTML = {{__html:html}}></p> {/* 可能存在 ssx 攻击*/}
			</div>
		)
	}
}