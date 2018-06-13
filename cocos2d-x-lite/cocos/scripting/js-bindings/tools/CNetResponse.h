//
//  CNetResponse.h
//
//  Created by wen on 2018/4/23.
//
//

#ifndef CNet_Response_h
#define CNet_Response_h

#include "cocos2d.h"

class CNetResponse {
public:
	CNetResponse();

	~CNetResponse();

	cocos2d::Data getTcpData();

	void setTcpData(unsigned char* buf, uint32_t size);

	CC_SYNTHESIZE(int32_t, _tag, Tag);
	CC_SYNTHESIZE(int32_t, _type, Type);
	CC_SYNTHESIZE(uint16_t, _mainCmd, Main);
	CC_SYNTHESIZE(uint16_t, _subCmd, Sub);
	CC_SYNTHESIZE(uint32_t, _size, Size);
	CC_SYNTHESIZE(std::string, _string, String);

private:
	cocos2d::Data _data;
};
#endif /* CNetResponse.h */
