//
//  SocketManager.cpp
//
//  Created by wen on 2018/6/12.
//
//

#ifndef __NET_MANAGER_H__
#define __NET_MANAGER_H__

#include "TcpSocket.h"

class SocketManager {
public:
	static SocketManager* getInstance();

	void init();

	~SocketManager();

	void connectServer(int32_t tag,
					   const std::string ipAddr,
					   ConnectCallback connectCallback,
					   CloseCallback closeCallback,
					   RecvCallback recvCallback = nullptr);

	bool connected(int32_t tag);

	void disconnectServer(int32_t tag);

	void sendData(int32_t tag, uint16_t mainCmd, uint16_t subCmd, void* data, uint32_t size);

private:
	SocketManager();

private:
	std::map<int, TcpSocket*> m_socketMap;
};

#endif //__SOCKET_MANAGER_H__