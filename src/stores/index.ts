import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useIndexStore = defineStore('selected', () => {
  const selected = ref(0)
  function setSelected(tabbarIndex) {
    selected.value = tabbarIndex
  }

  return { selected, setSelected }
})