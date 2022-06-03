'use strict'

let page1Data = []

//UI入口方法
//number： 页面编号从1开始；
//index：点击当前页面的cell索引（从0开始）
async function iPlayerMain(number, index) {
    if (number == 1) {
        getPage1()
    }else if (number == 2) {
        getPage2(index)
    }
}

async function getPage1() {
    //请求参数
    let options = {
        url : "http://api.hclyz.com:81/mf/jiekou.php",
        timeout : 16
    }
    //get请求
    iNetwork.get(options, function(err, res, body){
        page1Data = body.data
        let data = {
            title: '平台列表',//导航栏标题
            canPlay: false,//当前数据是有可以播放（若为true则跳转至播放器播放“address”的地址）
            config:{      //格式化数据使iplayer可以识别
                key: {
                    name: 'name',
                    plat: 'name',
                    image:'img',
                    address: 'dz',
                    online: 'sl',
                    time: '',
                    totalTime: ''
                }

            },
            data: body.data
        }
        //获取数据后刷新UI（data["data"]的值须为数组）
        iUI.reloadData(data)
    })
}

async function getPage2(index) {
    
    let subData = page1Data[index]
    let param = {name: subData['dz']};
    //请求参数
    let options = {
        url : "http://api.hclyz.com:81/mf/jiekou.php",
        body : param,
        timeout : 16
    }
    //get请求
    iNetwork.get(options, function(err, res, body){
        let data = {
            title: subData['name'],
            canPlay: true,
            config:{       
                key: {
                    name: 'title',
                    image:'img',
                    address: 'address'
                }

            },
            data: body.data
        }

        iUI.reloadData(data)
    })
}
