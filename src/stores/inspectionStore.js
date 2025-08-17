// src/stores/inspectionStore.js
import { defineStore } from 'pinia'

export const useInspectionStore = defineStore('inspection', {
  state: () => ({
    inspections: [],
    loaded: false
  }),

  getters: {
    openInspections: (s) => s.inspections.filter(i => !i.done),
    doneInspections: (s) => s.inspections.filter(i => i.done),
    getById: (s) => (id) => s.inspections.find(i => String(i.id) === String(id))
  },

  actions: {
    async loadInspections() {
      if (this.loaded && this.inspections.length) return

      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=8')
      const posts = await res.json()

      this.inspections = posts.map((p, idx) => ({
        id: p.id,
        title: p.title,
        body: p.body,
        done: idx % 3 === 0, // beetje variatie in status

        schade: {
          locatie: '',
          nieuweSchade: 'nee',
          soort: '',
          datum: '',
          acuteActie: false,
          omschrijving: ''
        },

        onderhoud: {
          locatie: '',
          soort: '',
          acuteActie: false,
          kostenIndicatie: ''
        },

        installaties: {
          locatie: '',
          soort: '',
          storingen: '',
          testprocedureUrl: '',
          goedgekeurd: null,
          opmerkingen: ''
        },

        modificaties: {
          bestaand: '',
          locatie: '',
          uitgevoerdDoor: '',
          beschrijving: '',
          teOndernemen: '',
          opmerkingen: ''
        },

        fotos: [] // { name, size, type }
      }))

      this.loaded = true
    },

    updateInspection(id, patch) {
      const idx = this.inspections.findIndex(i => String(i.id) === String(id))
      if (idx > -1) {
        this.inspections[idx] = { ...this.inspections[idx], ...patch }
      }
    },

    markDone(id) {
      const ins = this.getById(id)
      if (ins) ins.done = true
    },

    addPhotos(id, files) {
      const target = this.getById(id)
      if (!target) return
      const added = Array.from(files).map(f => ({
        name: f.name,
        size: f.size,
        type: f.type
      }))
      target.fotos.push(...added)
    }
  }
})
