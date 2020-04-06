<template>
  <div>
    <h1 class="title">Adopt a new best friend.</h1>
    <p>All Pets: {{ animalsCount }}</p>
    <p>Cats: {{ getAllCats }}</p>
    <p>Dogs: {{ getAllDogs }}</p>

    <button @click="togglePetForm" class="btn btn-primary">Add New Pet</button>
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="8" offset="2">
          <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
            <b-form-group id="input-group-1" label="Pet`s Name:" label-for="input-2">
              <b-form-input
                id="input-1"
                v-model="formData.name"
                required
                placeholder="Enter name"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Species:" label-for="input-3">
              <b-form-select
                id="input-2"
                v-model="formData.species"
                :options="[{ text: 'Choose...', value: null },'cats', 'dogs']"
                selected
              >
              </b-form-select>
            </b-form-group>

            <b-form-group id="input-group-3" label="Pet`s Age:" label-for="input-2">
              <b-form-input
                id="input-3"
                type="number"
                v-model="formData.age"
                required
                placeholder="Enter age"
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  data(){
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'animalsCount',
      'getAllCats',
      'getAllDogs',
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit() {
      const { species, age, name } = this.formData
      const payload = {
        species,
        pet: {
          name, 
          age
        }
      }
      this.addPet(payload)

      // reset form after submit
      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  }
};
</script>

<style scoped>
  .btn {
    margin-bottom: 20px;
  }
</style>