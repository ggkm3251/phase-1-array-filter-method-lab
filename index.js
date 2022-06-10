// Code your solution here
function findMatching(name, string) {
    return name.filter(
      (selectedMatching) => selectedMatching.toLowerCase() === string.toLowerCase()
    );
}

function fuzzyMatch(name, string2) {
    return name.filter(
      (selectedMatching) =>
      selectedMatching.toLowerCase().indexOf(string2.toLowerCase()) === 0
    );
}  

function matchName(name, string3) {
    return name.filter((info) => info.name === string3);
}