import re
from bs4 import BeautifulSoup
import requests
import random

import json
import pymysql
import pandas as pd
import html
import csv
import pymongo
import threading;
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.header import Header
from threading import Thread  # 导入线程函数
from DBUtils.PooledDB import PooledDB
import time

headers_nocookie = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.116 Safari/537.36',
    'Accept-Language': 'zh-CN,zh-TW;q=0.9,zh;q=0.8,en-US;q=0.7,en;q=0.6',
}

cookies = {
    "__cid":"CN",
    "ADVC":"384bb26d8e7448",
    "__auc":"f0789a4a170f07f547885a63dcb",
    "__guid":"150195568",
    "__guid2":"150195568",
    "ASL":"18341,000ja,78efb1eb78efb1eb",
    "bc_ids_m":"ux",
    "bc_ids_w":"vs",
    "bc_exp":"0.2",
    "ADVS":"384caf1cdacf96",
    "tianya1":"12980,1584692349,6,64031",
    "Hm_lvt_bc5755e0609123f78d0e816bf7dee255":"1584587171,1584691369,1584691398,1584692349",
    "Hm_lvt_80579b57bf1b16bdf88364b13221a8bd":"1584697831",
    "Hm_lpvt_80579b57bf1b16bdf88364b13221a8bd":"1584697839",
    "__asc":"99c56f04170f87dc477825f3d76",
    "__u_a":"v2.3.0",
    "leftNavId":"0",
    "time":"ct=1584719260.455",
    "__ptime":"1584719260705",
    "Hm_lpvt_bc5755e0609123f78d0e816bf7dee255":"1584719261"
}


headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.116 Safari/537.36',
    'Accept-Language': 'zh-CN,zh-TW;q=0.9,zh;q=0.8,en-US;q=0.7,en;q=0.6',
}


def current_time():
    '''
    返回当前时间
    :return:
    '''
    return time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())

def sleep(sec):
    time.sleep(sec)


def notice_wechat(title, content):
    '''server酱通知微信'''
    api = "https://sc.ftqq.com/SCU34444Tec5ddc0a08f5efe3747f9e2673adf2975e74272531a5f.send"
    data = {
        'text': title,
        'desp': content
    }
    req = requests.post(api, data)

def get_bbsInfo(url,index):
    while(mutex==1):
        sleep(0.1)
    res = requests.get(url,headers=headers,proxies={'http':'http://{}'.format(ips[index])},timeout=50,verify=False)
    soup = BeautifulSoup(res.text, 'html.parser')
    print("正在爬取的url为：{}".format(url))
    data = {}

    #判断是否为空
    try:
        pre_info = soup.select("div.atl-info")[0]
    except:
        return data

    title = soup.find('span', style='font-weight:400;').text.strip()  # 标题
    span_all = pre_info.find_all("span")



    username = span_all[0].a.text  # 用户名
    userid = span_all[0].a.attrs['uid']  # 用户id
    time = span_all[1].text.split("：")[1].strip()
    click = int(span_all[2].text.split("：")[1].strip())
    reply = int(span_all[3].text.split("：")[1].strip())
    try:
        content = soup.find("div", class_="bbs-content clearfix").text.strip().replace("\n", "-")
    except:
        content="has something problem"

    data['userid'] = userid
    data['url']=url
    data['title'] = title
    data['username'] = username

    data['time'] = time
    data['click'] = click
    data['reply'] = reply
    data['content'] = content

    return data

    # print(content)
    # print(pre_info)
    # print(reply)
    # print(count)
    # print(time)
    # # print(userid)
    # print(username)
    # # print(title)
    # ri = requests.get(ui, headers)
    # soupi = BeautifulSoup(ri.text, 'html.parser')
    # # title = soupi.find(id = "viewbox_report").span.text
    # title = soupi.h1['title']  # 标题
    # upload_time = soupi.find("span", {'class': 'a-crumbs'}).next_sibling.text  # 上传时间
    # # upload_time = re.search(r'(20.*\d)',soupi.find("div",class_ ="video-data").text)
    # play_count = soupi.find("div", {'class': 'video-data'})  # 播放量

    # 弹幕
    # cid = re.search(r'"cid":(\d*),', ri.text).group(1)  # cid





def get_outer_urls():
    '''
    爬取所有子版块信息
    :param timestamp:时间戳，毫秒
    :return:
    '''
    url = ['http://bbs.tianya.cn/list-free-1.shtml', 'http://bbs.tianya.cn/list-university-1.shtml',
           'http://bbs.tianya.cn/list-828-1.shtml', 'http://bbs.tianya.cn/list-develop-1.shtml',
           'http://bbs.tianya.cn/list-stocks-1.shtml', 'http://bbs.tianya.cn/list-1151-1.shtml',
           'http://bbs.tianya.cn/list-1179-1.shtml', 'http://bbs.tianya.cn/list-1190-1.shtml',
           'http://bbs.tianya.cn/list-665-1.shtml', 'http://bbs.tianya.cn/list-feeling-1.shtml',
           'http://bbs.tianya.cn/list-no11-1.shtml', 'http://bbs.tianya.cn/list-fans-1.shtml',
           'http://bbs.tianya.cn/list-play-1.shtml']

    # pre_url = "http://bbs.tianya.cn"
    thread_lis=[]
    for i in range(len(url)):
        bankuai = re.search("-.*-", url[i]).group()[1:-1]
        next_id =  1584619200000 #2020-03-19 20:00:00
        count=0  #计数器
        thread_lis.append(Thread(target=multi_thread,args=[bankuai,count,next_id,i]))
    for item_thread in thread_lis:
        item_thread.start()
        time.sleep(0.2)

    # url = "http://bbs.tianya.cn/"

    # nav_child_box = soup.find_all("div", class_="nav_child_box")[0].ul.select("li")
    # lis = []
    # for item in nav_child_box:
    #     lis.append(str(pre_url+item.a.get("href")))
    # print(lis)
    # print(nav_child_box)

    # print(soup)
    # urllst = []
    # for i in range(page):
    #     ui = f'https://search.bilibili.com/all?keyword={keyword}&page={i + 1}'
    #     urllst.append(ui)
    # return urllst


def multi_thread(bankuai, count, next_id,index):
    '''
    :param bankuai: 版块
    :param count: 计数器
    :param next_id: 下一个id
    :param proxy: 代理ip的下标索引
    '''
    while int(next_id) > 1552996800000:  # 2019-03-19 20:00:00
        sleep(0.1)
        count += 1
        print("版块：{}，计数：{}".format(bankuai,count))
        begin_url = "http://bbs.tianya.cn/list.jsp?item={}&nextid={}".format(bankuai, next_id)
        res = requests.get(begin_url, headers=headers,cookies=cookies,timeout=30,verify=False)
        # time.sleep(random.random())
        soup = BeautifulSoup(res.text, "html.parser")
        bbsurl_list = get_inter_urls(soup)
        for bbs_url in bbsurl_list:
            time.sleep(random.random() + 1)
            bbs_info = get_bbsInfo(bbs_url,index)
            if(len(bbs_info)!=0):
                insert_mysql(bbs_info)
                toCSV(bbs_info, 1)
        # 获取下一页面的时间戳
        next_url_post = soup.find("div", class_='short-pages-2 clearfix').select("a")[2].attrs['href']
        next_id = int(re.search("nextid=.*", next_url_post).group()[7:])


def get_inter_urls(soup):
    '''
    单个论坛版块页面每个帖文url采集
    结果：得到一个帖文页面url的list
    :param soup: beautifulsoup
    '''
    pre_url = "http://bbs.tianya.cn"
    # ri = requests.get(url, headers, cookies=cookies)
    # soup = BeautifulSoup(ri.text, 'html.parser')
    bbs_urllist = soup.find_all('td', {'class': 'td-title faceblue'})
    lst = []
    for item in bbs_urllist:
        lst.append(str(pre_url + item.a['href']))
    return lst

    # for li in lis:
    #     lst.append(re.search('av\d+', li.a['href']).group(0))
    # return lst





# 连接数据库
try:
    conn_thread =PooledDB(
        pymysql,
        mincached=13,
        host="localhost",
        user="root",
        passwd="qwe123456",
        db="spider",
        port=3306
    )
except:
    notice_wechat("数据库连接池初始化失败", "时间为： " + current_time())


def insert_mysql(data):
    '''
    插入mysql数据库
    :param data:
    :return:.
    '''
    keys = ",".join(data.keys())
    values = ",".join(str("%s") for i in range(len(data.values())))
    len(data.values())
    sql = "insert into tianya({}) values({})".format(keys, values)
    # sql = "insert into video(id,title,desp) values(%s,%s,%s);"
    # val = ('测试1', '测试内容1')
    values_list = data.values()
    values = tuple(values_list)
    # values = values[0:3]
    print(values)


    try:
        con=conn_thread.connection()
        cursor = con.cursor()
        con.ping(reconnect=True)
        cursor.execute(sql, values)
        con.commit()
        print("插入成功")
    except Exception as e:
        notice_wechat("插入数据库失败", "时间: " + current_time() + ", url： " + data['url'] + ", 异常信息： " + str(e))
        con.rollback()

        # print(type(e))
        # ss=str(e)
        # print(ss)

        print("插入失败")
        print(e)
    finally:
        cursor.close()
        con.close()


def toCSV(data, flags):
    '''
    将抓取到的数据转换成CSV文件
    :param data:数据
    :param flags:标志位 0：元组，1：字典
    :return:
    '''
    # write_clo = ['第一列', '第二列', '第三列', '第四列']
    if flags == 1:
        write_clo = data.values()
    else:
        write_clo = data
    try:
        df = pd.DataFrame(columns=(write_clo))
        df.to_csv("tianya.csv", line_terminator="\n", index=False, mode='a', encoding='utf8')
    except Exception as e:
        notice_wechat("csv插入异常", "时间: " + current_time() + ", url： " + data['url'], ", 异常信息： " + str(e))
        print(e)

    # python2可以用file替代open
    # with open("bilibili.csv", "w") as csvfile:
    #     writer = csv.writer(csvfile)
    #
    #     # 先写入columns_name
    #     writer.writerow(['第一列','第二列','第三列','第四列'])
    #     # 写入多行用writerows
    #     writer.writerows([[0, 1, 3], [1, 2, 3], [2, 3, 4]])


def sendMail(title, att_name):
    '''
    :param title: 邮件标题
    :param att_name: 附件名，生成的csv附件名
    :return:
    '''
    sender = 'goddong12580@163.com'
    pwd = 'DVCDOGAJMNFJMRAC'
    receivers = '923219711@qq.com'  # 接收邮件，可设置为你的QQ邮箱或者其他邮箱

    # 创建一个带附件的实例
    try:
        message = MIMEMultipart()
        message['From'] = Header("傻有钱企业", 'utf-8')
        message['To'] = receivers
        subject = title
        message['Subject'] = Header(subject, 'utf-8')

        # 邮件正文内容
        message.attach(MIMEText('爬虫抓取完成数据抓取完成请下载附件', 'plain', 'utf-8'))

        # 构造附件1，传送当前目录下的 test.txt 文件
        att1 = MIMEText(open(att_name, 'rb').read(), 'base64', 'utf-8')
        att1["Content-Type"] = 'application/octet-stream'
        # 这里的filename可以任意写，写什么名字，邮件中显示什么名字
        att1["Content-Disposition"] = 'attachment; filename="{}"'.format(att_name)
        message.attach(att1)
    except Exception as e:
        print(e)

    # 构造附件2，传送当前目录下的 runoob.txt 文件
    # att2 = MIMEText(open('runoob.txt', 'rb').read(), 'base64', 'utf-8')
    # att2["Content-Type"] = 'application/octet-stream'
    # att2["Content-Disposition"] = 'attachment; filename="runoob.txt"'
    # message.attach(att2)

    try:
        smtpObj = smtplib.SMTP_SSL('smtp.163.com', 465)
        smtpObj.login(sender, pwd)
        smtpObj.sendmail(sender, receivers, message.as_string())
        print
        "邮件发送成功"
    except smtplib.SMTPException:
        print
        "Error: 无法发送邮件"

def test1(arg1,arg2):
    print("Test1:{},:::{}".format(arg1,arg2))
def test2(arg):
    print("Test2:{}".format(arg))

def ip_proxy():
    url="http://bbs.tianya.cn/post-university-1186376-1.shtml"
    res=requests.get(url,proxies={'http':'http://101.37.118.54:8888'},timeout=50,verify=False)
    soup=BeautifulSoup(res.text,"html.parser")
    title=soup.find("span",class_="s_title").text
    print(title)

ips=[] #ip列表
mutex=0 #标志位

class GetIpThread(threading.Thread):
    def __init__(self, fetchSecond):
        super(GetIpThread, self).__init__();
        self.fetchSecond = fetchSecond;

    def run(self):
        lis=[]
        for i in range(3):
            lis.append(i+1)
        global mutex
        while True:
            apiUrl="https://ip.jiangxianli.com/api/proxy_ips?country=中国&page={}".format(random.randint(1,7))
            # 获取IP列表
            res = requests.get(apiUrl,timeout=30)
            content=json.loads(res.text,encoding='utf-8')['data']['data']
            # 按照\n分割获取到的IP
            mutex=1
            ips.clear()

            for item in content:
                ips.append("{}:{}".format(item['ip'],item['port']))

            mutex=0
            # print("长度：{}，{}".format(len(ips),ips))
            # ips = res.split('\n');
            # # 利用每一个IP
            # for proxyip in ips:
            #
            #     if proxyip.strip() == '':
            #         continue
            #
            #     print(proxyip)
            #     # 开启一个线程
            #     CrawlThread(proxyip).start();
            # 休眠
            time.sleep(self.fetchSecond);


if __name__ == '__main__':


    GetIpThread(20).start()
    get_outer_urls()



    # for i in range(6):
    #     print(i)


    # ip_proxy()

    # url="http://bbs.tianya.cn/post-me-291154-1.shtml"
    # res=requests.get(url,headers=headers,timeout=30)
    # soup = BeautifulSoup(res.text, 'html.parser')
    # content=soup.find("div", class_="atl-con-bd clearfix").text.strip().replace("\n", "-")
    # print(content)

    # data=soup.select("div.atl-info")
    # data={}
    # if(len(data)==0):
    #     print("为空")



    # notice_wechat("fdf","hfhfhf")
    # url = "/list.jsp?item=828&nextid=1552871535000"


    # lis=[]
    # for i in range(10):
    #     lis.append(Thread(target=test1,args=(i,i+1)))
    # for item in lis:
    #     item.start()


    # print(re.search("-.*-", "http://bbs.tianya.cn/list-play-1.shtml").group()[1:-1])
    # print(int(re.search("nextid=.*", url).group()[7:]))
    # print()
    # url = "http://bbs.tianya.cn/post-funinfo-7923383-1.shtml"
    # inner_url = "http://bbs.tianya.cn/list-university-1.shtml"
    # lst = get_inter_urls(inner_url)
    # print(lst)

    # url="http://bbs.tianya.cn/post-828-1562804-1.shtml"
    # data=get_bbsInfo(url)
    # toCSV(data,1)
    # insert_mysql(data)
    # len=",".join(str("%s") for i in range(7))
    # str1=",".join(keys)
    # print(len)
    # con.close()

    conn_thread.close()
    sendMail("抓取完成，请查看附件","tianya.csv")
    notice_wechat("抓取完成了","请查看数据库")