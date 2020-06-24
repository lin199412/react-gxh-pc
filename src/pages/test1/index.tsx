import React from 'react';

import {
  testAsk1
} from '@/api/basic';

testAsk1().then(res=>{
  console.log('请求1',res);
})

export default () => {
  return (
    <div>
      测试页面11111
    </div>
  );
}
