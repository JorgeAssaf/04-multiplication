# Node-TS-Multiplication-CLI

This project is a command-line interface (CLI) application built with Node.js and TypeScript. It implements a multiplication table generator.

## Features

- Generates a multiplication table based on user input.
- Saves the generated table to a file using Node's file system module.
- Follows the principles of clean architecture for modular and maintainable code.

## Project Structure

The project follows a clean architecture approach, which separates the application into layers:

- **Presentation Layer**: Handles user input and output.
- **Domain Layer**: Defines the core entities, value objects, and business rules.
- **Use Cases Layer**: Defines the use cases of the application.

## Usage

To use the application, follow these steps:

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Run the application using `npm start`.
4. Follow the prompts to generate a multiplication table.
5. The generated table will be saved to a file in the specified location.

## Dependencies

The project uses the following dependencies:

- `yargs`: For command-line argument parsing.
- `fs`: For file system operations.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.
