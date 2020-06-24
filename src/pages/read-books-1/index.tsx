import React from 'react';
import {Card} from 'antd'
import ReadBookCircle from '@/components/ReadBookCircle';

export default () => {
  return (
    <div>
      <Card title="看过的书--评分和字数">
        <ReadBookCircle/>
      </Card>
      <Card title="衍生图表">
      </Card>
    </div>
  );
}
