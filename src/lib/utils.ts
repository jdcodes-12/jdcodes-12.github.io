import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { MouseEvent } from 'react';
import { saveAs } from 'file-saver';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function processDate(dateString: string) {

  // Write closures inside for returning diff 
  // formats??

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr',
    'May', 'Jun', 'Jul', 'Aug',
    'Sept', 'Oct', 'Nov', 'Dec'
  ];
  
  const date = new Date(dateString);

  // Get the last two digits of the year
  // const year = date.getFullYear() % 100;
  const year = date.getFullYear();

  // Months are zero-based, so add 1
  const month = date.getMonth();
  const day = date.getDate();

  return `${months[month]}. ${day}, ${year}`;
}

export function downloadResume(event: MouseEvent) {
  event.preventDefault();
  
  const filename = '/johnathan-dickson-developer-resume.pdf';

  fetch(filename)
    .then((response) => response.blob())
    .then((blob) => saveAs(blob, filename))
    .catch((error) => console.error('Error downloading PDF:', error));
};

export function smoothScrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}