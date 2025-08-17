// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** 获取空间分类使用情况 POST /api/space/analyze/category */
export async function getSpaceCategoryAnalyzeUsingPost(
  body: API.Pinyin_17,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseList_>('/api/space/analyze/category', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 获取空间排行情况 POST /api/space/analyze/rank */
export async function getSpaceRankAnalyzeUsingPost(
  body: API.SpaceRankAnalyzeRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListSpace_>('/api/space/analyze/rank', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 获取空间大小分析情况 POST /api/space/analyze/size */
export async function getSpaceSizeAnalyzeUsingPost(
  body: API.Pinyin_20,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListSpaceSizeAnalyzeResponse_>('/api/space/analyze/size', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 获取空间标签使用情况 POST /api/space/analyze/tag */
export async function getSpaceTagAnalyzeUsingPost(
  body: API.Pinyin_23,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListSpaceTagAnalyzeResponse_>('/api/space/analyze/tag', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 获取空间使用状态 POST /api/space/analyze/usage */
export async function getSpaceUsageAnalyzeUsingPost(
  body: API.Pinyin_19,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseSpaceUsageAnalyzeResponse_>('/api/space/analyze/usage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** 获取空间用户上传行为情况 POST /api/space/analyze/user */
export async function getSpaceUserAnalyzeUsingPost(
  body: API.Pinyin_24,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListSpaceUserAnalyzeResponse_>('/api/space/analyze/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
