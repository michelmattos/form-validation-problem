"use strict";
const fs = require("fs");
const $ = require("jquery");

test("it passes", () => {
  expect(true).toBe(true);
});

describe("Email must be a valid email address", () => {
  test("input type is email", () => {
    renderHtml("index.html");
    expect($("#email").attr("type")).toBe("email");
  });

  test("passes when a valid email is passed", () => {
    renderHtml("index.html");
    $("#email").val("john.doe@example.com");
    expect($("#email")[0].checkValidity()).toBe(true);
  });

  test("do not pass when a non valid email is passed", () => {
    renderHtml("index.html");
    $("#email").val("john.doe");
    expect($("#email")[0].checkValidity()).toBe(false);
  });
});

function renderHtml(filepath) {
  const html = fs.readFileSync(filepath, { encoding: "utf-8" });
  $("html").html(html);
}
