

//example.js
//iPlayer

'use script'

//UI入口方法：数据展示
//number：页面层级从1开始；
//index：点击的cell索引从0开始；
//page：数据接口页数(从0开始)
async function iPlayerMain(number, index, page) {
    try {
        //App版本号
        console.log("App版本号:", version())
        
        //等待样式HUD
        iUI.showHUD('wait', '加载中...')
        
        await wait(2000) //等待2秒
        
        let times = new Date()
        let data = {
            //页面导航栏标题
            title: "EXAMPLE",
            //当前页面数据是否支持播放
            canPlay: true,
            //是否显示多任务按钮
            mutableDuty: false,
            //列表数据
            data: [{
                name: "example",
                plat: "m3u8",
                address: "http://stream1.jlntv.cn/xcpd/sd/live.m3u8",
                time: times.toLocaleDateString(),
            },
            {
                name: "alert example",
                plat: "alert",
                address: "",
                time: times.toLocaleDateString(),
                //是否跳转至下一页（如果address有效则忽略）
                pushNext: false
            }]
        }
        
        console.log(`numben(页面)：${number}; index(选择项)：${index}; page(页码)：${page}`)
        console.log(JSON.stringify(data))
        
        iUI.clearAllHUD()//移除HUD
        iUI.reloadData(data)//刷新页面
        
        iNotify.notify("iPlayer", "获取数据成功", "▶点击播放", {"open-url": data.data[0].address, "media-url":'https://s3.bmp.ovh/imgs/2022/06/03/b00eeb1ee998105e.png'})
                
    } catch(err) {
        console.log(err)
    }
}

//cell点击事件（版本>=1.5.3）
async function iPlayerDidSelectIndexPath(arg) {
    //iUI.showHUD('info', `点击了第${arg.number}个页面的\n第${arg.index}个cell`)
    if(arg.index == 0) return
    iUI.alert('Title', `message`, ['取消:cancel', '红色:destructive', '输入框1:textField', '输入框2:textField', '普通', '播放'],(index, title, textFileds)=>{
        console.log(index, title, textFileds)
        if (title == '播放') {
            iUI.play('http://stream1.jlntv.cn/xcpd/sd/live.m3u8')
        }
    })
}

async function wait(t) {
    return new Promise(e => setTimeout(e, t))
}

//版本号
function version() {
    try {
        return iUI.appVersion()
    }catch(e){}
    return ''
}

/*
 
 async function getData() {

     let param = {key: 'value'}
     let options = {
         url : "http://example.php",
         body : param, //可选值
         timeout : 16, //可选值，默认16s
         useJSON : false //(版本>=1.5.0已废弃)可选值，默认false。若设置为true，则将body转为json data
     }
     iNetwork.get(options, function(err, res, body){
         //body：版本>=1.5.0是字符串，低版本为object
         console.log(JSON.stringify(body))
     })
 }
 
 async function postData() {

     let param = {key: 'value'}
     let options = {
         url : "http://example.php",
         body : param, //可选值
         timeout : 16, //可选值，默认16s
         useJSON : false //可选值，默认false。若设置为true，则将body转为json data
     }
     iNetwork.post(options, function(err, res, body){
         //body：版本>=1.5.0是字符串，低版本为object
         console.log(JSON.stringify(body))
     })
 }
 //本地推送
 iNotify.notify("Title", "subtitle", "detail", {"open-url": 'https://www.baidu.com', "media-url":'https://s3.bmp.ovh/imgs/2022/06/03/b00eeb1ee998105e.png'})
 
 //显示HUD
 iUI.showHUD('wait', '等待样式')
 iUI.showHUD('succ', '成功样式')
 iUI.showHUD('error', '失败样式')
 iUI.showHUD('info', '显示信息')
 //清除HUD
 iUI.clearAllHUD()
 
 //跳转至播放器（版本>=1.5.3可用）
 iUI.play('rtmp://xxx')
 
 //获取版本号（版本>=1.5.0可用）
 iUI.appVersion()
 
 //数据持久化
 //读取key对应的数据
 iUI.read('key')
 //删除key对应的数据
 iUI.remove('key')
 //写入数据key相同会覆盖
 iUI.write('value', 'key')
 
 */

