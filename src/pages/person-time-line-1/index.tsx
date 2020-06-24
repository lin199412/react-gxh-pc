import React from 'react';
import {Card} from 'antd'
import NormalTimeLine from '@/components/NormalTimeLine';

export default () => {
  return (
    <div>
      <Card title="时间轴档案--">
        <NormalTimeLine/>
      </Card>
      <Card title="衍生图表">
      </Card>
    </div>
  );
}
