//
//  TcpSocket.h
//
//  Created by wen on 2018/6/12.
//
//

#ifndef __TCP_SOCKET_H__
#define __TCP_SOCKET_H__

#include "cocos2d.h"

typedef std::function<void(int32_t, bool)> ConnectCallback;
typedef std::function<void(int32_t)> CloseCallback;
typedef std::function<bool(int32_t, uint16_t, uint16_t, void*, uint32_t)> RecvCallback;

using namespace std::placeholders;

#define RECV_CALLBACK(func, _Object, ...) std::bind(&func, _Object, _1, _2, _3, _4, _5, ##__VA_ARGS__)
#define CLOSE_CALLBACK(func, _Object, ...) std::bind(&func, _Object, _1, ##__VA_ARGS__)
#define CONNECT_CALLBACK(func, _Object, ...) std::bind(&func, _Object, _1, _2, ##__VA_ARGS__)

struct SocketInfo
{
	std::string ipAddr;
	ConnectCallback connectCallback;
	CloseCallback closeCallback;
	RecvCallback recvCallback;
	int tag;
}; 

enum EventType
{
	Connect = 0,
	Send = 1,
	Close = 2,
};

struct NetEventData
{
	EventType type;
	uint16_t mainCmd;
	uint16_t subCmd; 
	void* data; 
	uint32_t size;
};


class TcpSocket : public cocos2d::Ref
{
public:
	static TcpSocket* create(SocketInfo info);
	
	TcpSocket();

	~TcpSocket();

	bool init(SocketInfo info);

	bool connected();

	void update(float dt);

	void sendData(uint16_t mainCmd, uint16_t subCmd, void* data, uint32_t size);

	void disconnect();

	void release();

private:
	SocketInfo m_info;
	bool m_connected;
	std::queue<NetEventData> m_queue;
};

#endif //__NET_SOCKET_MANAGER_H__