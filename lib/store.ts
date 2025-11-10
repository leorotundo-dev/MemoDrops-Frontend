'use client';
import { create } from 'zustand';

type UIState = {
  sidebarOpen: boolean;
  setSidebarOpen: (v: boolean) => void;
};

export const useUI = create<UIState>((set) => ({
  sidebarOpen: false,
  setSidebarOpen: (v) => set({ sidebarOpen: v })
}));
