"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const block_basekit_server_api_1 = require("@lark-opdev/block-basekit-server-api");
const exchange_date_1 = require("./exchange_date");
const { t } = block_basekit_server_api_1.field;
// 通过addDomainList添加请求接口的域名
block_basekit_server_api_1.basekit.addDomainList(['api.exchangerate-api.com']);
block_basekit_server_api_1.basekit.addField({
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
            component: block_basekit_server_api_1.FieldComponent.FieldSelect,
            props: {
                supportType: [block_basekit_server_api_1.FieldType.SingleSelect],
            },
            validator: {
                required: true,
            }
        },
        {
            key: 'calendar_date',
            label: t('calendar_date'),
            component: block_basekit_server_api_1.FieldComponent.FieldSelect,
            props: {
                supportType: [block_basekit_server_api_1.FieldType.DateTime],
            },
            validator: {
                required: true,
            }
        },
    ],
    // 定义捷径的返回结果类型
    resultType: {
        type: block_basekit_server_api_1.FieldType.DateTime, // 定义捷径的返回结果类型为日期字段
    },
    // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
    execute: async (formItemParams, context) => {
        try {
            const timestamp = formItemParams.calendar_date;
            console.log(formItemParams);
            const s = (0, exchange_date_1.getFutureTimestamp)(formItemParams);
            return {
                code: block_basekit_server_api_1.FieldCode.Success,
                data: s,
                message: t('next_calendar_date'),
            };
        }
        catch (e) {
            console.error(e);
            return {
                code: block_basekit_server_api_1.FieldCode.Error,
            };
        }
    }
});
exports.default = block_basekit_server_api_1.basekit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRkFBNEc7QUFDNUcsbURBQXFEO0FBQ3JELE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxnQ0FBSyxDQUFDO0FBRXBCLDJCQUEyQjtBQUMzQixrQ0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztBQUVwRCxrQ0FBTyxDQUFDLFFBQVEsQ0FBQztJQUNmLGdCQUFnQjtJQUNoQixJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsZUFBZSxFQUFFLE1BQU07Z0JBQ3ZCLGVBQWUsRUFBRSxNQUFNO2dCQUN2QixvQkFBb0IsRUFBRSxRQUFRO2dCQUM5QixLQUFLO2dCQUNMLGlCQUFpQixFQUFFLElBQUk7YUFFeEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsZUFBZSxFQUFFLGVBQWU7Z0JBQ2hDLGVBQWUsRUFBRSxlQUFlO2dCQUNoQyxvQkFBb0IsRUFBRSxvQkFBb0I7Z0JBQzFDLEtBQUs7Z0JBQ0wsaUJBQWlCLEVBQUUsUUFBUTthQUM1QjtZQUNELE9BQU8sRUFBRTtnQkFDUCxlQUFlLEVBQUUsU0FBUztnQkFDMUIsZUFBZSxFQUFFLEtBQUs7Z0JBQ3RCLG9CQUFvQixFQUFFLE9BQU87Z0JBQzdCLEtBQUs7Z0JBQ0wsaUJBQWlCLEVBQUUsSUFBSTthQUN4QjtTQUVGO0tBQ0Y7SUFDRCxVQUFVO0lBQ1YsU0FBUyxFQUFFO1FBQ1Q7WUFDRSxHQUFHLEVBQUUsZUFBZTtZQUNwQixLQUFLLEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQztZQUN6QixTQUFTLEVBQUUseUNBQWMsQ0FBQyxXQUFXO1lBQ3JDLEtBQUssRUFBRTtnQkFDTCxXQUFXLEVBQUUsQ0FBQyxvQ0FBUyxDQUFDLFlBQVksQ0FBQzthQUN0QztZQUNELFNBQVMsRUFBRTtnQkFDVCxRQUFRLEVBQUUsSUFBSTthQUNmO1NBQ0Y7UUFDRDtZQUNFLEdBQUcsRUFBRSxlQUFlO1lBQ3BCLEtBQUssRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDO1lBQ3pCLFNBQVMsRUFBRSx5Q0FBYyxDQUFDLFdBQVc7WUFDckMsS0FBSyxFQUFFO2dCQUNMLFdBQVcsRUFBRSxDQUFDLG9DQUFTLENBQUMsUUFBUSxDQUFDO2FBQ2xDO1lBQ0QsU0FBUyxFQUFFO2dCQUNULFFBQVEsRUFBRSxJQUFJO2FBQ2Y7U0FDRjtLQUNGO0lBQ0QsY0FBYztJQUNkLFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRSxvQ0FBUyxDQUFDLFFBQVEsRUFBQyxtQkFBbUI7S0FFN0M7SUFDRCwyREFBMkQ7SUFDM0QsT0FBTyxFQUFFLEtBQUssRUFBRSxjQUE4RCxFQUFFLE9BQU8sRUFBRSxFQUFFO1FBRXpGLElBQUksQ0FBQztZQUVILE1BQU0sU0FBUyxHQUFHLGNBQWMsQ0FBQyxhQUFhLENBQUM7WUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM1QixNQUFNLENBQUMsR0FBRyxJQUFBLGtDQUFrQixFQUFDLGNBQWMsQ0FBQyxDQUFBO1lBQzVDLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLG9DQUFTLENBQUMsT0FBTztnQkFDdkIsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsT0FBTyxFQUFFLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQzthQUNqQyxDQUFDO1FBQ0osQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLG9DQUFTLENBQUMsS0FBSzthQUN0QixDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7Q0FFRixDQUFDLENBQUM7QUFDSCxrQkFBZSxrQ0FBTyxDQUFDIn0=