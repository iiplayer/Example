'use strict'

async function iPlayerMain(number) {
    if (number == 1) {
        getPage1()
    }
}

async function getPage1() {
    let param = {name: "phpfanjiashequ"};
    let options = {
        url : "http://api.hclyz.com:81/mf/jiekou.php",
        timeout : 16
    }
    $httpClient.get(options, function(err, res, body){
        console.log(body)
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

            }
            data: body.data
        }

        $UI.reloadData(data)
    })
}