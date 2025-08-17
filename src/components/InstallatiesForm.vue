<script setup>
import { useInspectionStore } from '../stores/inspectionStore'
const props = defineProps({ ins: Object })
const store = useInspectionStore()

function save() {
  store.updateInspection(props.ins.id, { installaties: props.ins.installaties })
}
</script>

<template>
  <section class="space-y-3">
    <h2 class="font-semibold rec-text">Technische installaties</h2>

    <label class="block">
      <span>Locatie</span>
      <input
        v-model="ins.installaties.locatie"
        class="w-full border border-rec-teal rounded px-2 py-1"
      />
    </label>

    <label class="block">
      <span>Soort installatie</span>
      <input
        v-model="ins.installaties.soort"
        class="w-full border border-rec-teal rounded px-2 py-1"
      />
    </label>

    <label class="block">
      <span>Gemelde storingen</span>
      <textarea
        v-model="ins.installaties.storingen"
        class="w-full border border-rec-teal rounded px-2 py-1"
      ></textarea>
    </label>

    <label class="block">
      <span>Testprocedure URL</span>
      <input
        v-model="ins.installaties.testprocedureUrl"
        class="w-full border border-rec-teal rounded px-2 py-1"
      />
    </label>

    <div class="flex gap-4">
      <label class="flex items-center gap-1">
        <input
          type="radio"
          :value="true"
          v-model="ins.installaties.goedgekeurd"
          class="border-rec-teal"
        />
        Goedgekeurd
      </label>
      <label class="flex items-center gap-1">
        <input
          type="radio"
          :value="false"
          v-model="ins.installaties.goedgekeurd"
          class="border-rec-teal"
        />
        Afgekeurd
      </label>
    </div>

    <label class="block">
      <span>Opmerkingen</span>
      <textarea
        v-model="ins.installaties.opmerkingen"
        class="w-full border border-rec-teal rounded px-2 py-1"
      ></textarea>
    </label>

    <button
      class="rec-btn px-4 py-2 rounded"
      @click="save"
    >
      Opslaan
    </button>
  </section>
</template>
