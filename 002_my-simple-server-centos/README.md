<ul>
<li><p>create directory called nodejs where all nodejs practice exercises will be created</p></li>
<li><p>make sure git is installed, and you are familiar with git</p></li>
<li><p>In integerated terminal</p><li>
<ui><p>do git init</p></li>
<li><p>do git status</p></li>
<li><p>if main branch is master, rename it</p></li>
<li><p>git branch -m main</p></li>
<li>
</ui>
<li><p>git remote add origin <Git_URL_OF_YOUR_REPOSITORY></p></li>

</ul>
<p>
Create a new directory for your project in above nodejs directory (e.g., mkdir my-simple-server).
</p>
<p>
Navigate to the directory in your terminal (cd my-simple-server).</p>
<p>
Initialize a package.json file: npm init -y (the -y flag accepts default values).</p>
<p>
Create a file named server.js in your project directory.</p>
<p>
add code of server.js</p>
<p>
in integerated terminal</p>
<p>
make sure code runs using</p>
<p>
npm start</p>
<p>
do git add .</p>
<p>
git commit -m "001_my-simple-server"</p>
<p>
git push -u origin main</p>

<p>Docker File<br>
# Use the specified node version as the base image
FROM node:20.11.1

# Set the working directory in the container

WORKDIR /001_my-simple-server

# Install net-tools for netstat command

RUN apt-get update && apt-get install -y net-tools

# Copy the current directory contents into the container

COPY . .

# Run the command when the container launches

CMD [ "npm","start" ]

</p>
