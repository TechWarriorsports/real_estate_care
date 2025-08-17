<script setup>
import { useInspectionStore } from '../stores/inspectionStore'
const props = defineProps({ ins: Object })
const store = useInspectionStore()

function addFiles(e) {
  store.addPhotos(props.ins.id, e.target.files)
  e.target.value = null
}
</script>

<template>
  <section class="rec-card p-6 space-y-4">
    <h2 class="text-lg font-semibold rec-text">Foto's</h2>

    <input
      type="file"
      multiple
      @change="addFiles"
      class="block w-full text-sm text-gray-500
             file:mr-4 file:py-2 file:px-4
             file:rounded-md file:border-0
             file:text-sm file:font-semibold
             file:bg-[var(--rec-teal)] file:text-white
             hover:file:brightness-95
             cursor-pointer"
    />

    <ul class="list-disc list-inside rec-text">
      <li v-for="f in ins.fotos" :key="f.name">
        {{ f.name }} ({{ f.size }} bytes)
      </li>
    </ul>
  </section>
</template>
