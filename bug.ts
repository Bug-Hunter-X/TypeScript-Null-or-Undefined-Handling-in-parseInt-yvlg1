function printNumber(num: number): void {
  console.log(num);
}

function handleError(error: any): void {
  console.error('An error occurred:', error);
}

function processData(data: string | null): void {
  if (data === null) {
    handleError('Data is null');
    return;
  }

  const number = parseInt(data, 10);
  if (isNaN(number)) {
    handleError('Invalid number format');
    return;
  }

  printNumber(number);
}

processData(null); // This will print 'Data is null'
processData('123'); // This will print 123
processData('abc'); // This will print 'Invalid number format'