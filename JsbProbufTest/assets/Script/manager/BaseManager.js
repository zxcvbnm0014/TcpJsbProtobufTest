//
//  BaseManager.js
//
//  Created by wen on 2018/6/13.
//
//

var ResType = cc.Enum({
    Connected: 1,
    Closed: 2,
    TcpRecv: 3,
});

var BaseManager = cc.Class({
    ctor: function () {
        console.log(`[BaseManager][ctor]--构造函数`);
        if (cc.sys.isNative) {
            this._CNetClient = CNetClient.client();
            this._tag = undefined;
        }
    },

    init: function () {
        console.log(`[BaseManager][init]--init`);
    },

    connectServer: function(server){
        console.log(`[BaseManager][connectServer]--server:${server},tag:${this._tag}`);
        if (this&&this._CNetClient) {
            var self = this;
            this._func = function(response){
                self.onSocketEvent(response);
            }.bind(self);
    
            this._server = server;
            this._CNetClient.connectServer(this._tag,this._server,this._func);
        }
    },

    disconnectServer: function(){
        console.log(`[BaseManager][disconnectServer]--tag:${this._tag}`);
        if (this && this._CNetClient) {
            this._CNetClient.disconnectServer(this._tag);
        }
    },   

    isConnected: function(){
        console.log(`[BaseManager][isConnected]--tag:${this._tag}`);
        if (this && this._CNetClient) {
            return this._CNetClient.connected(this._tag);
        }
        return false;
    },

    sendData: function(main,sub,data) {
        console.log(`[BaseManager][sendData]--tag:${this._tag},main:${main},sub:${sub}`);
        if (this && this._CNetClient) {
            if (data == null) {
                this._CNetClient.sendCmd(this._tag,main,sub);
            } else {
                this._CNetClient.sendData(this._tag,main,sub,data);
            }
        }
    },

    onSocketEvent: function(response) {
        console.log(`[BaseManager][onSocketEvent]--type:${response.getType()}`);
        let type = response.getType();
        switch (type) {
            case ResType.Connected:
            {
                var msg = {};
                msg.result = false;
                if (response.getMain() == 1) 
                {
                    msg.result = true;
                }
                msg.ip = response.getString();
                this.onConnected(msg);
            }
                break;
            case ResType.Closed:
            {   
                this.onClosed(); 
            }
                break;
            case ResType.TcpRecv:
            {
                let main = response.getMain();
                let sub = response.getSub();
                let size = response.getSize();
                if (size === 0){
                    this.onTcpDataRecv(main,sub,undefined,size);
                } else {
                    var data = response.getTcpData();
                    this.onTcpDataRecv(main,sub,data,size);
                }
            }
                break;
            default:
                break;
        }
    },

    onConnected: function(msg) {
        console.log(`[BaseManager][onConnected]`);
    },

    onClosed: function() {
        console.log(`[BaseManager][onClosed]`);
    },

    onTcpDataRecv: function(main,sub,data,size){
        console.log(`[BaseManager][onTcpDataRecv] -- main:${main},sub:${sub},size:${size}`);
    },
});

module.exports = BaseManager;