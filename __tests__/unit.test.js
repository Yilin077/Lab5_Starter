// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('valid phone number with dashes', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test('valid phone number with parentheses', () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});

test('invalid phone number missing digits', () => {
  expect(isPhoneNumber("123-456")).toBe(false);
});

test('invalid phone number with wrong format', () => {
  expect(isPhoneNumber("(123)-4567890")).toBe(false);
});


test('valid email with .com domain', () => {
  expect(isEmail("user@example.com")).toBe(true);
});

test('valid email with .net domain', () => {
  expect(isEmail("hello123@domain.net")).toBe(true);
});

test('invalid email missing @', () => {
  expect(isEmail("notanemail.com")).toBe(false);
});

test('invalid email with short domain', () => {
  expect(isEmail("bad@email.c")).toBe(false);
});


test('valid strong password with letters and digits', () => {
  expect(isStrongPassword("Abcd123")).toBe(true);
});

test('valid strong password with underscore', () => {
  expect(isStrongPassword("x_99")).toBe(true);
});

test('invalid password starting with number', () => {
  expect(isStrongPassword("1abcde")).toBe(false);
});

test('invalid password too short', () => {
  expect(isStrongPassword("ab")).toBe(false);
});


test('valid date single digit month/day', () => {
  expect(isDate("1/1/2020")).toBe(true);
});

test('valid date double digit month/day', () => {
  expect(isDate("12/31/1999")).toBe(true);
});

test('invalid date with wrong order', () => {
  expect(isDate("2020/1/1")).toBe(false);
});

test('invalid date missing slashes', () => {
  expect(isDate("3202023")).toBe(false);
});

test('valid 3-digit hex color with #', () => {
  expect(isHexColor("#fff")).toBe(true);
});

test('valid 6-digit hex color without #', () => {
  expect(isHexColor("a1b2c3")).toBe(true);
});

test('invalid hex color too short', () => {
  expect(isHexColor("#ff")).toBe(false);
});

test('invalid hex color with bad characters', () => {
  expect(isHexColor("ghijkl")).toBe(false);
});
