export default function shuffleArray(arr) {
  let mut = [...arr];
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let index = Math.floor(Math.random() * mut.length);
    newArr.push(mut[index]);
    mut = arr.filter((e) => !newArr.includes(e));
  }
  return newArr;
}
