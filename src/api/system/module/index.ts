import request from '@/config/axios'

// 业务模块 VO
export interface ModuleVO {
  id: number // 主键
  code: string // 模块code
  name: string // 名称
  status: number // 状态
  remark: string // 备注
  deletedTime: Date // 删除时间
}

// 业务模块 API
export const ModuleApi = {
  // 查询业务模块分页
  getModulePage: async (params: any) => {
    return await request.get({ url: `/system/module/page`, params })
  },

  // 查询业务模块详情
  getModule: async (id: number) => {
    return await request.get({ url: `/system/module/get?id=` + id })
  },

  // 新增业务模块
  createModule: async (data: ModuleVO) => {
    return await request.post({ url: `/system/module/create`, data })
  },

  // 修改业务模块
  updateModule: async (data: ModuleVO) => {
    return await request.put({ url: `/system/module/update`, data })
  },

  // 删除业务模块
  deleteModule: async (id: number) => {
    return await request.delete({ url: `/system/module/delete?id=` + id })
  },

  // 导出业务模块 Excel
  exportModule: async (params) => {
    return await request.download({ url: `/system/module/export-excel`, params })
  },
}