<script setup>
import { toRef } from 'vue'
import { useInspectionStore } from '../stores/inspectionStore'

const props = defineProps({ ins: { type: Object, required: true } })
const ins = props.ins
const store = useInspectionStore()
const schade = toRef(ins, 'schade')
</script>

<template>
  <section class="rec-card p-6 space-y-4">
    <h2 class="text-lg font-semibold rec-text">Schade opnemen</h2>

    <label class="block text-sm font-medium rec-text">
      Locatie
      <input v-model="schade.locatie"
             class="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--rec-teal)]" />
    </label>

    <label class="block text-sm font-medium rec-text">
      Nieuwe schade?
      <select v-model="schade.nieuweSchade"
              class="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--rec-teal)]">
        <option value="ja">Ja</option>
        <option value="nee">Nee</option>
      </select>
    </label>

    <label class="block text-sm font-medium rec-text">
      Soort schade
      <input v-model="schade.soort"
             class="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--rec-teal)]" />
    </label>

    <label class="block text-sm font-medium rec-text">
      Datum
      <input type="date" v-model="schade.datum"
             class="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--rec-teal)]" />
    </label>

    <label class="inline-flex gap-2 items-center text-sm rec-text">
      <input type="checkbox" v-model="schade.acuteActie"
             class="rounded border focus:ring-[var(--rec-teal)]" />
      Acute actie vereist
    </label>

    <label class="block text-sm font-medium rec-text">
      Omschrijving
      <textarea v-model="schade.omschrijving"
                class="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--rec-teal)]"></textarea>
    </label>

    <button class="rec-btn px-4 py-2 rounded shadow"
            @click="store.updateInspection(ins.id, { schade: schade })">
      Opslaan
    </button>
  </section>
</template>

