//
//  CNetResponse.cpp
//
//  Created by wen on 2018/4/23.
//
//

#include "CNetResponse.h"

CNetResponse::CNetResponse():_tag(0),
_type(0),
_mainCmd(0),
_subCmd(0),
_string("")
{
	
}

CNetResponse::~CNetResponse()
{
	_data.clear();
}

cocos2d::Data CNetResponse::getTcpData()
{
	return _data;
}

void CNetResponse::setTcpData(unsigned char* buf, uint32_t size)
{
	setSize(size);
	if (size == 0)
	{
		_data.clear();
	}
	else
	{
		_data.copy(buf, size);
	}	
}