export default function calculateCost(storage) {
  const rate = storage <= 10 ? 4 : storage <= 100 ? 2 : 1;
  return rate * storage * 100;
}
// function calculateCost(storage) {
//   const rate = storage <= 10 ? 4 : storage <= 100 ? 2 : 1;
//   return rate * storage * 100;
// }
