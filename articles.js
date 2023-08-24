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
        title: "General: Code Refactoring",
        id: "0003",
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
        id: "0004",
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
        id: "0005",
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
        title: "",
        id: "",
        tech: "",
        body: `
        `,
    },
    {
        title: "",
        id: "",
        tech: "",
        body: `
        `,
    },
    {
        title: "",
        id: "",
        tech: "",
        body: `
        `,
    },
];
