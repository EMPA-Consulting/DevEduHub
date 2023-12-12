# VS Code Magic Tricks Course
This README contains my insights from the VS Code Magic Tricks Course. Explore optimized workflows, commands, and features in Visual Studio Code for an enhanced development experience.

## ⚡ Get Started

### CLI:
To install the 'code' command in the terminal (macOS Setup):

1. Type 'shell command' in the Command Palette (Cmd+Shift+P).
2. Select "Shell Command: Install 'code' command in PATH."
3. Restart the terminal.

Useful commands:

- `code .`: Open in the current directory.
- `code /path/to/dir`: Open in the specified directory.
- `code ~/.bash_profile`: Edit the root config file.

### Tweak Settings:

- Atom One Dark theme
- VSCode-icons
- Fira Code font: 
  - To enable ligatures, edit settings.json:

  ```json
  {
    "editor.fontFamily": "Fira Code",
    "editor.fontLigatures": true
  }
  ```

### Command Palette:

- Open Command Palette: Ctrl + Shift + P
- Symbol Search: Type '@'
- Commands Search: Type ">" followed by command or keyword

### File Explorer:

- Open: Ctrl + B
- Close: Ctrl + W
- Save: Ctrl + S
- Collapse All Folders: In File Explorer, click the collapse icon.
- Show Hidden Files:
  - Go to Settings
  - Type "exclude" to modify file patterns

### Keyboard Shortcuts:

- Open keyboard shortcuts page: Click ⚙️ or use Ctrl + K, Ctrl + S
- In Command Palette (Ctrl + Shift + P), type ">Preferences: Open Keyboard Shortcuts"

**[VS Code Cheat Sheet](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)** 

## Intellisense:

- Explore Definitions:
  - Right-click symbol.
  - Choose "Go to Definition" or "Peek Definition"
- Force Intellisense: Ctrl + Space
- Optimize with Tab for autocompletion
- Use arrow keys for selection

## 👀 Editing Tricks

### Param Hints:

Inside a method parenthesis, press `Ctrl+Shift+Space` to get parameter hints.

### Auto-Directory:

Create new directories automatically when adding a new file in File Explorer:

- Include non-existent directories when typing the path (i.e., `path/to/your/file.js`).
- Directories will be created automatically.

### Move Quickly:

- Symbol Search: Open command palette: Ctrl + P. Type '@' to navigate through code swiftly.
- Highlight Code Lines: Select lines rapidly: Ctrl + L. Use Shift + ← ↑ → ↓ for precision.

### Move Lines:

- Fast Cut or Copy (no need to highlight with the mouse):
  - Copy the current line: Ctrl + C
  - Cut the current line: Ctrl + X

### Line Movement:

- Move a line nearby: Alt + ↑ or Alt + ↓
- Copy the line repeatedly: Shift + Alt + ↑ or Shift + Alt + ↓

### Folding:

- Fold All:
  - Open command palette and search for "Fold All" command.
  - Use Ctrl + Shift + ] to unfold specific parts.

### Bracket Colorizer:

- Open VS Code settings: Ctrl + ,
- Enable Bracket Pair Colorization for enhanced bracket highlighting

### Multiple Cursor:

- Use Alt + Click to set multiple cursors simultaneously

### Linked Editing:

- Enable Linked Editing in settings (Ctrl + ,) to automatically match opening and closing tags for simultaneous edits

### Multiline Editing:

- Find a symbol (e.g., a variable)
- Place cursor on it
- Press Ctrl + D for each occurrence you want to edit simultaneously

### Emmet Snippets:

- Emmet is a tool to expedite HTML and CSS coding
- [Emmet cheat sheet](https://docs.emmet.io/cheat-sheet/)
- Useful Emmet Shortcuts:
  - List: `ul>li*3` (Press Tab)
  - Article with Header, H1, and 3 Paragraphs: `article>header>h1+p+p+p` (Press Tab)

### Emmet Wrap Abbreviation:

- **Balance Outward Command:**
  - Place cursor inside HTML.
  - Execute Emmet: Balance Outward command to select the outermost tag.
- **Wrap with Abbreviation Command:**
  - Select HTML block.
  - Execute Emmet: Wrap with Abbreviation command to wrap the selected HTML block with a new parent tag.

### Snippets:

- Custom Snippets:
  - Open command palette.
  - Create a new Global Snippets file in JSON.
  - Insert custom snippets using assigned prefixes.
  - Recommended Extension: "JavaScript (ES6) snippets".

## GitHub Copilot:

- Open GitHub Copilot:
  - Access GitHub Copilot options in VS Code:
  - Open the command palette with Ctrl + Shift + P.
  - Type and select "GitHub Copilot: Open Copilot Dashboard."
- Navigate Suggestions:
  - Accept the current suggestion with the Tab key.
  - Move to the next suggestion by pressing Enter.
  - Explore the interactive Copilot window for a guided coding experience.

## Find References:

- **Search References:**
  - Use global search with Ctrl + Shift + F.
  - Comprehensive but may be less efficient.
- **Peek References:**
  - Right-click on a symbol.
  - Select "Peek References" for a quick overview.
- **Peek Implementations:**
  - Right-click on a method or function.
  - Select "Peek Implementations" to see where it's implemented.
- **Safe Rename:**
  - Renames the symbol and all references to it and ensures consistency across the project.
- **Rename Symbol:**
  - Find the original function or variable.
  - Right-click on the symbol.
  - Select "Rename Symbol."
- **Code Actions:**
  - Use code actions to automatically refactor code.
- **Refactor Tool:**
  - Look for the 💡 in VS Code.
  - Click it or use Ctrl + . to access available actions.

## 🖥️ Integrated Development Environment

### Integrated Terminal:

- Open Terminal: Ctrl + `
- Organize Terminal:
  - Right-click for options to customize name, icon, and color.
  - Change terminal type with the dropdown in the terminal toolbar.
  - Use split functionality for multiple terminal sessions.

### Tasks:

- Use tasks in VS Code for automated terminal jobs.
- **Run a Task:**
  - Find tasks (e.g., NPM scripts) in the file explorer.
  - Click the play button instead of typing commands in the terminal.
- **Create Custom Task:**
  - Open the command palette (Ctrl + Shift + P)
  - Type and select "Tasks: Configure Task."
  - Choose "Create tasks.json file from template."
  - Customize your task configuration in the generated tasks.json file.

### Git:

- **Initialization:**
  - Use `git init` in the command line to start a Git repository.
- **Explore Git Functions:**
  - Open the Source Control panel to access Git functions (Commit, Revert Commit, Create branch, etc).
- **GitHubLens Extension:**
  - Enhance Git insights with GitHubLens for professional or large-scale projects.

### Remote: 

- **GitHub Command Palette:**
  - Open GitHub in the browser.
  - Use the command palette with Ctrl+K.
  - Alternatively, launch VS Code directly from a GitHub repo using “.”.
- **Remote Repos:**
  - Connect local

 VS Code to a remote Git repo.
  - Click the blue icon in the bottom-left corner to open the remote repositories panel.
  - Authorize the account to access and edit repositories remotely.
  - This enables working locally on a GitHub repo without the need to clone.

### Debugger:

- Click red circles between line numbers for breakpoints.
- Use logpoints instead of console logs for dynamic logging during debugging.

### HTTP Client:

- Recommended Extension: Thunder Client

### Docker:

- Recommended extension: Docker
- Click the remote button in the bottom left corner
- Select Reopen in Container to create a Dockerfile and run the container