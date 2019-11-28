# msgbox

基于 Bootstrap4 的模态框对话框插件

<a href="https://www.tianlunvip.com/demo/msgbox.html" target="_blank">进入演示页面</a>

### 引用

```html
<script src="//cdn.jsdelivr.net/gh/tianlunvip/msgbox/msgbox.js"></script>
```

### 用法：

```javascript
msgbox(message, options, callback)
```

**message**: 消息文本

**options**: 可选,如果为字符串，则设置为消息框标题

	options = {
		title  		: '信息提示',  	// 标题
		callback   	: callback,		// 回调函数
		backdrop   	: false,		// 点击遮罩层关闭功能 true 为开启 false 为关闭
		animation  	: true,			// 动画显示效果
		center 		: true,			// 弹出位置在中间
		buttons		: [
				{type: "button", value: "确定", style : 'primary'},
				{type: "button", value: "取消", style : 'secondary'},
				],
	    style  		: 'info',		// 消息框风格样式
	    remote 		: ''			// 远程数据
	};

**callback**：回调函数，接收一个参数 参数值为 buttons.value 区别不同按钮事件

### 示例：

#### **1.Exp**

**简单的弹出**

```javascript
msgbox("我是一个提示框");
```

#### **2.Exp**

**修改标题**

```
msgbox("我是一个提示框"，"主席发来贺电！");
```

#### **3.Exp**

**修改添加按钮**

```javascript
msgbox("我是一个提示框",{ 
	buttons: [
		{type: "button", value: "确定", style : 'primary'},
		{type: "button", value: "取消", style : 'secondary'},
		{type: "button", value: "终止", style : 'danger'},
		],
	}
);
```

#### **4.Exp**

**使用回调函数**

```javascript
msgbox("我是一个提示框",{ 
	buttons: [
		{type: "button", value: "确定", style : 'primary'},
		{type: "button", value: "取消", style : 'secondary'},
		{type: "button", value: "终止", style : 'danger'},
		],
	},
	function(text){
		if(text === "确定"){
			alert("你按下了确定");
		}else if(text === "取消"){
			alert("你按下了取消");
		}else if(text === "终止"){
			alert("你按下了终止");
		}
	}
);
```

#### **5.Exp**

**添加表单输入**

```javascript
msgbox("我是一个提示框",{
	inputs  : [
      		{type: "text",     label: "用户名:", value: "George"},
      		{type: "password", label: "密码:"}
    		],
	buttons : [
		{type: "button", value: "确定", style : 'primary'},
		{type: "button", value: "取消", style : 'secondary'},
		{type: "button", value: "终止", style : 'danger'},
		],
	},
	function(text){
		if(text === "确定"){
			alert("你按下了确定");
		}else if(text === "取消"){
			alert("你按下了取消");
		}else if(text === "终止"){
			alert("你按下了终止");
		}
	}
);
```

#### **6.Exp**

**获取表单数据**

```javascript
msgbox("我是一个提示框",{
	inputs  : [
      		{type: "text",     label: "用户名:", value: "George"},
      		{type: "password", label: "密码:"}
    		],
	buttons : [
		{type: "button", value: "确定", style : 'primary'},
		{type: "button", value: "取消", style : 'secondary'},
		],
	},
	function(text, value1, value2){
		if(text === "确定"){
			msgbox("输入数据<br>第一个表单值：" + value1 + "<br>第二个表单值：" + value2);
		}else if(text === "取消"){
			alert("你按下了取消");
		}
	}
);
```

> 如果要获取`N`个表单的值，则只需要在回调函数中添加`N`个参数即可

```javascript
function(text, value1, value2, value3, ... , N ){
	if(text === "确定"){
		msgbox("输入数据<br>第一个表单值：" + value1 + "<br>第二个表单值：" + value2);
	}
}
```

#### **7.Exp**

**加载远程数据**

```javascript
msgbox("",{
	buttons : null,		// 删除默认按钮
	remote : 'https://www.tianlunvip.com/demo/remote.html'
	}
);
```


