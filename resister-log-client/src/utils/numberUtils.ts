export const handleNumberUpdate = (text: '' | number): number | '' => {
  const value = typeof text !== 'number' ? parseInt(text) : text;
  if (Number.isNaN(value) || typeof value !== 'number' || value < 0) return '';
  return value;
};

export const thousandDotFormat = (num: string | number): string => {
  // Check if the input is null, undefined, or not a number.
  if (num === null || num === undefined || isNaN(Number(num))) {
    return '0';
  }

  // Convert the input to a string if it's not already.
  const base = num.toString();

  // Format the string with thousand separators.
  return base.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};

export const fillZero = (width: number, str: string): string => {
  return str.length >= width ? str : '0'.repeat(width - str.length) + str;
};
