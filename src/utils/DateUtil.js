export default function getCurrentDateTime() {
    const now = new Date();
  
    // Get the date components
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so add 1 and pad with '0' if needed
    const day = String(now.getDate()).padStart(2, '0');
  
    // Get the time components
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const milliseconds = String(now.getMilliseconds()).padStart(3, '0');
  
    // Combine the components into the desired format
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
  
    return formattedDateTime;
  }