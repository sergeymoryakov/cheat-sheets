export const articles = [
    {
        tytle: `
            <h1>Git: Configuration and SSH Key Setup</h1>
            `,
        body: `
            <ol>
                <li>
                    <h2>Configuring Git</h2>
                    <ul>
                        <li>Open a command prompt or terminal on your computer.</li>
                        <li>
                            Set your username using the following command, replacing "Your
                            Name" with your actual name:
                            <br />
                            <code>git config --global user.name "Your Name"</code>
                        </li>
                        <li>
                            Set your email address using the following command, replacing
                            "your.email@example.com" with your actual email address:
                            <br />
                            <code
                                >git config --global user.email your.email@example.com</code
                            >
                        </li>
                        <li>
                            These configurations will be associated with your commits in
                            Git.
                        </li>
                    </ul>
                </li>
                <li>
                    <h2>Setting up an SSH key</h2>
                    <ul>
                        <li>Open a command prompt or terminal on your computer.</li>
                        <li>
                            Run the following command to generate a new SSH key:
                            <br />
                            <code
                                >ssh-keygen -t rsa -b 4096 -C "your.email@example.com"</code
                            >
                            <br />
                            Replace "your.email@example.com" with the same email address you
                            used in the previous step.
                        </li>
                        <li>
                            You will be prompted to choose a location to save the SSH key.
                            Press Enter to accept the default location
                            (Users\YourUsername\.ssh\id_rsa). You can also provide a custom
                            location if desired.
                        </li>
                        <li>
                            Next, you will be prompted to enter a passphrase. You can either
                            enter a passphrase for extra security or press Enter to leave it
                            blank (not recommended).
                        </li>
                        <li>
                            The SSH key pair (a private key and a public key) will be
                            generated and saved in the specified location.
                        </li>
                        <li>
                            Run the following command to start the SSH agent:
                            <br />
                            <code>eval $(ssh-agent -s)</code>
                        </li>
                        <li>
                            Add your private key to the SSH agent by running the following
                            command, replacing the path with the location where you saved
                            the key:
                            <br />
                            <code>ssh-add path\to\your\private\key</code>
                            <br />
                            For example, if you accepted the default location, the command
                            would be:
                            <br />
                            <code>ssh-add ~/.ssh/id_rsa</code>
                        </li>
                    </ul>
                </li>
                <li>
                    <h2>Add SSH Key to Your GitHub Account</h2>
                    <ul>
                        <li>
                            Now, copy the contents of the public key to your clipboard using
                            the following command:
                            <br />
                            <code>clip &lt; ~/.ssh/id_rsa.pub</code>
                            - for Windows computer
                            <br /><code>pbcopy < ~/.ssh/id_rsa.pub</code> - for MacOS
                            computer
                            <br />
                            If you saved the key in a custom location, replace
                            <code>~/.ssh/id_rsa.pub</code> with the path to your public key
                            file.
                        </li>
                        <li>
                            Visit the GitHub website (<a
                                href="https://github.com/"
                                target="_blank"
                                >https://github.com/</a
                            >) and sign in to your account.
                        </li>
                        <li>
                            Click on your profile picture in the top-right corner and select
                            "Settings" from the dropdown menu.
                        </li>
                        <li>In the left sidebar, click on "SSH and GPG keys".</li>
                        <li>Click on the "New SSH key" button.</li>
                        <li>
                            Provide a descriptive title for your SSH key in the "Title"
                            field.
                        </li>
                        <li>
                            Paste the copied public key into the "Key" field by pressing
                            Ctrl+V (for Windows) or Cmd+V (for MacOS).
                        </li>
                        <li>
                            Finally, click on the "Add SSH key" button to save the key to
                            your GitHub account.
                        </li>
                    </ul>
                </li>
            </ol>
`,
    },
    {
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
                    <p>
                        This command will show the fingerprint of your SSH key. It can be
                        useful for verifying the correct key is associated with your GitHub
                        account.
                    </p>
                </li>
                <li>
                    <h2>To check the status of your Git repository:</h2>
                    <pre><code>git status</code></pre>
                    <p>
                        Running this command within a Git repository will display
                        information about modified, added, and deleted files, as well as the
                        current branch.
                    </p>
                </li>
                <li>
                    <h2>To display the commit history:</h2>
                    <pre><code>git log</code></pre>
                    <p>
                        This command will show a list of commits in the repository,
                        including the commit message, author, date, and commit hash.
                    </p>
                </li>
                <li>
                    <h2>
                        To display the remote repositories (such as GitHub) configured for
                        your repository:
                    </h2>
                    <pre><code>git remote -v</code></pre>
                    <p>
                        Running this command will list the remote repositories and their
                        associated URLs.
                    </p>
                </li>
            </ul>
            <p>
                These commands should give you an overview of your Git configuration and
                repository status. Additionally, here are a few more commonly used Git
                commands:
            </p>
            <ul>
                <li><code>git add</code>: Stage changes for commit.</li>
                <li>
                    <code>git commit</code>: Create a new commit with the staged changes.
                </li>
                <li><code>git push</code>: Push commits to a remote repository.</li>
                <li>
                    <code>git pull</code>: Fetch and merge changes from a remote repository.
                </li>
                <li><code>git branch</code>: List, create, or delete branches.</li>
                <li>
                    <code>git checkout</code>: Switch branches or restore files from a
                    commit.
                </li>
                <li><code>git merge</code>: Merge changes from one branch into another.</li>
                <li><code>git clone</code>: Create a local copy of a remote repository.</li>
            </ul>
            `,
    },
    {
        tytle: `
            <h2>JavaScript: Generate Unique ID</h2>
            `,
        body: `
            <p>
                There are several approaches you can take to generate unique IDs for your
                app elements. Here's a breakdown:
            </p>
            <p>
                <br />
                <strong>Firestore's Built-in IDs:</strong> Firestore itself can generate
                unique IDs when you create a document without specifying an ID. These IDs
                are longer than 10 characters but are guaranteed to be unique within a
                collection.
            </p>
            <code>
                let newDocRef = db.collection('customers').doc(); <br />
                let uniqueID = newDocRef.id; // This gives you a unique ID generated by
                Firestore
            </code>
            <p>
                <br />
                <strong>Shortid Library:</strong> Shortid is a popular library that creates
                amazingly short non-sequential URL-friendly unique IDs. Perfect for URL
                slugs, MongoDB, and Redis keys, among others.
            </p>
            <p>Installation:</p>
            <code> npm install shortid</code>
            <p>Usage:</p>
            <code>
                const shortid = require('shortid'); <br />
                console.log(shortid.generate()); // Produces a short unique ID
            </code>
            <p>
                <br />
                <strong>Nano ID:</strong> Nano ID is another library that is a
                size-efficient URL-friendly unique string ID generator.
            </p>
            <p>Installation:</p>
            <code> npm install nanoid </code>
            <p>Usage:</p>
            <code>
                const { nanoid } = require('nanoid'); <br />
                const id = nanoid(10); // Produces a 10-character unique ID
            </code>
            <p>
                <br />
                <strong>UUID:</strong> UUID library assists to generate long unique IDs in a
                format of "a449e3ec-a602-4020-abeb-91f680a0128d", that might work for as a
                strong password for majority of applications.
            </p>
            <p>Installation:</p>
            <code> npm install uuid </code>
            <p>Usage:</p>
            <code>
                import { v4 as uuidv4 } from "uuid";<br />
                uuidv4();
            </code>
            <p>
                <br />
                <strong>Custom Function:</strong> If you want to roll out your own function,
                here's a simple one:
            </p>
            <code>
                function generateUID(length) { <br />
                return [...Array(length)].map(() => (~~(Math.random() *
                36)).toString(36)).join(''); <br />
                } console.log(generateUID(10)); // Produces a 10-character unique ID
            </code>
            <p>
                This function generates an ID of a given length using numbers and lowercase
                letters.
            </p>
            `,
    },
];
