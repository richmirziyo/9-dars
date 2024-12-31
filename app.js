//darslikda ko'tlishi kerak bo'lgan masallalardn boshlangan! pastdagi misollarni 2, 3 tasini darsda ishlaganmiz 


// 1
function getAverageAge(arr) {
  const totalAge = ((sum, person) => sum + person.age, 0);
  return totalAge / arr.length;
}

// 2

function addIsMarriedProperty(arr) {
  return arr.map((person) => ({
    ...person,
    isMarried: person.age >= 25,
  }));
}


// 3

function getNameMaxMinAge(arr) {
  let maxAge = -Infinity;
  let minAge = Infinity;
  let maxName = "";
  let minName = "";

  for (const person of arr) {
    if (person.age > maxAge) {
      maxAge = person.age;
      maxName = person.name;
    }
    if (person.age < minAge) {
      minAge = person.age;
      minName = person.name;
    }
  }

  return [maxName, minName];
}

// 4 

function groupByValue(obj) {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
        if (!result[value]) {
            result[value] = [];
        }
        result[value].push(Number(key));
    }
    return result;
}
