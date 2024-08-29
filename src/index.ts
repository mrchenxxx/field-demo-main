import { basekit, FieldType, field, FieldComponent, FieldCode } from '@lark-opdev/block-basekit-server-api';
import { getFutureTimestamp } from './exchange_date';
const { t } = field;

// 通过addDomainList添加请求接口的域名
basekit.addDomainList(['api.exchangerate-api.com']);

basekit.addField({
  // 定义捷径的i18n语言资源
  i18n: {
    messages: {
      'zh-CN': {
        'calendar_type': '生日类别',
        'calendar_date': '生日日期',
        'next_calendar_date': '下次生日日期',
        // 备注
        'calendar_remark': '备注',

      },
      'en-US': {
        'calendar_type': 'Birthday Type',
        'calendar_date': 'Birthday Date',
        'next_calendar_date': 'Next Birthday Date',
        // 备注
        'calendar_remark': 'Remark'
      },
      'ja-JP': {
        'calendar_type': '誕生日カテゴリ',
        'calendar_date': '誕生日',
        'next_calendar_date': '次の誕生日',
        // 备注
        'calendar_remark': '備考'
      },

    }
  },
  // 定义捷径的入参
  formItems: [
    {
      key: 'calendar_type',
      label: t('calendar_type'),
      component: FieldComponent.FieldSelect,
      props: {
        supportType: [FieldType.SingleSelect],
      },
      validator: {
        required: true,
      }
    },
    {
      key: 'calendar_date',
      label: t('calendar_date'),
      component: FieldComponent.FieldSelect,
      props: {
        supportType: [FieldType.DateTime],
      },
      validator: {
        required: true,
      }
    },
  ],
  // 定义捷径的返回结果类型
  resultType: {
    type: FieldType.DateTime,// 定义捷径的返回结果类型为日期字段

  },
  // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
  execute: async (formItemParams: { calendar_type: string, calendar_date: Date }, context) => {

    try {

      const timestamp = formItemParams.calendar_date;
      console.log(formItemParams);
      const s = getFutureTimestamp(formItemParams)
      return {
        code: FieldCode.Success,
        data: s,
        message: t('next_calendar_date'),
      };
    } catch (e) {
      console.error(e);
      return {
        code: FieldCode.Error,
      };
    }
  }

});
export default basekit;