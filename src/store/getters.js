export default {
  animalsCount: state => state.cats.length + state.dogs.length,
  getAllCats: state => state.cats.length,
  getAllDogs: state => state.dogs.length
}