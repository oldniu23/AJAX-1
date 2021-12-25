let n = 1

getPAGE.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
        const array = JSON.parse(request.response)
        array.forEach(item => {
            const li = document.createElement('li')
            li.textContent = item.id
            xxx.appendChild(li)
        });
        n += 1
        }
    }
    request.send()
}

getJSON.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET',"/5.json")
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response)
            const object = JSON.parse(request.response)
            //JSON.parse 可以把符合json语法的字符串变成对应的对象或其他东西
            // console.log(object)
            myName.textContent = object.name
        }
    }
    request.send()
}

getXML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange = () =>{
        if(request.readyState === 4 && request.status === 200){
            // console.log(request.responseXML)
            // 自带的responseXML  生成的是个对象  DOM可以操纵
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            // 获取helloworld
            console.log(text.trim())
            //输出不带空格的text
        }
    }
    request.send()
}

getHTML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/3.html')   //readyState = 1
    request.onreadystatechange = ()=>{
        console.log(request.readyState)
        if(request.readyState === 4){
            // console.log('下载完成')
            if(request.status >= 200 && request.status < 300){
                //2开头的状态码都是成功的
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
            }else{
                alert('加载 HTML 失败')
            }
        }
    }
    request.send()  //readyState = 2
}

getJS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onload = ()=>{
        console.log(request.response)
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = ()=>{
        console.log('失败了')
    }
    request.send()
}
getCSS.onclick = ()=>{
    const request = new XMLHttpRequest()
    //构造
    request.open('GET','/style.css')
    //get是方法  style.css是url    open
    request.onload = ()=>{
        console.log('成功了')
        console.log('request.response')
        console.log(request.response)
        //拿到请求内容   接下来把请求内容生效
        const style = document.createElement('style')
        // 创建一个style标签
        style.innerHTML = request.response
        // 填写style内容
        document.head.appendChild(style)
        // 在html头部添加
    }
    request.onerror = ()=>{
        console.log('失败了')
    }
    //监听
    request.send()
    // 发送请求
}


