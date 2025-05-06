// src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function formatDate(date: Date, format: string = 'dd/MM/yyyy') {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = String(date.getFullYear());

  return format.replace('dd', day).replace('MM', month).replace('yyyy', year);
}

export { cn, formatDate };
