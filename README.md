# Follow these steps to get the example running:

## Windows
Install [NodeJS](http://nodejs.org/)  
Install [Git](http://git-scm.com/)  
Type these commands (each line as a seperate command) in the command line:
```
npm install -g mocha
git clone https://github.com/nles/tdd_example.git
cd tdd_example
npm install
```

## Mac
Install [Homebrew](http://brew.sh/)  
Type these commands (each line as a seperate command) in the terminal (Terminal.app for example):
```
brew install node
sudo npm install -g mocha
git clone https://github.com/nles/tdd_example.git
cd tdd_example
npm install
```

# To run the tests
In the tdd_example directory, run the following in command line or terminal:
```
mocha
```

If the command above fails, try the following:
```
./node_modules/mocha/bin/mocha
```
