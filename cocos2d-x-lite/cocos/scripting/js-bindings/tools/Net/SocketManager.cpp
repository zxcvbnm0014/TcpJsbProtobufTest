//
//  SocketManager.cpp
//
//  Created by wen on 2018/6/12.
//
//

#include "SocketManager.h"

static SocketManager *s_socketManager = nullptr;

SocketManager* SocketManager::getInstance() 
{
	if (!s_socketManager)
	{
		s_socketManager = new SocketManager();
		s_socketManager->init();
	}
	return s_socketManager;
}


SocketManager::SocketManager() 
{
}

SocketManager::~SocketManager() 
{

}

void SocketManager::init() 
{

}

void SocketManager::connectServer(int32_t tag,
								const std::string ipAddr, 
								ConnectCallback connectCallback, 
								CloseCallback closeCallback, 
								RecvCallback recvCallback /* = nullptr */) 
{
	SocketInfo info;
	info.tag = tag;
	info.ipAddr = ipAddr;
	info.connectCallback = connectCallback;
	info.closeCallback = closeCallback;
	info.recvCallback = recvCallback;
	TcpSocket* socket = TcpSocket::create(info);
	m_socketMap[tag] = socket;
}

bool SocketManager::connected(int32_t tag) 
{
	if (m_socketMap.find(tag) != m_socketMap.end())
	{
		TcpSocket* socket = m_socketMap[tag];
		if (socket)
		{
			return socket->connected();
		}
	}
	return false;
}

void SocketManager::disconnectServer(int32_t tag) 
{
	if (m_socketMap.find(tag) != m_socketMap.end())
	{
		TcpSocket* socket = m_socketMap[tag];
		if (socket)
		{
			socket->disconnect();
			socket->release();
			m_socketMap.erase(tag);
		}
	}
}

void SocketManager::sendData(int32_t tag, uint16_t mainCmd, uint16_t subCmd, void* data, uint32_t size) 
{
	if (m_socketMap.find(tag) != m_socketMap.end())
	{
		TcpSocket* socket = m_socketMap[tag];
		if (socket)
		{
			socket->sendData(mainCmd, subCmd, data, size);
		}
	}
}