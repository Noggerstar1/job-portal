export const timeAgo = (date: Date): string => {
    const now = new Date();
    const dateToCompare = new Date(date);

    const differenceInSeconds = Math.floor((now.getTime() - dateToCompare.getTime()) / 1000);

    if (differenceInSeconds < 60) {
        return 'Nyní';
    } else if (differenceInSeconds < 3600) {
        return `před ${Math.floor(differenceInSeconds / 60)} min`;
    } else if (differenceInSeconds < 172800) {
        return `před ${Math.floor(differenceInSeconds / 3600)} hod`;
    } else {
        return `před ${Math.floor(differenceInSeconds / (3600*24*2))} dny`;
    }
}

export const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};