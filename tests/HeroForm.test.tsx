import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, test } from "vitest";

import { HeroForm } from "../src/features/home/components/heroForm/HeroForm";

describe("<HeroForm />", () => {
  beforeEach(() => render(<HeroForm />));
  afterEach(cleanup);

  test("Debe mostrar un botón con el texto 'cotiza aquí'", () => {
    const button = screen.getByRole("button");

    expect(button).contain(/cotiza aquí/i);
  });

  test.fails("Debe retornar un error", ()=>{
    expect(true).toBeFalsy();
  })
});
