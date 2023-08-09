/*
* @Author: fw168
* @Date: 2023-08-09 14:22:03
* @Last Modified by: fw168
* @Last Modified time: 2023-08-09 14:22:03
*/
export const tools = {
    // 千分位
    formatPrice: ( price ) => {
        const reg = /(?=\B(\d{3})+$)/g
        return price.replace( reg, ',' )
    },
    // 判断对象中是否存在key
    hasProperty: ( obj, key ) => {
        return key in obj
    },
    // 数组求和
    sum: ( arr ) => {
        function f( i ) {
            return i >= arr.length ? 0 : arr[ i ] + f( i + 1 )
        }

        return f( 0 )
    }
}
