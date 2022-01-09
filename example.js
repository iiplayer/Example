'use strict'

let page1Data = []

async function iPlayerMain(number, index) {
    console.log('=======开始======')
    console.log(`${number}<<<>>>>${index}`)
    if (number == 1) {
        console.log('=======开始1======')
        getPage1()
    }else if (number == 2) {
        console.log('=======开始2======')
        getPage2(index)
    }
}

async function getPage1() {
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

async function getPage2(item) {

    let subData = page1Data[item]
    let param = {name: subData['dz']};
    let options = {
        url : "http://api.hclyz.com:81/mf/jiekou.php",
        body : param,
        timeout : 16
    }
    console.log(options)
    $httpClient.get(options, function(err, res, body){
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
