//
// 需要 jQuery 库，Bootstrap 4 支持
// 

function msgbox(options) {

	var opts = {
		mesage : '',			// 消息 
		title : '信息提示',		// 标题
		callback : {
			ok: null,			// 确定取消回调函数
			cancel: null
		},
		backdrop : true,		// 点击遮罩层关闭功能 true 为开启 false 为关闭
		animation : true,		// 动画显示效果
		remove: false,			// 禁用所有按钮
		center: true,			// 弹出位置在中间

	}

    if (typeof options === 'object') {		// 首先合并参数
        $.extend(opts, options);
    }
	
	var timestamp = new Date().getTime();
	var salt = timestamp.toString();
		salt = salt.substr(5);

	salt = salt + parseInt(Math.random() * 100000);

	var center = '';
	if(opts.center === true) {
		center = " modal-dialog-centered";
	}

    if (typeof options === 'string') {		// 如果是字符串 ，只显示消息
        opts.message = options;
        opts.backdrop = false;
        opts.animation = false;
    } 

    	var fade = '';
    if (opts.animation === true) {			// 动画效果
        fade = ' fade';
    }

	var str = '<div class="modal'+ fade +'" id="jqbs_showmessg_'+salt+'" tabindex="1" role="dialog" aria-labelledby="jqbs_showmessage_title_'+salt+'" aria-hidden="true">';
	  	str += '<div class="modal-dialog'+ center +'" role="document">';
	    str += '<div class="modal-content">';
	    str += '<div class="modal-header bg-info" style="color:#fff">';
	    str += '<h5 class="modal-title" id="jqbs_showmessage_title_'+salt+'">' + opts.title + '</h5>';
	    str += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
	    str += '<span aria-hidden="true">&times;</span>';
	    str += '</button>';
	    str += '</div>';
	    str += '<div class="modal-body">';
	    if (typeof opts.message === 'string') {
	    str +=  opts.message;	
	    }
	    str += '</div>';

	    if(!opts.remove) {

	    str += '<div class="modal-footer">';
	    if(typeof opts.callback.cancel === "function") {
		    str += '<button type="button" class="btn btn-secondary" id="jqbs_cancel_'+salt+'">取消</button>';
		} else if(typeof opts.callback.ok === "function") {
		    str += '<button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>';
		}
			str += '<button type="button" class="btn btn-primary" id="jqbs_ok_'+salt+'">确定</button>';
	    str += '</div>';
		}
	    str += '</div>';
	  	str += '</div>';
		str += '</div>';

	$("body").append(str); 											// 添加元素

	if (typeof opts.message === 'object') {		// 合并参数
        $('.modal-body').append(opts.message);
    }

	$('#jqbs_showmessg_'+salt).modal({backdrop : opts.backdrop});			// 显示，取消背景点击隐藏功能

	$('#jqbs_showmessg_'+salt).on('hidden.bs.modal', function (e) {		
	  	$('#jqbs_showmessg_'+salt).remove();								// 隐藏后删除元素
	})

	if(typeof opts.callback.ok === "function") {
		$('#jqbs_ok_'+salt).bind('click', function(e){
			opts.callback.ok(e);
			$('#jqbs_showmessg_'+salt).modal('hide');
		});
	}else {
		$('#jqbs_ok_'+salt).bind('click', function(e){
			$('#jqbs_showmessg_'+salt).modal('hide');
		});
	}

	if(typeof opts.callback.cancel === "function") {
		$('#jqbs_cancel_'+salt).bind('click', function(e){
			opts.callback.cancel(e);
			$('#jqbs_showmessg_'+salt).modal('hide');
		});
	}else {
		$('#jqbs_cancel_'+salt).bind('click', function(e){
			$('#jqbs_showmessg_'+salt).modal('hide');
		});
	}

	$(document).on('click', '[msgbox="hide"]', function(event) {
		$('#jqbs_showmessg_'+salt).modal('hide');
	});
}