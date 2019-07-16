import React from 'react';
import classNames from 'classnames';
import styles from './index.less';
import { Button, Card, Col, Form, Icon, List, Row, Select, Tag } from 'antd';

const cls = classNames(styles.standardFormRow, {
  [styles.standardFormRowBlock]: "block",
  [styles.standardFormRowLast]: "last",
  [styles.standardFormRowGrid]: "grid",
});


export default () => (
  <>
  <Card bordered={false}>
    <Form layout="inline">
      <div className={cls}>
        dsffdsfd
      </div>
      <div className={cls}>
        dsffdsfd
      </div>
    </Form>
  </Card>
  </>
);
