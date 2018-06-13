//
//  CNetClient.cpp
//
//  Created by wen on 2018/4/23.
//
//

#include "CNetClient.h"
#include "Net/SocketManager.h"

#define Type_OnConnect 1
#define Type_OnClose 2
#define Type_OnTcpRecv 3

CNetClient* CNetClient::m_sCNetClient = nullptr;

CNetClient::CNetClient()
{

}

CNetClient::~CNetClient()
{

}

CNetClient* CNetClient::client()
{
	if (m_sCNetClient == nullptr)
	{
		m_sCNetClient = new CNetClient();
	}
	return m_sCNetClient;
}

void CNetClient::connectServer(int32_t tag, std::string ipAddr, const std::function<bool(const CNetResponse*)> callback)
{
	ConnectCallback connect = CONNECT_CALLBACK(CNetClient::OnConnect, this);
	CloseCallback close = CLOSE_CALLBACK(CNetClient::OnClose, this);
	RecvCallback tcpRecv = RECV_CALLBACK(CNetClient::OnTcpRecv, this);

	SocketManager::getInstance()->connectServer(tag, ipAddr, connect, close, tcpRecv);
	m_callbackMap[tag] = callback;
}

void CNetClient::disconnectServer(int32_t tag)
{
	SocketManager::getInstance()->disconnectServer(tag);
	m_callbackMap[tag] = NULL;
}

bool CNetClient::connected(int32_t tag)
{
	return SocketManager::getInstance()->connected(tag);
}

void CNetClient::sendData(int32_t tag, uint16_t mainCmd, uint16_t subCmd, cocos2d::Data data)
{
	SocketManager::getInstance()->sendData(tag,mainCmd,subCmd,data.getBytes(),data.getSize());
}

void CNetClient::sendCmd(int32_t tag, uint16_t mainCmd, uint16_t subCmd)
{
	SocketManager::getInstance()->sendData(tag, mainCmd, subCmd, NULL, 0);
}

void CNetClient::OnConnect(int32_t tag,bool isSuccess)
{
	if (m_callbackMap.find(tag) != m_callbackMap.end())
	{
		auto func = m_callbackMap[tag];
		if (func)
		{
			CNetResponse response;
			response.setTag(tag);
			response.setType(Type_OnConnect);
			response.setMain(isSuccess);
			func(&response);
		}
	}
}

void CNetClient::OnClose(int32_t tag)
{
	if (m_callbackMap.find(tag) != m_callbackMap.end())
	{
		auto func = m_callbackMap[tag];
		if (func)
		{
			CNetResponse response;
			response.setTag(tag);
			response.setType(Type_OnClose);
			func(&response);
		}
	}
}

bool CNetClient::OnTcpRecv(int32_t tag, uint16_t mainCmd, uint16_t subCmd, void* pData, uint32_t size)
{
	if (m_callbackMap.find(tag) != m_callbackMap.end())
	{
		auto func = m_callbackMap[tag];
		if (func)
		{
			CNetResponse response;
			response.setTag(tag);
			response.setType(Type_OnTcpRecv);
			response.setMain(mainCmd);
			response.setSub(subCmd);
			response.setTcpData((unsigned char*)pData, size);
			return func(&response);
		}
	}
	return true;
}