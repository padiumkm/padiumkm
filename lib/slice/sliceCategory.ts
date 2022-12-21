import { createSlice } from "@reduxjs/toolkit";
import { ICategory, IRespCategory } from "../../components/modal/IModal";

const initialState = {
  categories: [
    {
      name: "",
      subCategory: [
        {
          name: "",
        },
      ],
    },
  ],
};

export const sliceCategory = createSlice({
  name: "CategoryReducer",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      const categoryList: ICategory[] = [];
      action.payload.map((category: IRespCategory) => {
        const hit = categoryList.find(
          (cat) => cat.name === category.category_name
        );

        if (!hit) {
          categoryList.push({
            name: category.category_name,
            subCategory: [
              {
                name: category.subCategory,
              },
            ],
          });
        } else {
          hit.subCategory.push({
            name: category.subCategory,
          });
        }
      });
      state.categories = categoryList;
    },
  },
});

export const { addCategory } = sliceCategory.actions;
export default sliceCategory.reducer;
