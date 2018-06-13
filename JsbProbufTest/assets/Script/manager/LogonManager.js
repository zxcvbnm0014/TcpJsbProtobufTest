//
//  BaseManager.js
//
//  Created by wen on 2018/6/13.
//
//

var BaseManager = require("BaseManager");
var proto = require('../extern/proto');
let cmd = proto.logon;

const TAG_LOGON = 1;

var LogonManager = cc.Class({
    extends: BaseManager,

    //////////////////////////////////////////////////////////////////
    //重写父类回调
    ctor: function() {
        console.log(`[LogonManager][ctor]--构造函数`);
        this._tag = TAG_LOGON;
    },

    init: function () {
        this._super();
    },

    onConnected: function (msg) {
        console.log(`[LogonManager][onConnected]--result:${msg.result}`);
        if (msg.result) {
            this.sendLogonPacket();
        } else {
            cc.director.emit("LogonFailed", '连接服务器失败，请稍后重试');
        }
    },

    onClosed: function() {
        console.log(`[LogonManager][onClosed]`);
        cc.director.emit("LogonFailed", '与服务器连接已断开，请重新登录');
    },

    onTcpDataRecv: function (main,sub,data,size) {
        console.log(`[LogonManager][onTcpDataRecv] -- main:${main},sub:${sub},size:${size}`);
        switch (main) {
            case cmd.main.kLogon:
                this.onCmdMainLogon(sub,data,size);
                break;
            default:
                break;
        }
    },

    //////////////////////////////////////////////////////////////////
    //私有函数，外部不调用
    onCmdMainLogon: function (sub,data,size) {
        console.log(`[LogonManager][onCmdMainLogon] --sub:${sub},size:${size}`);
        switch (sub) {
            case cmd.sub.kLogonRes:
                this.onSubLogonResonse(data,size);
                break;
            case cmd.sub.kBytesRes:
                this.onSubBytesResonse(data,size);
                break;
            case cmd.sub.kRepeatRes:
                this.onSubRepeatResonse(data,size);
                break;
            default:
                break;
        }
    },

    onSubLogonResonse: function(data,size){
        console.log(`[LogonManager][onSubLogonResonse] --size:${size}`);
        let logonTest = cmd.LogonTest.decode(data);
        cc.log(`[logonTest] -- id:${logonTest.id},name:${logonTest.name}`);
        cc.director.emit('LogonSuccess',logonTest);
    },

    onSubBytesResonse: function(data,size){
        console.log(`[LogonManager][onSubBytesResonse] --size:${size}`);
        let bytesTest = cmd.BytesTest.decode(data);
        cc.log(`[bytesTest] -- id:${bytesTest.id},buf:${bytesTest.buf}`);
        cc.director.emit('BytesTest',bytesTest);
    },

    onSubRepeatResonse: function(data,size){
        console.log(`[LogonManager][onSubRepeatResonse] --size:${size}`);
        let repeatTest = cmd.RepeatTest.decode(data);
        cc.director.emit('RepeatTest',repeatTest);
    },

    sendLogonPacket: function(){
        console.log(`[LogonManager][sendLogonPacket] --sendLogonPacket`);
        let logon = {id:1, name:'wen'};
        let uint8Array = cmd.LogonTest.encode(logon).finish();
        this.sendData(cmd.main.kLogon,cmd.sub.kLogonReq,uint8Array);
    },

    //////////////////////////////////////////////////////////////////
    //外部调用接口
    login: function() {
        this.connectServer('127.0.0.1:9008');
    },

    sendBytes: function () {
        let buffer = new Uint8Array(10);
        for (let index = 0; index < buffer.length; index++) {
            buffer[index] = index + 1;
        }
        let testBytes = {id:2, buf: buffer};
        let uint8Array = cmd.BytesTest.encode(testBytes).finish();
        this.sendData(cmd.main.kLogon,cmd.sub.kBytesReq,uint8Array);
    },

    sendRepeated: function () {
        let array = {items:[{id:3,text:'333'},{id:4,text:'444'},{id:5,text:'555'}]};
        let uint8Array = cmd.RepeatTest.encode(array).finish();
        this.sendData(cmd.main.kLogon,cmd.sub.kRepeatReq,uint8Array);
    },

});