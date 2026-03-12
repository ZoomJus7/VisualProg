import { describe, it, expect } from "vitest";
import {
  createUser,
  createBook,
  calculateArea,
  getStatusColor,
  capitalizeFirstLetter,
  trim,
  getFirstElement,
  findById
} from "../src/tasks.js";

describe("Tests for ../src/tasks.ts", () => {
    // createUser:  
    it("createUser: Создание пользователя по умолчанию с isActive", () => {
      const user = createUser(1, "Test 1");
      expect(user.isActive).toBe(true);
    });

    it("createUser: Создание пользователя с isActive = false", () => {
      const user = createUser(2, "Test 2", undefined, false);
      expect(user.isActive).toBe(false);
    });

    it("createUser: Создание пользователя с email", () => {
      const user = createUser(3, "Test 3", "test@gmail.com");
      expect(user.email).toBe("test@gmail.com");
    });


    // createBook:
    it("createBook: Создание книги без year", () => {
      const book = createBook({
        title: "Lord of the Rings",
        author: "J. R. R. Tolkin",
        genre: "fiction"
      });
      expect(book.year).toBeUndefined();
    });

    it("createBook: Создание книги с year", () => {
      const book = createBook({
        title: "The Indifferent Stars Above",
        author: "Daniel James Brown ",
        year: 2009,
        genre: "non-fiction"
      });
      expect(book.year).toBe(2009);
    });


    // calculateArea:
    it("calculateArea: Вычисление площади квадрата", () => {
      const result = calculateArea("square", 4);
      expect(result).toBe(16);
    });

    it("calculateArea: Вычисление площади круга", () => {
      const result = calculateArea("circle", 2);
      expect(result).toBeCloseTo(Math.PI * 4);
    });


    // getStatusColor:
    it("getStatusColor: Возвращение green для active", () => {
      const result = getStatusColor("active");
      expect(result).toBe("green");
    });

    it("getStatusColor: Возвращение red для active", () => {
      const result = getStatusColor("inactive");
      expect(result).toBe("red");
    });

    it("getStatusColor: Возвращение new для new", () => {
      const result = getStatusColor("new");
      expect(result).toBe("blue");
    });


    // StringFormatter
    it("capitalizeFirstLetter: Первая буква заглавная", () => {
      const result = capitalizeFirstLetter("test");
      expect(result).toBe("Test");
    });

    it("capitalizeFirstLetter: Вся строка заглавная", () => {
      const result = capitalizeFirstLetter("test", true);
      expect(result).toBe("TEST");
    });

    it("capitalizeFirstLetter: Возрат пустой строки", () => {
      const result = capitalizeFirstLetter("");
      expect(result).toBe("");
    });


    it("trim: Убирание пробелов по краям без заглавия строки", () => {
      const result = trim("     trim     ");
      expect(result).toBe("trim");
    });

    it("trim: Убирание пробелов и создание полностью заглавной строки", () => {
      const result = trim("     trim     ", true);
      expect(result).toBe("TRIM");
    });

    it("trim: Если пробелов нет - строка остаётся прежней", () => {
      const result = trim("trim");
      expect(result).toBe("trim");
    });


    // getFirstElement
    it("getFirstElement: Возврат первого элемента массива", () => {
      const result = getFirstElement([1984, 2077, 4587]);
      expect(result).toBe(1984);
    });

    it("getFirstElement: Возврат underfined", () => {
      const result = getFirstElement([]);
      expect(result).toBeUndefined();
    });


    it("findById: Поиск объекта по id", () => {
      const arr = [
        {id: 1, name: "Yuumi"},
        {id: 2, name: "Cat"}
      ];

      const result = findById(arr, 2);
      expect(result?.name).toBe("Cat");
    });

    it("findById: Возврат underfined если id отсутствует", () => {
      const arr = [
        {id: 1},
        {id: 2}
      ];

      const result = findById(arr, 3);

      expect(result).toBeUndefined();
    });
});