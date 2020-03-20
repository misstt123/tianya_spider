# -*- coding: UTF-8 -*-

'''
Python 3.x
无忧代理IP Created on 2018年05月11日
描述：本DEMO演示了使用小猪【动态转发】代理请求网页的过程，代码使用了多线程
@author: www.data5u.com
'''
import requests;
import time;
import threading;
import urllib3;

ips = [];

# 爬数据的线程类
class CrawlThread(threading.Thread):
    
    def __init__(self,proxyip):
        super(CrawlThread, self).__init__();
        self.proxyip=proxyip;
        
    def run(self):
        # 开始计时
        start = time.time();
        #消除关闭证书验证的警告
        urllib3.disable_warnings();

        # 请求头
        headers = {
            'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36'
        }
        
        #使用代理IP请求网址，注意第三个参数verify=False意思是跳过SSL验证（可以防止报SSL错误）
        html=requests.get(
            url=targetUrl, 
            proxies={"http" : "http://" + self.proxyip, "https" : "https://" + self.proxyip}, 
            verify=False, 
            timeout=15,
            headers=headers
        ).content.decode()
        
        # 结束计时
        end = time.time();
        # 输出内容
        print(threading.current_thread().getName() +  "耗时 " + str(end - start) + "毫秒 " + self.proxyip + " 获取到如下HTML内容：\n" + html + "\n*************")

if __name__ == '__main__':
    
    # 动态转发代理IP
    proxyIp="tunnel.data5u.com:56789";
    proxyUsername="【这里替换成你的IP提取码】";
    proxyPwd="【这里替换成你的动态转发密码】";
    
    # 要抓取的目标网站地址
    targetUrl = "http://myip.ipip.net/"; #https://pv.sohu.com/cityjson?ie=utf-8
    
    # 开启线程数量
    threadNum = 5;
    
    for reqNo in range(threadNum):
        # 开始自动获取IP
        CrawlThread(proxyUsername + ":" + proxyPwd + "@" + proxyIp).start();