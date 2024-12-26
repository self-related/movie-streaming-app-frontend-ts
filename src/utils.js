export const getDurationString = (minutes) => {
    const hours = Math.floor(minutes / 60);
    if (hours === 0) {
        return `${minutes}m`;
    } else {
        const minutesLeft = minutes % 60;
        return minutesLeft !== 0
        ? `${hours}h ${minutesLeft}m`
        :  `${hours}h`;
    }
};