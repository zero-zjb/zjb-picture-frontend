declare namespace API {
  type BaseResponseBoolean_ = {
    code?: number
    data?: boolean
    message?: string
  }

  type BaseResponseLoginUserVO_ = {
    code?: number
    data?: LoginUserVO
    message?: string
  }

  type BaseResponseLong_ = {
    code?: number
    data?: number
    message?: string
  }

  type BaseResponsePageUserVO_ = {
    code?: number
    data?: PageUserVO_
    message?: string
  }

  type BaseResponseUser_ = {
    code?: number
    data?: User_
    message?: string
  }

  type BaseResponseUserVO_ = {
    code?: number
    data?: UserVO
    message?: string
  }

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number
  }

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number
  }

  type LoginUserVO = {
    createTime?: string
    editTime?: string
    id?: number
    updateTime?: string
    userAccount?: string
    userAvatar?: string
    userName?: string
    userProfile?: string
    userRole?: string
  }

  type PageUserVO_ = {
    current?: number
    pages?: number
    records?: UserVO[]
    size?: number
    total?: number
  }

  type Pinyin__ = {
    /** 用户id */
    id?: number
    /** 用户头像 */
    userAvatar?: string
    /** 用户昵称 */
    userName?: string
    /** 简介 */
    userProfile?: string
    /** 用户角色：user/admin */
    userRole?: string
  }

  type Pinyin_2 = {
    /** 用户账号 */
    userAccount?: string
    /** 用户头像 */
    userAvatar?: string
    /** 用户昵称 */
    userName?: string
    /** 用户简介 */
    userProfile?: string
    /** 用户角色: user, admin */
    userRole?: string
  }

  type Pinyin_3 = {
    current?: number
    /** 用户id */
    id?: number
    pageSize?: number
    sortField?: string
    sortOrder?: string
    /** 用户账号 */
    userAccount?: string
    /** 用户昵称 */
    userName?: string
    /** 简介 */
    userProfile?: string
    /** 用户角色：user/admin/ban */
    userRole?: string
  }

  type Pinyin_4 = {
    /** 校验密码 */
    checkPassword?: string
    /** 用户账号 */
    userAccount?: string
    /** 用户密码 */
    userPassword?: string
  }

  type Pinyin_5 = {
    /** 用户账号 */
    userAccount?: string
    /** 用户密码 */
    userPassword?: string
  }

  type Pinyin_6 = {
    /** id */
    id?: number
  }

  type User_ = {
    /** 创建时间 */
    createTime?: string
    /** 编辑时间 */
    editTime?: string
    /** id */
    id?: number
    /** 是否删除 */
    isDelete?: number
    /** 更新时间 */
    updateTime?: string
    /** 账号 */
    userAccount?: string
    /** 用户头像 */
    userAvatar?: string
    /** 用户昵称 */
    userName?: string
    /** 密码 */
    userPassword?: string
    /** 用户简介 */
    userProfile?: string
    /** 用户角色：user/admin */
    userRole?: string
  }

  type UserVO = {
    createTime?: string
    id?: number
    userAccount?: string
    userAvatar?: string
    userName?: string
    userProfile?: string
    userRole?: string
  }
}
