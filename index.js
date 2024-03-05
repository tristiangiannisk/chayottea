// Helper function to generate a random string of a specified length
function generateRandomString(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset[randomIndex];
    }
    return result;
  }
  
  // Example of usage:
  const randomStringLength = 8;
  const randomString = generateRandomString(randomStringLength);
  console.log(`Random string: ${randomString}`);
  