import request from '@/utils/request'

export function testAsk1() {
    return request.get("https://api.opendota.com/api/heroStats", {
    params: {
      id: 1
    }
  })
}