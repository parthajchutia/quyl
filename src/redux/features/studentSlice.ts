import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../lib/supabase";

export interface Student {
  id: string;
  name: string;
  cohort: string;
  courses: string[];
  joined_date: string;
  last_login: string;
  status: boolean;
}

interface StudentState {
  students: Student[];
  loading: boolean;
  error: string | null;
}

const initialState: StudentState = {
  students: [],
  loading: false,
  error: null,
};

export const fetchStudents = createAsyncThunk(
  "Students/fetchStudents",
  async () => {
    const { data, error } = await supabase.from("Students").select("*");
    if (error) throw error;
    return data;
  }
);

export const addStudent = createAsyncThunk(
  "Students/addStudent",
  async (student: Omit<Student, "id">) => {
    try {
      const { data, error } = await supabase
        .from("Students") 
        .insert([student])
        .select();
      if (error) throw error;
      return data[0];
    } catch (error) {
      console.error("Failed to add student:", error);
      throw error; 
    }
  }
);

const studentSlice = createSlice({
  name: "Students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch students";
      })
      .addCase(addStudent.fulfilled, (state, action) => {
        state.students.push(action.payload);
      });
  },
});

export default studentSlice.reducer;
