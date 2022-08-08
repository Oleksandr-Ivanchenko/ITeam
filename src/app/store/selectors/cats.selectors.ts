import { createFeatureSelector } from "@ngrx/store";
import { Cat } from "../models/cats";

export const getCatsList = createFeatureSelector<Cat[]>('cats')
