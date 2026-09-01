Desk Calc — Retro Desk Calculator

A basic calculator built with plain HTML, CSS, and JavaScript — styled like a vintage desktop calculator with a recessed LCD-style display and tactile, bevelled buttons.

Features
All core arithmetic operations — addition, subtraction, multiplication, division
Operator chaining — e.g. 5 + 3 × 2 evaluates step by step as you enter it
Percent (%) and backspace keys
Clear (C) to reset the calculator
Real-time display — a running expression line above a live result line
Error handling — divide-by-zero and invalid input show Error
Keyboard support — use number keys, + - * /, Enter/=, Backspace, Escape (clear), and %
Styling enhancements — pressed-button animation, recessed display panel, visible focus outline for accessibility, responsive layout for mobile
Files
File	Description
index.html	The full calculator — HTML structure, CSS styling, and JavaScript logic all in one file
Usage

Just open index.html in any modern browser. No build step, no dependencies, no server required.

bash
# clone the repo
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# open it directly
open index.html      # macOS
start index.html      # Windows
xdg-open index.html   # Linux
Uploading to GitHub
Option A — Create the repo on GitHub.com (no local git needed)
Go to github.com/new and create a new repository (e.g. desk-calculator). Leave it empty — don't initialize with a README.
On the new repo's page, click "uploading an existing file".
Drag in index.html and README.md.
Scroll down, add a commit message like Initial commit, and click Commit changes.
Option B — Push from your computer with git
bash
# 1. Create a new folder and add the files
mkdir desk-calculator
cd desk-calculator
# copy index.html and README.md into this folder

# 2. Initialize git and commit
git init
git add .
git commit -m "Initial commit: retro desk calculator"

# 3. Create the repo on GitHub (via github.com/new), then link it
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
Optional — Host it live with GitHub Pages
In your repo, go to Settings → Pages.
Under Build and deployment → Source, choose Deploy from a branch.
Select the main branch and / (root) folder, then Save.
GitHub will publish it at https://<your-username>.github.io/<your-repo>/ within a minute or two.
License

Free to use and modify.