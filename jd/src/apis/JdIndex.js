// import axios from "axios"

export const IndexInfoUrl = "http://localhost:3000/server/data/indexdata"

export default {
  /**
   * 首页信息
   * @param cb 返回的数据
   */
  indexdata(cb) {
    fetch(IndexInfoUrl).then(res => {
      res.json().then((data) => {
        cb(data)
      })
    })
    // axios.get(ProductsUrl).then(cb)
  },


}
