export const articles = [
    {
        title: "Git: Configuration and SSH Key Setup",
        id: "0001",
        tech: "Git",
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
              
            </ol>
            `,
    },
    {
        title: "Git: Useful Commands",
        id: "0002",
        tech: "Git",
        body: `
            <ul>
                <li>
                    <h2>To display your Git configurations (name and email):</h2>
                    <code>git config --global --list</code>
                    <p>This command will list all the global configurations set in Git.</p>
                </li>
                <li>
                    <h2>To display your Git username:</h2>
                    <code>git config user.name</code>
                    <p>Running this command will show your configured username.</p>
                </li>
                <li>
                    <h2>To display your Git email:</h2>
                    <code>git config user.email</code>
                    <p>This command will display the email address you've configured.</p>
                </li>
                <li>
                    <h2>To display your SSH key fingerprint:</h2>
                    <code>ssh-keygen -lf ~/.ssh/id_rsa.pub</code>
                    <p>
                        This command will show the fingerprint of your SSH key. It can be
                        useful for verifying the correct key is associated with your GitHub
                        account.
                    </p>
                </li>
                <li>
                    <h2>To check the status of your Git repository:</h2>
                    <code>git status</code>
                    <p>
                        Running this command within a Git repository will display
                        information about modified, added, and deleted files, as well as the
                        current branch.
                    </p>
                </li>
                <li>
                    <h2>To display the commit history:</h2>
                    <code>git log</code>
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
                    <code>git remote -v</code>
                    <p>
                        Running this command will list the remote repositories and their
                        associated URLs.
                    </p>
                </li>
            </ul>
            <p>
                Additionally, here are a few more commonly used Git commands:
            </p>
            <ul>
                <li>
                    <h3>Stage changes for commit:</h3>
                    <code>git add</code>
                </li>
                <li>
                    <h3>Create a new commit with the staged changes:</h3>
                    <code>git commit</code>
                </li>
                <li>
                    <h3>Push commits to a remote repository:</h3>
                    <code>git push</code>
                </li>
                <li>
                    <h3>Fetch and merge changes from a remote repository:</h3>
                    <code>git pull</code>
                </li>
                <li>
                    <h3>List, create, or delete branches:</h3>
                    <code>git branch</code>
                </li>
                <li>
                    <h3>Switch branches or restore files from a commit:</h3>
                    <code>git checkout</code>
                </li>
                <li>
                    <h3>Merge changes from one branch into another:</h3>
                    <code>git merge</code>
                </li>
                <li>
                    <h3>Create a local copy of a remote repository:</h3>
                    <code>git clone</code>
                </li>
            </ul>
            `,
    },
    {
        title: "General: Code Types",
        id: "0003",
        tech: "General",
        body: `
        <ul>
            <li>
                <strong> Monolithic Code: </strong>
                This term is often used in the context of applications as a
                whole. A monolithic application is built as a single, unified
                unit. Any change to any part of the system requires rebuilding
                and deploying the entire application. This approach contrasts
                with modular or microservices architectures, where different
                functionalities are separated into individual services or
                modules.
            </li>
            <li>
                <strong> Procedural Code: </strong>

                This refers to the programming paradigm based on the concept of
                procedure calls. Procedures (or functions) are blocks of code
                that can be abstracted and called as needed. Procedural
                programming is characterized by a linear and top-down structure,
                where there's a clear sequence of code execution. This contrasts
                with object-oriented programming, where code is organized around
                objects.
            </li>
            <li>
                When code is written in a single file without any clear
                organization, patterns, or modules, it's often just referred to
                as <strong> "spaghetti code" </strong>. This term is informal
                and often used pejoratively, indicating that the code is tangled
                and hard to follow or maintain.
            </li>
            <li>
                Using design patterns like <strong> M-V-C </strong> or
                modularizing the code is recommended for larger projects because
                it offers several benefits, such as improved maintainability,
                easier debugging, and better collaboration among developers.
                However, for very small scripts or quick prototypes, a simple
                linear or procedural approach might be sufficient.
            </li>
        </ul>
        `,
    },
    {
        title: "General: Code Refactoring",
        id: "0004",
        tech: "General",
        body: `
        <p>
            Here's a general approach to refactoring for readability and
            optimization:
        </p>
        <p>
            <strong> Modularize the Code: </strong> Group related functionality
            into functions or modules. This makes the code easier to read and
            understand at a glance.
        </p>
        <p>
            <strong> Use Descriptive Variable and Function Names: </strong>
            Names should be self-explanatory. A developer should be able to
            understand the purpose of a variable or function based on its name.
        </p>
        <p>
            <strong> Avoid Magic Values: </strong> Use named constants instead
            of hard-coded values. For instance, instead of directly using a
            string like "actionItems", you can define a constant
            COLLECTION_NAME.
        </p>
        <p>
            <strong> Comments and Documentation: </strong> While the code should
            be as self-explanatory as possible, judicious use of comments can
            help explain the purpose of a piece of code, any intricacies, or
            reasons for specific implementations.
        </p>
        <p>
            <strong> Consistent Formatting: </strong> Ensure consistent
            indentation, use of spaces, and other formatting conventions. This
            makes the code visually clean.
        </p>
        <p>
            <strong> Error Handling: </strong> Ensure that all possible error
            scenarios are handled. This includes not only handling Firestore
            errors but also potential issues like trying to access properties on
            undefined or null.
        </p>
        <p>
            <strong> Optimize for Performance: </strong> While this isn't
            strictly about readability, sometimes refactoring can help improve
            performance. For example, avoid unnecessary DOM updates or Firestore
            reads.
        </p>

        <ol>
            <li>
                <h3>Modularize the Code:</h3>
                <ul>
                    <li>
                        Group related functions together. For instance, all
                        utility functions like generateUniqueId can be placed
                        together. Similarly, group event handlers together.
                    </li>
                    <li>
                        Consider using an IIFE (Immediately Invoked Function
                        Expression) to prevent global namespace pollution.
                    </li>
                </ul>
            </li>
            <li>
                <h3>Use Descriptive Variable and Function Names:</h3>
                <ul>
                    <li>
                        Most of your variable names are descriptive, but ensure
                        this consistency throughout. For instance, names like
                        newItemInputNode give a clear understanding of what the
                        variable is for.
                    </li>
                </ul>
            </li>
            <li>
                <h3>Avoid Magic Values:</h3>
                <ul>
                    <li>
                        For strings or values that are used multiple times,
                        consider defining them as constants at the top of your
                        script. This not only makes the code more readable but
                        also easier to maintain.
                    </li>
                </ul>
            </li>
            <li>
                <h3>Comments and Documentation:</h3>
                <ul>
                    <li>
                        You've done a good job commenting the different sections
                        of your code. Continue this practice, especially for
                        complex logic. Remember, comments should explain the
                        "why" and not the "what" (code itself tells the "what").
                    </li>
                </ul>
            </li>
            <li>
                <h3>Consistent Formatting:</h3>
                <ul>
                    <li>
                        Ensure consistent use of spaces, indentation, and
                        newline breaks. This will make the code easier to scan
                        and read.
                    </li>
                </ul>
            </li>
            <li>
                <h3>Error Handling:</h3>
                <ul>
                    <li>
                        You've incorporated error handling for Firestore
                        operations. Ensure that other potential points of
                        failure, like DOM manipulations or array operations, are
                        also handled gracefully.
                    </li>
                </ul>
            </li>
            <li>
                <h3>Optimize for Performance:</h3>
                <ul>
                    <li>
                        If there are repetitive DOM lookups, consider caching
                        the element in a variable.
                    </li>
                    <li>
                        For operations that could be resource-intensive or
                        repeated often, consider if there are more efficient
                        ways to achieve the same result.
                    </li>
                </ul>
            </li>
            <li>
                <h3>Additional Suggestions:</h3>
                <ul>
                    <li>
                        Event Delegation: Instead of attaching event listeners
                        to each item, consider using event delegation. This
                        means you attach an event listener to a parent element
                        and use logic inside the handler to determine which
                        child was clicked. This is especially useful for lists
                        where items can be dynamically added or removed.
                    </li>
                    <li>
                        Data Manipulation: When dealing with arrays like
                        actionItems, consider using functional programming
                        methods like map, filter, and reduce for
                        transformations. They make the code more readable and
                        declarative.
                    </li>
                </ul>
            </li>
        </ol>
        `,
    },
    {
        title: "JavaScript: Function Types",
        id: "0005",
        tech: "JavaScript",
        body: `
        <p>
            In JavaScript, functions are blocks of code that can be defined and
            executed when called upon. They are used to perform specific tasks
            or calculations and are an essential part of the language. The
            syntax of JavaScript functions consists of three main parts:
        </p>
        <h3>Function Declaration:</h3>
        <p>
            The most common and traditional way to define a function is using
            the function declaration. It has the following syntax:
        </p>
        <code
            >function functionName(parameters) {<br />
            // Function body (code block)<br />
            // This is where the function&#x27;s logic resides<br />
            // It performs the desired operations when the function is called<br />
            return someValue; // Optional, used to return a result<br />
            }</code
        >
        <p>Example:</p>
        <code
            >function add(a, b) {<br />
            return a + b;<br />
            }</code
        >
        <h3>Function Expression:</h3>
        <p>
            In JavaScript, functions are also treated as first-class objects,
            which means they can be assigned to variables. This is known as a
            function expression. It has the following syntax:
        </p>
        <code>
            const functionName = function(parameters) {<br />
            // Function body (code block)<br />
            return someValue; // Optional, used to return a result<br />
            };
        </code>
        <p>Example:</p>
        <code>
            const subtract = function(a, b) {<br />
            return a - b;<br />
            };<br />
        </code>
        <h3>Arrow Function Expression:</h3>
        <p>
            Introduced in ECMAScript 6 (ES6), arrow functions provide a more
            concise syntax for defining functions, especially when the function
            is short. They also have some differences in how they handle the
            <strong>'this'</strong> keyword compared to regular functions. The
            syntax for an arrow function is as follows:
        </p>
        <code>
            const functionName = (parameters) =&gt; {<br />
            // Function body (code block)<br />
            return someValue; // Optional, used to return a result<br />
            };<br />
        </code>
        <p>Example:</p>
        <code>
            const multiply = (a, b) =&gt; {<br />
            return a \* b;<br />
            };<br />
        </code>
        <h3>Differences between these three methods:</h3>
        <strong>Hoisting:</strong>
        <p>
            Function declarations are hoisted, meaning you can call them before
            their actual definition in the code.
        </p>
        <p>
            Function expressions and arrow functions are not hoisted, so you
            must define them before calling.
        </p>
        <strong>'this' context:</strong>
        <p>
            In regular function declarations and expressions, the value of
            <strong>'this'</strong> is dynamically determined based on how the
            function is called. It can vary depending on the context.
        </p>
        <p>
            In arrow functions, <strong>'this'</strong> is lexically scoped,
            which means it takes the value of <strong>'this'</strong> from its
            enclosing function or scope.
        </p>
        <strong>Syntax length:</strong>
        <p>
            Arrow functions provide a more concise syntax, especially for
            one-liner functions.
        </p>
        <p>
            Which method to use depends on the situation. Function declarations
            are generally used for named functions, whereas function expressions
            and arrow functions are often used for anonymous functions or when
            you need to pass functions as arguments to other functions (e.g., in
            higher-order functions).
        </p>
        <h3>Differences:</h3>
        <p>
            The main difference lies in when you define the function in your
            code:
        </p>
        <h3>Function Declaration:</h3>
        <p>
            Function declarations are hoisted, which means they are available
            throughout the scope they are defined in, even before the actual
            declaration in the code.
        </p>
        <p>
            You can call a function declared using the function keyword at any
            point in your code, even before the line where the function is
            declared.
        </p>
        <p>Example:</p>
        <code>
            // Calling the &#x27;add&#x27; function before its declaration<br />
            const result = add(5, 10);<br />
            console.log(result); // Output: 15<br />
            <br />
            // Function declaration<br />
            function add(a, b) {<br />
            return a + b;<br />
            }
        </code>
        <h3>Function Expression:</h3>
        <p>
            Function expressions are not hoisted, so you need to define them
            before calling them.
        </p>
        <p>
            If you try to call an expressed function before its definition, you
            will get an error.
        </p>
        <p>Example:</p>
        <code>
            // This will cause an error: &quot;TypeError: subtract is not a
            function&quot;<br />
            const result = subtract(10, 5);<br />
            <br />
            // Function expression<br />
            const subtract = function(a, b) {<br />
            return a - b;<br />
            };
        </code>
        <p>
            To avoid errors with function expressions, make sure you define the
            function before you attempt to call it.
        </p>
        <h3>Arrow Function Expression:</h3>
        <p>
            Like function expressions, arrow functions are also not hoisted, so
            they should be defined before calling.
        </p>
        <p>
            The same rule applies here: define the arrow function before calling
            it.
        </p>
        <p>Example:</p>
        <code>
            // This will cause an error: &quot;TypeError: multiply is not a
            function&quot; <br />
            const result = multiply(2, 3);<br />
            // Arrow function expression<br />
            const multiply = (a, b) =&gt; {<br />
            return a \* b;<br />
            };
        </code>
        <p>
            So, the importance of expressing a function before calling it
            applies to both function expressions and arrow functions, as you
            need to ensure the function is defined and available in memory at
            the time of the call.
        </p>
        `,
    },
    {
        title: "JavaScript: Generate Unique ID",
        id: "0006",
        tech: "JavaScript",
        body: `
        <p>
            There are several approaches you can take to generate unique IDs for
            your app elements. Here's a breakdown:
        </p>
        <h3>Firestore's Built-in IDs:</h3>
        <p>
            Firestore itself can generate unique IDs when you create a document
            without specifying an ID. These IDs are longer than 10 characters
            but are guaranteed to be unique within a collection.
        </p>
        <code>
            let newDocRef = db.collection('customers').doc(); <br />
            let uniqueID = newDocRef.id; // This gives you a unique ID generated
            by Firestore
        </code>
        <h3>Shortid Library:</h3>
        <p>
            Shortid is a popular library that creates amazingly short
            non-sequential URL-friendly unique IDs. Perfect for URL slugs,
            MongoDB, and Redis keys, among others.
        </p>
        <p>Installation:</p>
        <code> npm install shortid</code>
        <p>Usage:</p>
        <code>
            const shortid = require('shortid'); <br />
            console.log(shortid.generate()); // Produces a short unique ID
        </code>
        <h3>Nano ID:</h3>
        <p>
            Nano ID is another library that is a size-efficient URL-friendly
            unique string ID generator.
        </p>
        <p>Installation:</p>
        <code> npm install nanoid </code>
        <p>Usage:</p>
        <code>
            const { nanoid } = require('nanoid'); <br />
            const id = nanoid(10); // Produces a 10-character unique ID
        </code>
        <h3>UUID:</h3>
        <p>
            UUID library assists to generate long unique IDs in a format of
            "a449e3ec-a602-4020-abeb-91f680a0128d", that might work for as a
            strong password for majority of applications.
        </p>
        <p>Installation:</p>
        <code>npm install uuid</code>
        <p>Usage:</p>
        <code>
            import { v4 as uuidv4 } from "uuid";<br />
            uuidv4();
        </code>
        <h3>Custom Function:</h3>
        <p>If you want to roll out your own function, here's a simple one:</p>
        <code>
            function generateUID(length) { <br />
            return [...Array(length)].map(() => (~~(Math.random() *
            36)).toString(36)).join(''); <br />
            } console.log(generateUID(10)); // Produces a 10-character unique ID
        </code>
        <p>
            This function generates an ID of a given length using numbers and
            lowercase letters.
        </p>
        `,
    },
    {
        title: "Node.js: Installation (macOS)",
        id: "0007",
        tech: "Node.js",
        body: `
        <p>
            Visit the official Node.js website at
            <a href="https://nodejs.org/en/">https://nodejs.org/en/</a> in your
            web browser.
        </p>
        <p>
            On the homepage, you'll see two download options: LTS (Long-Term
            Support) and Current. For most users, it's recommended to download
            the LTS version as it provides a more stable and reliable
            environment. Click on the "LTS" button to download the macOS
            installer.
        </p>
        <p>
            Once the installer is downloaded, double-click on it to launch the
            installation package.
        </p>
        <p>
            Follow the prompts in the installation package and accept the
            license agreement. Leave the default settings as they are unless you
            have specific requirements.
        </p>
        <p>
            The installer will copy the necessary files and set up Node.js on
            your macOS system.
        </p>
        <p>
            Once the installation is complete, open the Terminal application.
            You can find it by going to Applications → Utilities → Terminal.
        </p>
        <p>
            In the Terminal, type the following command to verify the
            installation:
        </p>
        <pre><code>node -v</code></pre>
        <p>
            If you see the version number, it means Node.js is installed
            correctly.
        </p>
        <p>
            Additionally, you can also check the version of npm by running the
            following command in the Terminal:
        </p>
        <pre><code>npm -v</code></pre>
        <p>This will display the version of npm installed on your system.</p>
        `,
    },
    {
        title: "Node.js: Installation (Windows)",
        id: "0008",
        tech: "Node.js",
        body: `
        <p>
            Visit the official Node.js website at
            <a href="https://nodejs.org/en/">https://nodejs.org/en/</a> in your
            web browser.
        </p>
        <p>
            On the homepage, you'll see two download options: LTS (Long-Term
            Support) and Current. For most users, it's recommended to download
            the LTS version as it provides a more stable and reliable
            environment. Click on the "LTS" button to download the installer.
        </p>
        <p>
            Once the installer is downloaded, double-click on it to launch the
            installation wizard.
        </p>
        <p>
            In the installation wizard, follow the prompts and accept the
            license agreement. Leave the default settings as they are unless you
            have specific requirements.
        </p>
        <p>
            On the "Select components" screen, make sure the checkboxes next to
            "Node.js runtime" and "npm package manager" are selected. You can
            also choose to install additional tools if needed.
        </p>
        <p>
            Choose the installation location where you want Node.js to be
            installed. By default, it will be installed in the "Program Files"
            folder.
        </p>
        <p>
            Click the "Next" button and proceed with the installation. The
            installer will copy the necessary files and set up Node.js on your
            computer.
        </p>
        <p>
            Once the installation is complete, open the Command Prompt and type
            the following command to verify the installation:
        </p>
        <pre><code>node -v</code></pre>
        <p>
            If you see the version number, it means Node.js is installed
            correctly.
        </p>
        <p>
            Additionally, you can also check the version of npm by running the
            following command in the Command Prompt:
        </p>
        <pre><code>npm -v</code></pre>
        <p>This will display the version of npm installed on your system.</p>
        `,
    },
    {
        title: "Parcel: Installing and Running Parcel in Project Directory",
        id: "0009",
        tech: "Parcel",
        body: `
            <ol>
                <li>
                    <strong>Step 1: Initialize an npm project</strong>
                    <p>
                        Open your terminal or command prompt and navigate to
                        your project directory:
                    </p>
                    <pre><code>cd /path/to/your/project</code></pre>
                    <p>
                        Run the following command to initialize a new npm
                        project:
                    </p>
                    <pre><code>npm init -y</code></pre>
                </li>

                <li>
                    <strong
                        >Step 2: Install Parcel as a development
                        dependency</strong
                    >
                    <p>
                        After navigating to your project directory, install
                        Parcel by running the following command:
                    </p>
                    <pre><code>npm install parcel-bundler --save-dev</code></pre>
                </li>

                <li>
                    <strong>Step 3: Create project files</strong>
                    <p>
                        Create an HTML file (e.g., <code>index.html</code>) in
                        your project directory. Add your HTML, CSS, and
                        JavaScript code to the appropriate files.
                    </p>
                </li>

                <li>
                    <strong>Step 4: Configure package.json</strong>
                    <p>
                        Open the <code>package.json</code> file in a text
                        editor. Add the following line to the
                        <code>scripts</code> section:
                    </p>
                    <pre><code>"build": "parcel build src/index.html"</code></pre>
                </li>

                <li>
                    <strong>Step 5: Start the Parcel server</strong>
                    <p>
                        To start the Parcel server and bundle your project
                        files, use the following command:
                    </p>
                    <pre><code>npx parcel src/index.html</code></pre>
                    <p>
                        Replace <code>src/index.html</code> with the path to
                        your entry HTML file if it's located in a different
                        directory.
                    </p>
                </li>

                <li>
                    <strong>Step 6: View your project</strong>
                    <p>
                        The server will start, and you should see output
                        indicating the server is running at
                        <code>http://localhost:1234</code> (or a different port
                        if 1234 is already in use). Open your web browser and
                        visit the URL to see your project running.
                    </p>
                </li>
            </ol>
            <p>
                Remember to stop the server when you're done by pressing "Ctrl +
                C" in the terminal or command prompt.
            </p>
        `,
    },
    {
        title: "Parcel: Installing and Running Parcel (ver 2)",
        id: "0010",
        tech: "Parcel",
        body: `
            <ol>
                <li>
                    <strong>Step 1: Initialize an npm project</strong>
                    <p>
                        Open your terminal or command prompt and navigate to
                        your project directory:
                    </p>
                    <pre><code>cd /path/to/your/project</code></pre>
                    <p>
                        Run the following command to initialize a new npm
                        project:
                    </p>
                    <pre><code>npm init -y</code></pre>
                </li>

                <li>
                    <strong
                        >Step 2: Install Parcel as a development
                        dependency</strong
                    >
                    <p>
                        After navigating to your project directory, install
                        Parcel v2 by running the following command:
                    </p>
                    <pre><code>npm install parcel --save-dev</code></pre>
                </li>

                <li>
                    <strong>Step 3: Create project files</strong>
                    <p>
                        Create an HTML file (e.g., <code>index.html</code>) in
                        your project directory. Add your HTML, CSS, and
                        JavaScript code to the appropriate files.
                    </p>
                </li>

                <li>
                    <strong>Step 4: Configure package.json</strong>
                    <p>
                        Open the <code>package.json</code> file in a text
                        editor. You can add one of the following lines to the
                        <code>scripts</code> section for building your project:
                    </p>
                    <pre><code>"build": "parcel build src/index.html"</code></pre>
                    <p>or, for more advanced configurations:</p>
                    <pre><code>"build": "parcel build --no-source-maps --dist-dir prod"</code></pre>
                    <p>
                        The first command is a basic build, while the second
                        disables source maps and outputs to a directory named
                        <code>prod</code>.
                    </p>
                </li>

                <li>
                    <strong>Step 5: Start the Parcel server</strong>
                    <p>
                        To start the Parcel server and bundle your project
                        files, use the following command:
                    </p>
                    <pre><code>npm run start</code></pre>
                    <p>
                        This command will start the development server using the
                        entry file you specified in the
                        <code>package.json</code> scripts.
                    </p>
                </li>

                <li>
                    <strong>Step 6: View your project</strong>
                    <p>
                        The server will start, and you should see output
                        indicating the server is running at
                        <code>http://localhost:1234</code> (or a different port
                        if 1234 is already in use). Open your web browser and
                        visit the URL to see your project running.
                    </p>
                </li>
            </ol>

            <p>
                Remember to stop the server when you're done by pressing "Ctrl +
                C" in the terminal or command prompt.
            </p>
            <br />
            <strong>GitHub Hosting Suggestions</strong>
            <p>
                For hosting at GitHub Pages use 'docs' folder for production
                files AND check references (should be
                href="./index.19b52dcd.css" instead of
                href="/index.19b52dcd.css")
            </p>
            <p>
                To solve the issue while building production files you may use:
            </p>
            <p>for Parcel v.1</p>
            <code>
                "scripts": { "build": "parcel build src/index.html --public-url
                ./ --out-dir docs" }
            </code>
            <p>for Parcel v.2</p>
            <code>
                "scripts": { "build": "npx parcel build src/index.html
                --public-url ./ --dist-dir docs" }
            </code>
            <p>After modifying the script, simply run:</p>
            <code>npm run build</code>
        `,
    },
    // {
    //     title: "",
    //     id: "",
    //     tech: "",
    //     body: `
    //     `,
    // },
    // {
    //     title: "",
    //     id: "",
    //     tech: "",
    //     body: `
    //     `,
    // },
    // {
    //     title: "",
    //     id: "",
    //     tech: "",
    //     body: `
    //     `,
    // },
    // {
    //     title: "",
    //     id: "",
    //     tech: "",
    //     body: `
    //     `,
    // },
    {
        title: "VS Code: Installation",
        id: "0011",
        tech: "VS Code",
        body: `
        <ol>
          <li>
            <p>
              Go to the official VS Code website: 
              <a href="https://code.visualstudio.com/" target="_blank">https://code.visualstudio.com/</a>
            </p>
          </li>
          <li>
            <p>
              Click on the "Download for [Your Operating System]" button. For example, if you're using Windows, click on "Download for Windows".
            </p>
          </li>
          <li>
            <p>
              Once the download is complete, run the installer.
            </p>
          </li>
          <li>
            <p>
              Follow the instructions in the installer to complete the installation process.
            </p>
          </li>
          <li>
            <p>
              After the installation is finished, launch Visual Studio Code.
            </p>
          </li>
        </ol>
        `,
    },
];
