'use strict'

let page1Data = []

async function iPlayerMain(number, index) {
    console.log('=======开始======')
    if (number == 1) {
        getPage1()
    }else if (number == 2) {
        getPage2(index)
    }
}

async function getPage1() {
    let param = {name: "phpfanjiashequ"};
    let options = {
        url : "http://api.hclyz.com:81/mf/jiekou.php",
        timeout : 16
    }
    $httpClient.get(options, function(err, res, body){
        page1Data = body.data
        let data = {
            title: '平台列表',
            canPlay: false,
            config:{       
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

        $UI.reloadData(data)
    })
}

async function getPage2(index) {

    let subData = page1Data[index]
    let param = {name: subData['dz']};
    let options = {
        url : "http://api.hclyz.com:81/mf/jiekou.php",
        body : param,
        timeout : 16
    }
    $httpClient.get(options, function(err, res, body){
        page1Data = body.data
        let data = {
            title: subData['dz'],
            canPlay: true,
            config:{       
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

        $UI.reloadData(data)
    })
}
