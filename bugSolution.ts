function printNumber(num: number): void {
  console.log(num);
}

function handleError(error: any): void {
  console.error('An error occurred:', error);
}

function processData(data: string | null | undefined): void {
  if (data === null || data === undefined) {
    handleError('Data is null or undefined');
    return;
  }

  const number = parseInt(data, 10);
  if (isNaN(number)) {
    handleError('Invalid number format');
    return;
  }

  printNumber(number);
}

processData(null); // This will print 'Data is null or undefined'
processData('123'); // This will print 123
processData('abc'); // This will print 'Invalid number format'
processData(undefined); //This will print 'Data is null or undefined' 