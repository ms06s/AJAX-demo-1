console.log('here')

getJSON.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/5.json')
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status < 300
    ) {
      console.log(typeof request.response)
      const bool = JSON.parse(request.response)
      console.log(typeof bool)
      console.log(bool)
    }
  }
  request.send()
}

getJSON.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/5.json')
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status < 300
    ) {
      console.log(typeof request.response)
      const bool = JSON.parse(request.response)
      console.log(typeof bool)
      console.log(bool)
    }
  }
  request.send()
}
getXML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/4.xml')
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status < 300
    ) {
      const dom = request.responseXML
      const text = dom.getElementsByTagName('warning')[0].textContent
      console.log(text.trim())
      const div = document.createElement('div')
      div.innerHTML = text
      document.body.appendChild(div)
    }
  }
  request.send()
}
getHTML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/3.html')
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status < 300
    ) {
      const html = document.createElement('div')
      html.innerHTML = request.response
      console.log(request.response)
      document.body.appendChild(html)
    }
  }
  request.send()
}
getJS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/2.js')
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status < 300
    ) {
      const js2 = document.createElement('script')
      js2.innerHTML = request.response
      console.log(request.response)
      document.body.appendChild(js2)
    }
  }
  request.send()
}
getCSS.onclick = () => {
  const request = new XMLHttpRequest()
  // console.log(request.readyState)
  request.open('GET', '/style.css')
  // console.log(request.readyState)
  request.onreadystatechange = () => {
    // console.log(request.readyState)
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status < 300
    ) {
      const style = document.createElement('style')
      style.innerHTML = request.response
      document.head.appendChild(style)
    }
  }

  // request.onload = () => {
  //   console.log('request.response')
  //   console.log(request.response)

  //   const style = document.createElement('style')
  //   style.innerHTML = request.response
  //   document.head.appendChild(style)
  // }
  // request.onerror = () => {
  //   console.log('失败了')
  // }
  request.send()
  // console.log(request.readyState)
}
