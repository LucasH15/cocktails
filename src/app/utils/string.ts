export function removeAccents(str: string) {
  return str.normalize('NFD').replace(/\p{Diacritic}/gu, '');
}
