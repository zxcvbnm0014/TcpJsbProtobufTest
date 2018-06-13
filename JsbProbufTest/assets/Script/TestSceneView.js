//
//  TestSceneView.js
//
//  Created by wen on 2018/6/13.
//
//

var LogonView = cc.Class({
    extends: cc.Component,

    properties: {
        textLabel: {
            default: null,
            type: cc.Label,
        },
    },

    onLoad () {
        cc.log("[TestSceneView][onLoad] -- onLoad");
    },
    
    onDestroy(){
        cc.log("[TestSceneView][onDestroy] -- onDestroy");
    },

    onEnable: function() {
        cc.log("[TestSceneView][onEnable] -- init");
        cc.director.on('LogonFailed',this.onLogonFailed,this);
        cc.director.on('LogonSuccess',this.onLogonSuccess,this);
        cc.director.on('BytesTest',this.onBytesTest,this);
        cc.director.on('RepeatTest',this.onRepeatTest,this);
    },
    onDisable: function() {
        cc.log("[TestSceneView][onDisable] --release");
        cc.director.off('LogonFailed',this.onLogonFailed,this);
        cc.director.off('LogonSuccess',this.onLogonSuccess,this);
        cc.director.off('BytesTest',this.onBytesTest,this);
        cc.director.off('RepeatTest',this.onRepeatTest,this);
    },

    //设置显示字体
    setResultText: function(text){
        if (this && this.textLabel == null)
        {
            cc.log("textLabel is null");
        }
        else
        {
            this.textLabel.string = text;
        }
    },

    //////////////////////////////////////////////////////////////////////////
    //按钮响应事件
    onBtnLogon: function () {
        gg.logon.login();
    },

    onBtnSendBytes: function () {
        gg.logon.sendBytes();
    },

    onBtnSendArray: function () {
        gg.logon.sendRepeated();
    },

    onBtnDisconnect: function () {
        gg.logon.disconnectServer();
        this.setResultText('连接已断开');
    },

    //////////////////////////////////////////////////////////////////////////
    //emit事件回调
    onLogonFailed: function (param) {
        let msg = param.detail;
        this.setResultText(msg);
    },

    onLogonSuccess: function (param) {
        let msg = param.detail;
        this.setResultText(`登录完成,id:${msg.id},name:${msg.name}`);
    },

    onBytesTest: function (param) {
        let msg = param.detail;
        cc.log(msg);
        this.setResultText('收到bytes回复');
    },

    onRepeatTest: function (param) {
        let msg = param.detail;
        cc.log(msg);
        this.setResultText('收到repeat回复');
    },
});