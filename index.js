function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(emp = '*') {
  return function (adj = 'special') {
    console.log(`You are ${emp}${adj}${emp}!`);
    return `You are ${emp}${adj}${emp}!`
  }
}

wrapAdjective('!!')('a dedicated programmer');