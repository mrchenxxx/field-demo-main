import chineseDays from 'chinese-days';

export function getFutureTimestamp(input: { calendar_date: Date, calendar_type: string }): number {
    const { calendar_date, calendar_type } = input;
    const now = new Date();
    const currentYear = now.getUTCFullYear();

    // 阳历解析
    if (calendar_type === '阳历') {
        const date = new Date(calendar_date);
        const month = date.getUTCMonth();  // 0-based month
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
        const date3 = chineseDays.getSolarDateFromLunar(date2)
        if (date3.leapMonthDate === undefined) {
            return new Date(date3.date).getTime();
        } else {
            // 如果 leapMonthDate 存在，返回 leapMonthDate 的时间戳
            return new Date(date3.leapMonthDate).getTime();
        }

    }

    throw new Error('Unknown calendar type');
}
