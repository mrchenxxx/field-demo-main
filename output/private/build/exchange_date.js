"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFutureTimestamp = getFutureTimestamp;
const chinese_days_1 = __importDefault(require("chinese-days"));
function getFutureTimestamp(input) {
    const { calendar_date, calendar_type } = input;
    const now = new Date();
    const currentYear = now.getUTCFullYear();
    // 阳历解析
    if (calendar_type === '阳历') {
        const date = new Date(calendar_date);
        const month = date.getUTCMonth(); // 0-based month
        const day = date.getUTCDate();
        let futureDate = Date.UTC(currentYear, month, day + 1);
        if (futureDate <= now.getTime()) {
            // 如果计算的日期比现在早或者相等，返回下一年的同一时间
            futureDate = Date.UTC(currentYear + 1, month, day + 1);
        }
        return futureDate;
    }
    // 阴历解析 (考虑闰月)
    if (calendar_type === '阴历') {
        // 先获取当年的年份，不用第三方库
        const currentDate = new Date();
        // 当年的年份，2024
        const currentYear = currentDate.getFullYear();
        // 获取calendar_date中的月和日
        const timestamp = calendar_date; // 假设的时间戳
        const date = new Date(timestamp);
        const month = date.getMonth(); // 月份是从 0 开始计数的，所以要加 1
        const day = date.getDate();
        // 将currentYear和month和day 转换成日期，用js方法
        let date2 = new Date(currentYear, month, day);
        // 如果date2的时间在今天之前，返回下一年的同一时间
        if (date2 <= now) {
            date2 = new Date(currentYear + 1, month, day);
        }
        const date3 = chinese_days_1.default.getSolarDateFromLunar(date2);
        if (date3.leapMonthDate === undefined) {
            return new Date(date3.date).getTime();
        }
        else {
            // 如果 leapMonthDate 存在，返回 leapMonthDate 的时间戳
            return new Date(date3.leapMonthDate).getTime();
        }
    }
    throw new Error('Unknown calendar type');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjaGFuZ2VfZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGNoYW5nZV9kYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsZ0RBZ0RDO0FBbERELGdFQUF1QztBQUV2QyxTQUFnQixrQkFBa0IsQ0FBQyxLQUFxRDtJQUNwRixNQUFNLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxHQUFHLEtBQUssQ0FBQztJQUMvQyxNQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3ZCLE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUV6QyxPQUFPO0lBQ1AsSUFBSSxhQUFhLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDekIsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUUsZ0JBQWdCO1FBQ25ELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUU5QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksVUFBVSxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1lBQzlCLDZCQUE2QjtZQUM3QixVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQztRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxjQUFjO0lBQ2QsSUFBSSxhQUFhLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDekIsa0JBQWtCO1FBQ2xCLE1BQU0sV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFL0IsYUFBYTtRQUNiLE1BQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5Qyx1QkFBdUI7UUFDdkIsTUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDLENBQUMsU0FBUztRQUMxQyxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxzQkFBc0I7UUFDckQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNCLHFDQUFxQztRQUNyQyxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLDZCQUE2QjtRQUM3QixJQUFJLEtBQUssSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNmLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBQ0QsTUFBTSxLQUFLLEdBQUcsc0JBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN0RCxJQUFJLEtBQUssQ0FBQyxhQUFhLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDcEMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUMsQ0FBQzthQUFNLENBQUM7WUFDSiw0Q0FBNEM7WUFDNUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkQsQ0FBQztJQUVMLENBQUM7SUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDN0MsQ0FBQyJ9