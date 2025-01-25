import { useEffect, useState } from "react";
import { leadApi } from "../../api/leads";
import { ISelectOption } from "../../utils/types";
import { ICategory, ISubCategory, ITechAll, ITechnology } from "../../utils/types/leads";

export const useTechnology = () => {
  const [technologyList, setTechnologyList] = useState<ISelectOption[]>([]);
  const [categoryList, setCategoryList] = useState<ISelectOption[]>([]);

  const handleGetTechnology = async () => {
    try {
      const res = await leadApi.getTechnology();
      if (Array.isArray(res)) {
        const categories = res as ICategory[];
        const subCategories: ISubCategory[] = [];
        const technologies: ITechnology[] = [];
        const all: ITechAll[] = [];

        categories.forEach((category) => {
          all.push(category);
          category?.sub_categories?.forEach((sub) => {
            all.push(sub);
            subCategories.push(sub);
            sub?.technologies?.forEach((tech) => {
              all.push(tech);
              technologies.push(tech);
            });
          });
        });

        setTechnologyList(
          technologies.map((item) => ({
            value: item.key,
            label: item.name + (item.category_key ? "" : "(Category)"),
          }))
        );

        setCategoryList(
          categories.map((item) => ({
            value: item.key,
            label: item.name,
          }))
        );
      } else {
        console.error("Invalid response: Expected an array");
      }
    } catch (error) {
      console.error("Error fetching technology data: ", error);
    }
  };

  useEffect(() => {
    handleGetTechnology();
  }, []);

  return { technologyList, categoryList };
};
