
// ================================ Utility Data Start ================================
// Text convert to string
export const convertToSlug = (text) => {
    return text.toLowerCase().replace(/\s+/g, '-');
};

export const slugURL = ({url, slug }) => {
    return `/${url}/${encodeURIComponent(convertToSlug(slug))}`;
}

// ================================ Pluralize Words ================================
import pluralize from 'pluralize';

export function toSingular(word) {
  if (pluralize.isPlural(word)) {
    return pluralize.singular(word);
  }
  return word;
}


// Get The Current Month Name
export const getCurrentMonth = () => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const currentMonth = new Date().getMonth();
    const currentMonthName = monthNames[currentMonth];
    return currentMonthName; 
}
// ================================ Utility Data End ================================