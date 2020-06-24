import React from 'react';
import {Card} from 'antd'
import WriterTimeRange from '@/components/WriterTimeRange';

export default () => {
  return (
    <div>
      <Card title="创作--时间范围">
        <WriterTimeRange/>
      </Card>
      <Card title="衍生图表">
      </Card>
    </div>
  );
}
