# Contributing to AquaBera Documentation

Thank you for your interest in contributing to AquaBera's documentation! We appreciate all contributions that help improve and expand our documentation. AquaBera’s documentation is open-source and hosted on GitHub in the [labs-solo/aberabook repository](https://github.com/labs-solo/aberabook). This guide will walk you through the steps of contributing to AquaBera’s documentation, from setting up your environment to submitting a pull request.

## Before You Start

Before you begin working on a contribution, it's a good idea to discuss your proposed changes with the AquaBera Documentation team. This ensures your contribution aligns with the project’s roadmap and avoids potential duplication of effort. You can reach out to a maintainer directly on GitHub or through the AquaBera Discord channel.

## Contribution Guidelines

### 1. **Learn How to Use Docusaurus**

AquaBera’s documentation is built using Docusaurus, a React and Markdown-based framework. To contribute effectively, you need to understand Docusaurus’s file structure, branch naming conventions, and Markdown syntax.

#### **File Structure and Branch Naming Conventions**

AquaBera’s documentation is organized into three main sections:

- **User Guide:** All content related to using AquaBera from an end-user perspective is located in the `/docusaurus/docs/user-docs/` directory. Branches for this section should be prefixed with `user/`.
  
- **Developer Docs:** This section covers technical details, API references, and guides for developers, found in the `/docusaurus/docs/dev-docs/` directory. Branches should be prefixed with `dev/`.
  
- **Community:** Content related to community guidelines, tokenomics, and other community-driven resources are housed in `/docusaurus/docs/community/`. Branches for community contributions should be prefixed with `community/`.

For contributions that span multiple sections, prefix your branch with `repo/`.

#### **Formatting and Syntax**

Docusaurus uses MDX, which combines Markdown with React components. Ensure you follow AquaBera’s style guide for consistent documentation formatting. If you use an automatic formatter like Prettier, please disable it to avoid unwanted changes that could affect rendering.

**AquaBera Documentation Style Guide:** [Link to Style Guide]

While writing, keep in mind the principles of clear and concise technical writing. AquaBera’s Documentation team assesses contributions based on these principles to maintain the quality and consistency of the documentation.

### 2. **Set Up the Project Locally**

To contribute to AquaBera documentation, you may want to work locally. Here’s how to set up the Docusaurus project on your machine:

1. **Fork the Repository:**
   - Fork the [labs-solo/aberabook repository](https://github.com/labs-solo/aberabook) on GitHub to your account.
   - Clone your fork locally using the following command:
     ```bash
     git clone git@github.com:your-github-username/aberabook.git
     ```
   
2. **Navigate to the Project Directory:**
   - Enter the project directory:
     ```bash
     cd aberabook/docusaurus
     ```
   
3. **Get the Latest Updates:**
   - If you have previously cloned the repository, ensure you have the latest updates:
     ```bash
     git checkout main && git pull
     ```

4. **Install Dependencies and Start the Server:**
   - Run the following commands to install the necessary dependencies and start the local development server:
     ```bash
     yarn && yarn dev
     ```
   
   - Ensure you have Node.js version 16.14+ installed. You can use `nvm` to manage Node versions if needed.

5. **Access the Local Development Server:**
   - Once the server is running, open your browser and navigate to `http://localhost:8080` to view the documentation site.

### 3. **Submit a Pull Request (PR)**

When you’re ready to submit your contribution, follow these steps:

1. **Build the Content Locally:**
   - Before submitting your pull request, stop the local development server by pressing `Ctrl-C` in the terminal.
   - Run the following command to build the documentation locally and check for errors:
     ```bash
     yarn build
     ```
   
   - Ensure there are no build errors before proceeding.

2. **Create a Pull Request:**
   - Push your changes to your fork and create a new pull request (PR) targeting the `main` branch of the [labs-solo/aberabook repository](https://github.com/labs-solo/aberabook).
   - Give your PR a meaningful title and description explaining your changes.
   - If your PR is not ready for review, mark it as a draft.

3. **Label Your Pull Request:**
   - Optionally, add labels to your PR to specify the section (e.g., `source: User Guide`, `source: Dev Docs`) and type of update (`pr: new content`, `pr: updated content`).

4. **Wait for Review:**
   - The AquaBera Documentation team will review your PR, suggest changes if necessary, and merge it once approved.
   - If your contribution needs to be released alongside a product update, use the label `merge pending release` to ensure proper timing.

### Review Process

The AquaBera Documentation team will review your PR for accuracy, quality, and alignment with the documentation scope. The review process may take some time depending on the team’s availability. Once your PR is approved and merged, it will be automatically deployed to the documentation site.

## Important Notes

- **No New Integration Guides:** The AquaBera Documentation team is not accepting new integration guides at this time. These guides will soon be maintained by the AquaBera Community.
- **Contributions in English:** Please submit all contributions, issues, and discussions in English.
- **Stay Updated:** Make sure your fork is up-to-date with the latest changes from the `main` branch to avoid merge conflicts.

## Thank You for Contributing!

Your contributions are invaluable in helping AquaBera grow and improve. We appreciate your time and effort in making AquaBera’s documentation better for everyone! 🚀

---

This guide provides a comprehensive overview of how to contribute to the AquaBera documentation. If you have any questions or need further assistance, feel free to reach out on Discord or open an issue on GitHub. Happy contributing!
