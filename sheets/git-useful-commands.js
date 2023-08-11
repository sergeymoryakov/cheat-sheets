export const article = {
    tytle: `
        <h1>Git: Useful Commands</h1>
    `,
    body: `
        <ul>
            <li>
            <h2>To display your Git configurations (name and email):</h2>
            <pre><code>git config --global --list</code></pre>
            <p>This command will list all the global configurations set in Git.</p>
            </li>
            <li>
            <h2>To display your Git username:</h2>
            <pre><code>git config user.name</code></pre>
            <p>Running this command will show your configured username.</p>
            </li>
            <li>
            <h2>To display your Git email:</h2>
            <pre><code>git config user.email</code></pre>
            <p>This command will display the email address you've configured.</p>
            </li>
            <li>
            <h2>To display your SSH key fingerprint:</h2>
            <pre><code>ssh-keygen -lf ~/.ssh/id_rsa.pub</code></pre>
            <p>This command will show the fingerprint of your SSH key. It can be useful for verifying the correct key is associated with your GitHub account.</p>
            </li>
            <li>
            <h2>To check the status of your Git repository:</h2>
            <pre><code>git status</code></pre>
            <p>Running this command within a Git repository will display information about modified, added, and deleted files, as well as the current branch.</p>
            </li>
            <li>
            <h2>To display the commit history:</h2>
            <pre><code>git log</code></pre>
            <p>This command will show a list of commits in the repository, including the commit message, author, date, and commit hash.</p>
            </li>
            <li>
            <h2>To display the remote repositories (such as GitHub) configured for your repository:</h2>
            <pre><code>git remote -v</code></pre>
            <p>Running this command will list the remote repositories and their associated URLs.</p>
            </li>
        </ul>
        <p>These commands should give you an overview of your Git configuration and repository status. Additionally, here are a few more commonly used Git commands:</p>
        <ul>
            <li><code>git add</code>: Stage changes for commit.</li>
            <li><code>git commit</code>: Create a new commit with the staged changes.</li>
            <li><code>git push</code>: Push commits to a remote repository.</li>
            <li><code>git pull</code>: Fetch and merge changes from a remote repository.</li>
            <li><code>git branch</code>: List, create, or delete branches.</li>
            <li><code>git checkout</code>: Switch branches or restore files from a commit.</li>
            <li><code>git merge</code>: Merge changes from one branch into another.</li>
            <li><code>git clone</code>: Create a local copy of a remote repository.</li>
        </ul>
    `,
};
