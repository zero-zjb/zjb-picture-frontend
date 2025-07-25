declare namespace API {
  type addSpaceUsingPOSTParams = {
    /** 空间级别：0-普通版 1-专业版 2-旗舰版 */
    spaceLevel?: number
    /** 空间名称 */
    spaceName?: string
  }

  type BaseResponseBoolean_ = {
    code?: number
    data?: boolean
    message?: string
  }

  type BaseResponseInt_ = {
    code?: number
    data?: number
    message?: string
  }

  type BaseResponseListSpaceLevel_ = {
    code?: number
    data?: SpaceLevel[]
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

  type BaseResponsePagePicture_ = {
    code?: number
    data?: PagePicture_
    message?: string
  }

  type BaseResponsePagePictureVO_ = {
    code?: number
    data?: PagePictureVO_
    message?: string
  }

  type BaseResponsePageSpace_ = {
    code?: number
    data?: PageSpace_
    message?: string
  }

  type BaseResponsePageSpaceVO_ = {
    code?: number
    data?: PageSpaceVO_
    message?: string
  }

  type BaseResponsePageUserVO_ = {
    code?: number
    data?: PageUserVO_
    message?: string
  }

  type BaseResponsePicture_ = {
    code?: number
    data?: Picture_
    message?: string
  }

  type BaseResponsePictureTagCategory_ = {
    code?: number
    data?: PictureTagCategory
    message?: string
  }

  type BaseResponsePictureVO_ = {
    code?: number
    data?: PictureVO
    message?: string
  }

  type BaseResponseSpaceVO_ = {
    code?: number
    data?: SpaceVO
    message?: string
  }

  type BaseResponseString_ = {
    code?: number
    data?: string
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

  type getPictureByIdUsingGETParams = {
    /** id */
    id?: number
  }

  type getPictureVOByIdUsingGETParams = {
    /** id */
    id?: number
  }

  type getSpaceVOByIdUsingGETParams = {
    /** id */
    id?: number
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

  type PagePicture_ = {
    current?: number
    pages?: number
    records?: Picture_[]
    size?: number
    total?: number
  }

  type PagePictureVO_ = {
    current?: number
    pages?: number
    records?: PictureVO[]
    size?: number
    total?: number
  }

  type PageSpace_ = {
    current?: number
    pages?: number
    records?: Space_[]
    size?: number
    total?: number
  }

  type PageSpaceVO_ = {
    current?: number
    pages?: number
    records?: SpaceVO[]
    size?: number
    total?: number
  }

  type PageUserVO_ = {
    current?: number
    pages?: number
    records?: UserVO[]
    size?: number
    total?: number
  }

  type Picture_ = {
    /** 分类 */
    category?: string
    /** 创建时间 */
    createTime?: string
    /** 编辑时间 */
    editTime?: string
    /** id */
    id?: number
    /** 简介 */
    introduction?: string
    /** 是否删除 */
    isDelete?: number
    /** 图片名称 */
    name?: string
    /** 图片格式 */
    picFormat?: string
    /** 图片高度 */
    picHeight?: number
    /** 图片宽高比例 */
    picScale?: number
    /** 图片体积 */
    picSize?: number
    /** 图片宽度 */
    picWidth?: number
    /** 审核信息 */
    reviewMessage?: string
    /** 状态：0-待审核; 1-通过; 2-拒绝 */
    reviewStatus?: number
    /** 审核时间 */
    reviewTime?: string
    /** 审核人 id */
    reviewerId?: number
    /** 空间 id */
    spaceId?: number
    /** 标签（JSON 数组） */
    tags?: string
    /** 缩略图 url */
    thumbnailUrl?: string
    /** 更新时间 */
    updateTime?: string
    /** 图片 url */
    url?: string
    /** 创建用户 id */
    userId?: number
  }

  type PictureTagCategory = {
    categoryList?: string[]
    tagList?: string[]
  }

  type PictureVO = {
    category?: string
    createTime?: string
    editTime?: string
    id?: number
    introduction?: string
    name?: string
    picFormat?: string
    picHeight?: number
    picScale?: number
    picSize?: number
    picWidth?: number
    spaceId?: number
    tags?: string[]
    thumbnailUrl?: string
    updateTime?: string
    url?: string
    user?: UserVO
    userId?: number
  }

  type Pinyin__ = {
    /** id */
    id?: number
    /** 空间图片的最大数量 */
    maxCount?: number
    /** 空间图片的最大总大小 */
    maxSize?: number
    /** 空间级别：0-普通版 1-专业版 2-旗舰版 */
    spaceLevel?: number
    /** 空间名称 */
    spaceName?: string
  }

  type Pinyin_10 = {
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

  type Pinyin_11 = {
    /** 校验密码 */
    checkPassword?: string
    /** 用户账号 */
    userAccount?: string
    /** 用户密码 */
    userPassword?: string
  }

  type Pinyin_12 = {
    /** 用户账号 */
    userAccount?: string
    /** 用户密码 */
    userPassword?: string
  }

  type Pinyin_13 = {
    current?: number
    /** id */
    id?: number
    pageSize?: number
    sortField?: string
    sortOrder?: string
    /** 空间级别：0-普通版 1-专业版 2-旗舰版 */
    spaceLevel?: number
    /** 空间名称 */
    spaceName?: string
    /** 用户 id */
    userId?: number
  }

  type Pinyin_14 = {
    /** 空间 id */
    id?: number
    /** 空间名称 */
    spaceName?: string
  }

  type Pinyin_15 = {
    /** id */
    id?: number
  }

  type Pinyin_2 = {
    /** 图片上传地址 */
    fileUrl?: string
    /** 图片id */
    id?: number
    /** 图片名称 */
    picName?: string
    spaceId?: number
  }

  type Pinyin_3 = {
    /** 图片id */
    id?: number
    /** 审核信息 */
    reviewMessage?: string
    /** 状态：0-待审核; 1-通过; 2-拒绝 */
    reviewStatus?: number
  }

  type Pinyin_4 = {
    /** 图片分类 */
    category?: string
    /** 图片抓取数量 */
    count?: number
    /** 名称前缀 */
    namePrefix?: string
    /** 图片搜索词 */
    searchText?: string
    /** 图片标签 */
    tags?: string[]
  }

  type Pinyin_5 = {
    /** 图片分类 */
    category?: string
    /** 图片id */
    id?: number
    /** 图片简介 */
    introduction?: string
    /** 图片名称 */
    name?: string
    /** 图片标签 */
    tags?: string[]
  }

  type Pinyin_6 = {
    /** 图片分类 */
    category?: string
    current?: number
    /** 图片id */
    id?: number
    /** 图片简介 */
    introduction?: string
    /** 图片名称 */
    name?: string
    /** 是否只查询 spaceId 为 null 的数据 */
    nullSpaceId?: boolean
    pageSize?: number
    /** 图片格式 */
    picFormat?: string
    /** 图片高度 */
    picHeight?: number
    /** 图片比例 */
    picScale?: number
    /** 文件体积 */
    picSize?: number
    /** 图片宽度 */
    picWidth?: number
    /** 审核信息 */
    reviewMessage?: string
    /** 状态：0-待审核; 1-通过; 2-拒绝 */
    reviewStatus?: number
    /** 审核时间 */
    reviewTime?: string
    /** 审核人 id */
    reviewerId?: number
    /** 搜索词 */
    searchText?: string
    sortField?: string
    sortOrder?: string
    /** 空间id */
    spaceId?: number
    /** 图片标签 */
    tags?: string[]
    /** 用户id */
    userId?: number
  }

  type Pinyin_7 = {
    /** 图片分类 */
    category?: string
    /** 图片id */
    id?: number
    /** 图片简介 */
    introduction?: string
    /** 图片名称 */
    name?: string
    /** 图片标签 */
    tags?: string[]
  }

  type Pinyin_8 = {
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

  type Pinyin_9 = {
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

  type Space_ = {
    /** 创建时间 */
    createTime?: string
    /** 编辑时间 */
    editTime?: string
    /** id */
    id?: number
    /** 是否删除 */
    isDelete?: number
    /** 空间图片的最大数量 */
    maxCount?: number
    /** 空间图片的最大总大小 */
    maxSize?: number
    /** 空间级别：0-普通版 1-专业版 2-旗舰版 */
    spaceLevel?: number
    /** 空间名称 */
    spaceName?: string
    /** 当前空间下的图片数量 */
    totalCount?: number
    /** 当前空间下图片的总大小 */
    totalSize?: number
    /** 更新时间 */
    updateTime?: string
    /** 创建用户 id */
    userId?: number
  }

  type SpaceLevel = {
    maxCount?: number
    maxSize?: number
    text?: string
    value?: number
  }

  type SpaceVO = {
    createTime?: string
    editTime?: string
    id?: number
    maxCount?: number
    maxSize?: number
    spaceLevel?: number
    spaceName?: string
    totalCount?: number
    totalSize?: number
    updateTime?: string
    user?: UserVO
    userId?: number
  }

  type testDownloadFileUsingPOSTParams = {
    /** filepath */
    filepath?: string
  }

  type uploadPictureUsingPOSTParams = {
    /** 图片上传地址 */
    fileUrl?: string
    /** 图片id */
    id?: number
    /** 图片名称 */
    picName?: string
    spaceId?: number
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
