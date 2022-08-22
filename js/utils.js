const sumMinutes = (totalMinutes, Minutes) => {
    return totalMinutes += Minutes;
};

const subtractMinutes = (totalMinutes, Minutes) => {
    return totalMinutes -= Minutes;
};

module.exports = { sumMinutes, subtractMinutes };