# Lab 5
Yilin Zhang
1. No, the “message” feature involves multiple components: UI interaction (typing), possibly form validation, backend communication (sending), database updates, and more. Unit tests are best for isolated functions. But sending a message is a workflow or interaction between components — it’s better tested with integration tests or end-to-end (E2E) tests.
2. Yes, this is a clear, isolated rule that can be checked with a pure function or component logic. For example, if there is a function like isMessageValid(msg) or a UI component that disables further input after 80 characters, that is perfect for unit test.

https://yilin077.github.io/Lab5_Starter/expose.html
https://yilin077.github.io/Lab5_Starter/explore.html
