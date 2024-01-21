export function formatDate(inputDate: Date) {
    let tempDate = inputDate || new Date()

    const date = new Date(tempDate)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    const formattedDay = String(day).padStart(2, "0")
    const formattedMonth = String(month).padStart(2, "0")

    return `${formattedDay}/${formattedMonth}/${year}`
}

export function addSpaceAfterComma(str: string) {
    return str.replace(/,(?=\S)/g, ", ")
}