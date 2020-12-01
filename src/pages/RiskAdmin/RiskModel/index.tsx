import { PlusOutlined } from '@ant-design/icons';
import React, { useState, useRef } from 'react';
import { Button, Divider, message, Input, Drawer } from 'antd';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { RiskModelTableListItem } from './data.d';
import {queryRiskModels} from './service';

const RiskModel: React.FC<{}> = () => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const columns:ProColumns<RiskModelTableListItem>[] = [
    {
      title: '序号',
      dataIndex: 'id',
      // tip: '规则名称是唯一的 key',
      hideInSearch: true,
      formItemProps: {
        rules: [
          {
            required: true,
            message: '规则名称为必填项',
          },
        ],
      }
    },
    {
      title: '模型名称',
      dataIndex: 'label',
    },
    {
      title:'实体名',
      hideInSearch: true,
      dataIndex:'entityName'
    },
    {
      title:'事件ID',
      hideInSearch: true,
      dataIndex:'entryName'
    },
    {
      title:'唯一标识',
      hideInSearch: true,
      dataIndex:'guid'
    },
    {
      title:'事件时间',
      hideInSearch: true,
      dataIndex:'referenceDate'
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          <a>进入模型</a>
          <Divider type="vertical" />
          <a href="">复制</a>
          <Divider type="vertical" />
          <a href="">编辑</a>
          <Divider type="vertical" />
          <a href="">删除</a>
        </>
      ),
    },
  ]
  return (
    <PageContainer>
      <ProTable<RiskModelTableListItem>
        headerTitle="模型列表"
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button type="primary" onClick={() => handleModalVisible(true)}>
            <PlusOutlined /> 新建
          </Button>,
        ]}
        request={(params, sorter, filter) => queryRiskModels({ ...params}).then(res => {
          if (res) {
            return {
              current: res.data.page.pageNum,
              data: [...res.data.page.list],
              pageSize: res.data.page.pageSize,
              success: true,
              total: res.data.page.rowCount
            }
          }
        })}
        columns={columns}
      />

    </PageContainer>
  )
}

export default RiskModel;