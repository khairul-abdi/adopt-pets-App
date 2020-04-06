<template>
  <div>
    <PetTable
      species="cats"
      title="Cats"
      :pets="cats"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable.vue'

export default {
  components: {
    PetTable
  },
  data() {
    return {}
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>
