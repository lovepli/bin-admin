const creditReportConfig = {
  state: {
    personClassEnum: {}, // 信用主体枚举
    reportDefaultEnum: {}, // 信用报告启用禁用状态枚举
    reportTypeEnum: {} // 信用报告类型枚举
  },
  mutations: {
    SET_PERSON_CLASS_ENUM(state, personClassEnum) {
      state.personClassEnum = personClassEnum
    },
    SET_REPORT_DEFAULT_ENUM (state, reportDefaultEnum) {
      state.reportDefaultEnum = reportDefaultEnum
    },
    SET_REPORT_TYPE_ENUM (state, reportTypeEnum) {
      state.reportTypeEnum = reportTypeEnum
    }
  },
  actions: {}
}

export default creditReportConfig
