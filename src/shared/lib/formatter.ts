const USAFormatter = new Intl.NumberFormat('en-US')

/**
 * числовой форматер
 * @param currentValue Числовое значение
 * @returns строку в **формате 2000.75 => 2,000.75**
 */
export const numberFormation = (currentValue: number | string): string => {
	return USAFormatter.format(Number(currentValue))
}
