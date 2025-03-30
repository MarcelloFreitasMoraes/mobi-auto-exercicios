export const maskify = (string: string) => {
    const cleanString = string.replace(/[^A-Za-z0-9]/g, '');
    if (cleanString.length <= 4) return cleanString;
    return '#'.repeat(cleanString.length - 4) + cleanString.slice(-4);
  }
  