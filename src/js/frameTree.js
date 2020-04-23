async function loadTree(dataBase) {
    await axios.post(PORTURL + frame_Index_Url + '/queryFrameTree', {
            dataBase
        })
        .then(res => {
            let {
                data: {
                    data
                }
            } = res
            top.frameTree = deep(data)
            // top.frameTreeLoadTime = new Date()
            localStorage.setItem('frameTree', JSON.stringify(data)) //开发环境
        }).catch(err => {
            top.frameTree = []
            console.log('框架树获取错误');
        })
}
async function getTree(dataBase = '') {
    let frameTree = JSON.parse(localStorage.getItem('frameTree'))

    if (!frameTree && !top.frameTree) {
        await loadTree(dataBase)
    }
    return top.frameTree || frameTree

    // if (!top.frameTree) {
    //     await loadTree(dataBase)
    // }
    // return top.frameTree
}

function deep(arr) {
    return arr.map(item => {
        item.name = `${item.name}(${item.treeId})`
        if (item.children && item.children.length)
            item.children = deep(item.children)
        return item
    })
}
setTimeout(loadTree, 1000 * 60 * 60) // 一小时刷新一次数据
top.loadTree = loadTree
top.getTree = getTree