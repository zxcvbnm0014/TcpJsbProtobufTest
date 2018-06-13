//
//  TcpSocket.cpp
//
//  Created by wen on 2018/6/12.
//
//

#include "TcpSocket.h"

USING_NS_CC;

//模拟收发，收到什么包回复什么包

TcpSocket::TcpSocket()
{
	m_connected = false;
}

TcpSocket::~TcpSocket()
{
	m_connected = false;
}

TcpSocket* TcpSocket::create(SocketInfo info)
{
	TcpSocket* socket = new TcpSocket();
	if (socket && socket->init(info))
	{
		return socket;
	}
	return nullptr;
}

bool TcpSocket::init(SocketInfo info)
{
	m_info = info;
	Director::getInstance()->getScheduler()->schedule(schedule_selector(TcpSocket::update),this,0.5f,false);
	NetEventData event_;
	event_.type = EventType::Connect;
	m_queue.push(event_);
	return true;
}

void TcpSocket::update(float dt)
{
	if (!m_queue.empty())
	{
		NetEventData& data = m_queue.front();
		switch (data.type)
		{
		case EventType::Connect: 
		{
			m_info.connectCallback(m_info.tag,true);
			break;
		}

		case EventType::Send:
		{
			m_info.recvCallback(m_info.tag, data.mainCmd, data.subCmd + 1, data.data, data.size);
			free(data.data);
			break;
		}

		default:
			break;
		}
		m_queue.pop();
	}
}

bool TcpSocket::connected()
{
	return m_connected;
}

void TcpSocket::sendData(uint16_t mainCmd, uint16_t subCmd, void* data, uint32_t size)
{
	NetEventData event_;
	event_.type = EventType::Send;
	event_.mainCmd = mainCmd;
	event_.subCmd = subCmd;
	event_.size = size;
	event_.data = malloc(size);
	memcpy(event_.data,data,size);
	m_queue.push(event_);
}

void TcpSocket::disconnect()
{
	Director::getInstance()->getScheduler()->unschedule(schedule_selector(TcpSocket::update), this);
}

void TcpSocket::release()
{
	delete this;
}