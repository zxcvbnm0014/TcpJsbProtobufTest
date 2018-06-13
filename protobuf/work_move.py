# -*- coding: UTF-8 -*-  
# 脚本可以自动修改生成的proto.js文件，并拷贝到项目的目录下

import os
import shutil

def doWork():
	fp1 = file('proto.js','r')
	fp2 = file('proto_bak.js','w')
	for s in fp1.readlines():
		fp2.write(s.replace('var $protobuf = require("protobufjs/minimal");','var $protobuf = protobuf;'))
	fp1.close();
	fp2.close();
	print 'change text over'

def doCopy():
	shutil.copyfile('proto_bak.js', '../JsbProbufTest/assets/Script/extern/proto.js')
	os.remove('proto_bak.js')
	print 'copy over,remove bakfile.'
	
if __name__ == '__main__':
	os.system('pbjs -t static-module -w commonjs -o proto.js *.proto')
	print 'create protobuf js over'
	doWork();
	doCopy(); 
	print 'over'
