
//example.js
//iPlayer

'use script'

async function iPlayerMain(number, index, page) {
    iUI.showHUD('wait', '请稍等')//等待样式HUD
    await wait(3)
    
    var times = new Date();
    let data = {
        title: "EXAMPLE", //页面导航栏标题
        canPlay: true, //若为true，则跳转播放器播放
        data: [{
            name: "example",
            plat: "m3u8",
            address: "http://stream1.jlntv.cn/xcpd/sd/live.m3u8",
            time: times.toLocaleDateString()
        }]
    }
    
    console.log(`numben(页面)：${number}; index(选择项)：${index}; page(页码)：${page}`)
    console.log(JSON.stringify(data))
    
    iUI.clearAllHUD()//移除HUD
    iUI.reloadData(data)//刷新页面
    
    iNotify.notify("iPlayer", "🎉获取数据成功", "▶️点击播放", {"open-url": data.data[0].address, "media-url":'https://s3.bmp.ovh/imgs/2022/06/03/b00eeb1ee998105e.png'})
}

async function wait(t) {
    return new Promise(e => setTimeout(e, t))
}

/*
 
 async function getData() {

     let param = {key: 'value'}
     let options = {
         url : "http://example.php",
         body : param, //可选值
         timeout : 16, //可选值，默认16s
         useJSON : false //可选值，默认false。若设置为true，则将body转为json data
     }
     iNetwork.get(options, function(err, res, body){
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
 
 */
