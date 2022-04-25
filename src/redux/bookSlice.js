import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    filter: ''
  }
}

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    setFilter: (state, action) => {
      state.contacts.filter = action.payload;
    },
    deleteItems: (state, action) => {
      const newItems = state.contacts.items.filter(contact => contact.id !== action.payload);
      state.contacts.items = newItems
    }
  },
})

export const { setItems, setFilter, deleteItems } = bookSlice.actions

export default bookSlice.reducer