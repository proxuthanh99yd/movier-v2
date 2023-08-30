export const dateFormat = (date) => {
    if (!date) return "";
    const newDate =
        date.getFullYear() +
        "-" +
        (date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1) +
        "-" +
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
    return newDate;
};