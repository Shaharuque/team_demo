import { create } from 'zustand'
import { v4 as uuid } from 'uuid'
import { persist } from 'zustand/middleware'


export type Task = {
    id?: string
    title: string
    description?: string
  }

  export type StepperData = {
    selectedServices: string[]
    selectedPackage: string
    selectedKeywords: string[]
    totalHours: string
    keyWords: string[]
  }

  export type State = {
    tasks: Task[]
    stepData: StepperData
  }
  
  export type Actions = {
    addTask: (payload:Task) => void
  }

  export const useTaskStore = create <State & Actions>()(set => ({
    tasks: [],
    addTask: (payload) => set(state => ({
        tasks: [
          ...state.tasks,
          { id: uuid(), title:payload.title, description:payload.description, status: 'TODO' }
        ]
      })),
      


  }))
