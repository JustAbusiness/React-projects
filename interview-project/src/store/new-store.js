import { create } from 'zustand'

// eslint-disable-next-line no-unused-vars
export const useNewsStore = create(set => ({
  // Hàm 'set' này sẽ được sử dụng để cập nhật trạng thái của store.
  hits: [],
  isLoading: false,
  errorMessage: [],
  fetch: async () => {
    try {
      set(() => ({ isLoading: true }));

      const response = await fetch(
        'http://hn.algolia.com/api/v1/search_by_date?query=react'
      )
      const data = await response.json();
      set({ hits: data.hits, isLoading: false }) // hàm set() được gọi để cập nhật trạng thái của store. Thuộc tính hits của trạng thái được cập nhật với giá trị data.hits - danh sách các tin tức lấy được từ API.
    } catch (error) {
      set(() => ({ errorMessage: error, isLoading: false }))
    }
  }
}))
