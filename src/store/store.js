import { create } from "zustand";

// const useOpenFoodFilesStore = create((set) => ({
//   openFoodFiles: [],
//   setOpenFoodFiles: (files) => set({ openFoodFiles: files }),
// }));

// export default useOpenFoodFilesStore;

const useJsonDataStore = create((set) => ({
  jsonData: {},
  setJsonData: (data) => set({ jsonData: data }),
}));

export { useJsonDataStore };

export const useJsonValue = (key) => {
  const jsonData = useJsonDataStore((state) => state.jsonData);
  return jsonData[key];
};
