export const article = {
    tytle: "
    `
        <h1>Git: Configuration and SSH Key Setup</h1>
    `
    "
    ,
    body: 
    "
    `
        <ol>
            <li>
                <h2>Configuring Git</h2>
                <ul>
                    <li>Open a command prompt or terminal on your computer.</li>
                    <li>
                        Set your username using the following command, replacing
                        "Your Name" with your actual name:
                        <br />
                        <code>git config --global user.name "Your Name"</code>
                    </li>
                    <li>
                        Set your email address using the following command,
                        replacing "your.email@example.com" with your actual
                        email address:
                        <br />
                        <code
                            >git config --global user.email
                            your.email@example.com</code
                        >
                    </li>
                    <li>
                        These configurations will be associated with your
                        commits in Git.
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
                            >ssh-keygen -t rsa -b 4096 -C
                            "your.email@example.com"</code
                        >
                        <br />
                        Replace "your.email@example.com" with the same email
                        address you used in the previous step.
                    </li>
                    <li>
                        You will be prompted to choose a location to save the
                        SSH key. Press Enter to accept the default location
                        (Users\YourUsername\.ssh\id_rsa). You can also provide a
                        custom location if desired.
                    </li>
                    <li>
                        Next, you will be prompted to enter a passphrase. You
                        can either enter a passphrase for extra security or
                        press Enter to leave it blank (not recommended).
                    </li>
                    <li>
                        The SSH key pair (a private key and a public key) will
                        be generated and saved in the specified location.
                    </li>
                    <li>
                        Run the following command to start the SSH agent:
                        <br />
                        <code>eval $(ssh-agent -s)</code>
                    </li>
                    <li>
                        Add your private key to the SSH agent by running the
                        following command, replacing the path with the location
                        where you saved the key:
                        <br />
                        <code>ssh-add path\to\your\private\key</code>
                        <br />
                        For example, if you accepted the default location, the
                        command would be:
                        <br />
                        <code>ssh-add ~/.ssh/id_rsa</code>
                    </li>
                </ul>
            </li>
            <li>
                <h2>Add SSH Key to Your GitHub Account</h2>
                <ul>
                    <li>
                        Now, copy the contents of the public key to your
                        clipboard using the following command:
                        <br />
                        <code>clip &lt; ~/.ssh/id_rsa.pub</code>
                        - for Windows computer
                        <br /><code>pbcopy < ~/.ssh/id_rsa.pub</code> - for
                        MacOS computer
                        <br />
                        If you saved the key in a custom location, replace
                        <code>~/.ssh/id_rsa.pub</code> with the path to your
                        public key file.
                    </li>
                    <li>
                        Visit the GitHub website (<a
                            href="https://github.com/"
                            target="_blank"
                            >https://github.com/</a
                        >) and sign in to your account.
                    </li>
                    <li>
                        Click on your profile picture in the top-right corner
                        and select "Settings" from the dropdown menu.
                    </li>
                    <li>In the left sidebar, click on "SSH and GPG keys".</li>
                    <li>Click on the "New SSH key" button.</li>
                    <li>
                        Provide a descriptive title for your SSH key in the
                        "Title" field.
                    </li>
                    <li>
                        Paste the copied public key into the "Key" field by
                        pressing Ctrl+V (for Windows) or Cmd+V (for MacOS).
                    </li>
                    <li>
                        Finally, click on the "Add SSH key" button to save the
                        key to your GitHub account.
                    </li>
                </ul>
            </li>
        </ol>
    `
    "
    ,
};
