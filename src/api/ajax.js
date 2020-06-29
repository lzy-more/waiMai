/*
 * @Author: your name
 * @Date: 2020-06-12 13:53:34
 * @LastEditTime: 2020-06-12 15:03:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-client_blank\src\api\ajax.js
 */ 
import axios from 'axios'
// 通用写法 返回值:promise对象(异步返回的数据是:response.data)
export default function ajax (url = '', data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
      // 执行异步ajax请求

    let promise
    if (type === 'GET') {
      // 准备 url query 参数数据
      let dataStr = ''
      // 数据拼接字符串
      Object.keys(data).forEach((key) => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送 get 请求
      promise = axios.get(url)
    } else {
      // 发送 post 请求
      promise = axios.post(url, data)
    }
    promise
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
