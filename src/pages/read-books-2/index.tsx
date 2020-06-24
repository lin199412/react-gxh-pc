import React from 'react';
import {Card} from 'antd'
import ReadBookSquare from '@/components/ReadBookSquare';

export default () => {
  return (
    <div>
      <Card title="看过的书--时间与字数">
        <ReadBookSquare/>
      </Card>
      <Card title="衍生图表">
      </Card>
    </div>
  );
}
