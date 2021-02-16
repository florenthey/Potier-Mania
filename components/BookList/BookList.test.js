import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import BookList from "./BookList";
import { render } from "@testing-library/react";

describe("Render the", () => {
  const clientQuery = new QueryClient();
  const filteredBook = [
    {
      isbn: "cef179f2-7cbc-41d6-94ca-ecd23d9f7fd6",
      title: "Henri Potier et le Prince de sang-mêlé",
      price: 30,
      cover:
        "https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp5.jpg?alt=media",
      synopsis: [
        "Henri rentre en sixième année à l'école de sorcellerie Poudlard. Il entre alors en possession d'un livre de potion portant le mot « propriété du Prince de sang-mêlé » et commence à en savoir plus sur le sombre passé de Voldemort qui était encore connu sous le nom de Tom Jedusor.",
      ],
    },
    {
      isbn: "bbcee412-be64-4a0c-bf1e-315977acd924",
      title: "Henri Potier et les Reliques de la Mort",
      price: 35,
      cover:
        "https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp6.jpg?alt=media",
      synopsis: [
        "Cette année, Henri a 17 ans et ne retourne pas à l'école de Poudlard après la mort de Dumbledore. Avec Ron et Hermione il se consacre à la dernière mission confiée par Dumbledore. Le Seigneur des Ténèbres règne en maître et traque les fidèles amis qui sont réduit à la clandestinité. D'épreuves en révélations, le courage, les choix et les sacrifices de Henri seront déterminants dans la lutte contre les forces du Mal.",
      ],
    },
  ];

  // Check les changements du composant depuis la dernière execution du test
  it('should render correctly in "debug" mode', () => {
    const component = render(
      <QueryClientProvider client={clientQuery}>
        <BookList filteredBook={filteredBook} />
      </QueryClientProvider>
    );

    expect(component).toMatchSnapshot();
  });

  it("Render empty list of books", () => {
    const screen = render(
      <QueryClientProvider client={clientQuery}>
        <BookList filteredBook={[]} />
      </QueryClientProvider>
    );

    // Ici je recupere mon ul
    const listBook = screen.getByTestId("list-volume");

    // Ici je test la longueur de li
    expect(listBook.children.length).toBe(0);
  });
  it("Render the list of 2 books", () => {
    const screen = render(
      <QueryClientProvider client={clientQuery}>
        <BookList filteredBook={filteredBook} />
      </QueryClientProvider>
    );

    // Ici je recupere mon ul
    const listBook = screen.getByTestId("list-volume");

    // Ici je test la longueur de li
    expect(listBook.children.length).toBe(2);
  });
});
