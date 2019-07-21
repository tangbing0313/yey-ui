import React from 'react';
import styles from './Fans.less';
import { Icon, Card, Input, Radio, Button, Form, List, Tag } from 'antd';
import FansSearch from '../components/fans_search/fans_search';
import TagSelect from '../list/search/articles/components/TagSelect';
const { Search } = Input;
const FormItem = Form.Item;
export default () => (
  <>
    <div className={styles.pagehead}>
      <h4 className={styles.h4}>用户列表</h4>
      <div className={styles['pagehead-content']}>
        <span>
          当前共筛选出 <b>123</b> 名用户
        </span>
        <span className={styles.gaojisousuo}>
          <Search
            placeholder="您可以输入粉丝名称/粉丝别名进行搜索"
            onSearch={value => console.log(value)}
            enterButton
            style={{ width: 300 }}
          />
          <Button className={styles.gjss_button}>
            高级搜索 <Icon type="down" />
          </Button>
        </span>
      </div>
    </div>
    <Card bordered={false} className={styles.ggss_box}>
      <Form layout="inline">
        <div className={styles.fans_row}>
          <div className={styles.sslabel}>
            <span>性别</span>
          </div>
          <div className={styles.sscontentcontent}>
            <FormItem>
              <TagSelect
                onChange={a => {
                  console.log(a);
                }}
              >
                <TagSelect.Option value="cat1">男</TagSelect.Option>
                <TagSelect.Option value="cat2">女</TagSelect.Option>
                <TagSelect.Option value="cat3">未知</TagSelect.Option>
              </TagSelect>
            </FormItem>
          </div>
        </div>
      </Form>
    </Card>
  </>
);
