import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

const dateFormatter = new Intl.DateTimeFormat('es-CR', {
    dateStyle: 'short',
    timeStyle: 'short',
    timeZone: 'CST',
})

export const formatDateFromMs = (ms: number) => dateFormatter.format(ms);

export const cn = (...args: ClassValue[]) => {
    return twMerge(clsx(...args));
}
