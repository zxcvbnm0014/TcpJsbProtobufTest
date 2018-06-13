//
//  CNetClient.h
//
//  Created by wen on 2018/4/23.
//
//

#ifndef CNetClient_h
#define CNetClient_h

#include "cocos2d.h"
#include "CNetResponse.h"

class CNetClient
{
public:
	static CNetClient* client();

public:
	CNetClient();
    ~CNetClient();

	void connectServer(int32_t tag, std::string ipAddr, const std::function<bool(const CNetResponse*)> callback);

    void disconnectServer(int32_t tag);

	bool connected(int32_t tag);
    
	void sendData(int32_t tag, uint16_t mainCmd, uint16_t subCmd, cocos2d::Data data);

	void sendCmd(int32_t tag, uint16_t mainCmd, uint16_t subCmd);

	//socket回调函数
public:
	void OnConnect(int32_t tag, bool bSuccess);

	void OnClose(int32_t tag);

	bool OnTcpRecv(int32_t tag, uint16_t mainCmd, uint16_t subCmd, void* pData, uint32_t size);

private:
	std::map<int,std::function<bool(const CNetResponse*)>> m_callbackMap;

private:
	static CNetClient* m_sCNetClient;
};

#endif /* CNetClient */
