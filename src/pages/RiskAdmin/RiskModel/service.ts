import { request } from 'umi';
import { RiskModelTableListItem } from './data.d';

export async function queryRiskModels(params?: RiskModelTableListItem) {
  params.pageNo = params.current;
  return request('/services/v1/model', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json; charset=utf-8',
      'x-auth-token': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNzUyMTIwODY0NCIsInR5cCI6IjE3NTIxMjA4NjQ0IiwiZGluIjoiIiwiZXhwIjoxNjA2ODQ0MDc1LCJjb2RlIjoiMTc1MjEyMDg2NDQifQ.i7-Lcy10uyX-dXPIvEPGr3pwhfZgOFPJExwCK5-xLi0'
    },
    body:JSON.stringify(params)
  })
}