// 1. User
interface User {
  id: number;
  name: string;
  email?: string;
  isActive: boolean;
}

function createUser(
  id: number,
  name: string,
  email?: string,
  isActive: boolean = true
): User {
  const user: User = {
    id,
    name,
    isActive
  };

  if (email !== undefined) {
    user.email = email;
  }

  return user;
}

console.log("1. Проверка User:\n");

console.log("User 1:", createUser(1, "Yuumi"));
console.log("User 2:", createUser(2, "ZoomJus7", "nikitapriemkin3@gmail.com"));
console.log("User 3:", createUser(3, "Alexander", "Makedonsky", false));

// 2. Book
interface Book {
  title: string;
  author: string;
  year?: number;
  genre: "fiction" | "non-fiction";
}

function createBook(book: Book): Book {
  return book;
}

console.log("2. Проверка Book:\n");

console.log("Book 1:", createBook({ title: "Lord of the Rings", author: "J. R. R. Tolkien", genre: "fiction" }));
console.log("Book 2:", createBook({ title: "1984", author: "George Orwell", year: 1949, genre: "non-fiction" }));

// 3. calculateArea
function calculateArea(shape: "circle", radius: number): number;
function calculateArea(shape: "square", side: number): number;

function calculateArea(shape: "circle" | "square", value: number): number {
  if (shape === "circle") {
    return Math.PI * value * value;
  } else {
    return value * value;
  }
}

console.log("3. Проверка calculateArea:\n");

console.log("Circle (r = 7):", calculateArea("circle", 7));
console.log("Square (side = 7):", calculateArea("square", 7));

// 4. Status
type Status = "active" | "inactive" | "new";

function getStatusColor(status: Status): string {
  switch (status) {
    case "active":
      return "green";
    case "inactive":
      return "red";
    case "new":
      return "blue";
  }
}

console.log("4. Проверка Status:\n");

console.log("active - ", getStatusColor("active"));
console.log("inactive - ", getStatusColor("inactive"));
console.log("new - ", getStatusColor("new"));

// 5. StringFormatter
type StringFormatter = (text: string, uppercase?: boolean) => string;

// Первая буква заглавная
const capitalizeFirstLetter: StringFormatter = (
  text,
  uppercase = false
): string => {
  if (text.length === 0) return text;

  let result = text.charAt(0).toUpperCase() + text.slice(1);

  if (uppercase) {
    result = result.toUpperCase();
  }

  return result;
};

// Ручная обрезка пробелов
const trim: StringFormatter = (
  text,
  uppercase = false
): string => {

  let start = 0;
  let end = text.length - 1;

  while (start <= end && text[start] === " ") {
    start++;
  }

  while (end >= start && text[end] === " ") {
    end--;
  }

  let result = "";

  for (let i = start; i <= end; i++) {
    result += text[i];
  }

  if (uppercase) {
    result = result.toUpperCase();
  }

  return result;
};

console.log("5. Проверка StringFormatter:\n");

console.log("Capitalize:", capitalizeFirstLetter("hello world"));
console.log("Cap + Upper:", capitalizeFirstLetter("hello world", true));
console.log("Trim:", trim("   hello world   "));
console.log("Trim + Upper:", trim("   hello world   ", true));

// 6. getFirstElement
function getFirstElement<T>(arr: T[]): T | undefined {
  if (arr.length === 0) {
    return undefined;
  }

  return arr[0];
}

const numbers = [7, 13, 29];
const strings = ["Hello", "World"];
const emptyArray: number[] = [];

console.log("6. Проверка getFirstElement:\n");

console.log("Numbers:", getFirstElement(numbers));
console.log("Strings:", getFirstElement(strings));
console.log("Empty:", getFirstElement(emptyArray));

// 7. findById
interface HasId {
  id: number;
}

function findById<T extends HasId>(items: T[], id: number): T | undefined {
  for (const item of items) {
    if (item.id === id) {
      return item;
    }
  }

  return undefined;
}

const users = [
  { id: 1, name: "Alexander" },
  { id: 2, name: "Bogdan" },
  { id: 3, name: "Charles" }
];

console.log("7. Проверка findById:\n");

console.log("Find id = 3:", findById(users, 3));
console.log("Find id = 5:", findById(users, 5));