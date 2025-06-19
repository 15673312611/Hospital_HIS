import dayjs from 'dayjs'

// 格式化日期
export const formatDate = (date: string | Date, format = 'YYYY-MM-DD HH:mm:ss') => {
  return dayjs(date).format(format)
}

// 格式化金额
export const formatCurrency = (amount: number, currency = 'CNY') => {
  return new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency,
  }).format(amount)
}

// 格式化数字
export const formatNumber = (num: number, options?: Intl.NumberFormatOptions) => {
  return new Intl.NumberFormat('zh-CN', options).format(num)
}

// 生成随机ID
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9)
}

// 生成订单号
export const generateOrderNo = (): string => {
  const timestamp = Date.now().toString()
  const random = Math.random().toString(36).substr(2, 4).toUpperCase()
  return `ORD-${timestamp.slice(-8)}-${random}`
}

// 防抖函数
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// 节流函数
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// 深拷贝
export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj.getTime()) as unknown as T
  if (obj instanceof Array) return obj.map(item => deepClone(item)) as unknown as T
  if (typeof obj === 'object') {
    const clonedObj = {} as T
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key])
      }
    }
    return clonedObj
  }
  return obj
}

// 数组去重
export const uniqueArray = <T>(arr: T[], key?: keyof T): T[] => {
  if (key) {
    const seen = new Set()
    return arr.filter(item => {
      const value = item[key]
      if (seen.has(value)) {
        return false
      }
      seen.add(value)
      return true
    })
  }
  return [...new Set(arr)]
}

// 计算折扣百分比
export const calculateDiscount = (originalPrice: number, currentPrice: number): number => {
  if (originalPrice <= 0) return 0
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
}

// 验证邮箱
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// 验证手机号
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^1[3-9]\d{9}$/
  return phoneRegex.test(phone)
}

// 获取文件扩展名
export const getFileExtension = (filename: string): string => {
  return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2)
}

// 格式化文件大小
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// 获取状态颜色
export const getStatusColor = (status: string): string => {
  const statusColors: Record<string, string> = {
    active: '#52c41a',
    inactive: '#d9d9d9',
    pending: '#faad14',
    processing: '#1890ff',
    completed: '#52c41a',
    cancelled: '#ff4d4f',
    success: '#52c41a',
    error: '#ff4d4f',
    warning: '#faad14',
    info: '#1890ff',
  }
  return statusColors[status] || '#d9d9d9'
}

// 获取状态文本
export const getStatusText = (status: string): string => {
  const statusTexts: Record<string, string> = {
    active: '正常',
    inactive: '停用',
    pending: '待处理',
    processing: '处理中',
    completed: '已完成',
    cancelled: '已取消',
    success: '成功',
    error: '错误',
    warning: '警告',
    info: '信息',
  }
  return statusTexts[status] || status
}

// 本地存储工具
export const storage = {
  set: (key: string, value: any): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Storage set error:', error)
    }
  },
  get: <T>(key: string, defaultValue?: T): T | null => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue || null
    } catch (error) {
      console.error('Storage get error:', error)
      return defaultValue || null
    }
  },
  remove: (key: string): void => {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error('Storage remove error:', error)
    }
  },
  clear: (): void => {
    try {
      localStorage.clear()
    } catch (error) {
      console.error('Storage clear error:', error)
    }
  },
} 