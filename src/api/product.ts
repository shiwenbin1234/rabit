import request from '@/utils/request'

/**
 * 获取商品详情
 * @param {String} id - 商品ID
 */
export const findGoods = (id:string) => {
  return request({
    method: 'get',
    url: '/goods',
    params: {
      id
    }
  })
}

/**
 * 获取商品同类推荐
 * @param {String} id - 商品ID
 * @param {Number} limit - 获取条数
 */
export const findRelGoods = (id:string, limit = 16) => {
  return request({
    method: 'get',
    url: '/goods/relevant',
    params: {
      id,
      limit
    }
  })
}

/**
 * 获取热榜商品
 * @param {Number} id - 商品id
 * @param {Number} type - 1代表24小时热销榜 2代表周热销榜 3代表总热销榜
 * @param {Number} limit - 获取个数
 */
export const findHotGoods = (id:number, type:number, limit = 3) => {
  return request({
    method: 'get',
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  })
}

/**
 * 获取商品的评价统计信息
 * @param {String} id - 商品ID
 */
export const findCommentInfoByGoods = (id:string) => {
  return request({
    url: `https://mock.boxuegu.com/mock/1175/goods/${id}/evaluate`,
    method: 'get'
  })
}

/**
 * 获取商品的评论的分页信息
 * @param {String} id - 商品ID
 */
export const findCommentListByGoods = (id:string, reqParams:any) => {
  return request({
    url: `https://mock.boxuegu.com/mock/1175/goods/${id}/evaluate/page`,
    method: 'get',
    params: reqParams
  })
}
