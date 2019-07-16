import React from 'react';
import styles from './Fans.less';
import { Icon, Card, Col, Form, List, Row, Select, Tag } from 'antd';
import FansSearch from '../components/fans_search/fans_search';

console.log(styles);
export default () => (
  <>
    <div className={styles.pagehead}>
      <h4 className={styles.h4}>
        用户列表{' '}
        <span>
          当前共筛选出 <b>123</b> 名用户 <Icon type="loading" />
        </span>
      </h4>
      <div className={styles['pagehead-content']}>
        <span>
          当前共筛选出 <b>123</b> 名用户
        </span>
      </div>
    </div>
    <Card bordered={false}>
      <Form layout="inline">
        <div className={styles.fans_row}>高级筛选</div>
        <div className={styles.fans_row}></div>
      </Form>
    </Card>
  </>
);
