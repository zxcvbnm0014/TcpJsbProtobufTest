# -*- coding: UTF-8 -*-  
#A Test to Return a AES-File of a Common File
#使用脚本时请先在脚本以及资源所在的目录创建一个res文件夹用于保存生成的文件

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