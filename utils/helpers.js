module.exports = {
  dateFormat: (date) => {
    const dateObj = date; // Convert the input string to a Date object

    const day = String(dateObj.getUTCDate()).padStart(2, '0'); // Get the day and pad it with leading zeros if needed
    const month = String(dateObj.getUTCMonth() + 1).padStart(2, '0'); // Get the month (adding 1 as months are zero-based) and pad it
    const year = dateObj.getUTCFullYear(); // Get the year
    // Create the formatted date string
    return `${day}-${month}-${year}`;
  },
  isEqual: (commentOwnerId, userLoggedInId, postOwnerId, commentId, options) => {
    if (commentOwnerId === userLoggedInId || postOwnerId === userLoggedInId) {
      return options.fn({id: commentId});
    }
    return options.inverse(this);
  },
  genderLowerCase: (gender) => {
    const genders = {
      'FEMALE': 'Female',
      'MALE': 'Male'
    };

    return genders[gender] || '';
  },
  birthdateToAge: (date) => {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust the age if the birth date hasn't occurred this year yet.
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  },
  groupMealsByDay: (meals, options) => {
    let days = {};

    // Assume each day has a fixed number of meals, e.g., 5
    const mealsPerDay = 5;

    meals.forEach((meal, index) => {
      let dayIndex = Math.floor(index / mealsPerDay);
      if (!days[dayIndex]) {
        days[dayIndex] = [];
      }
      days[dayIndex].push(meal);
    });

    return days;
  },
  combinedKey: (parentIndex, currentIndex, options) => {
    return options.fn({key: `${parentIndex}-${currentIndex}`});
  },
  add: (a, b) => {
    return parseInt(a, 10) + parseInt(b, 10);
  },
}