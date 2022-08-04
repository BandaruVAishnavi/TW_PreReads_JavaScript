let colours = ["Violet", "Red", "Indigo", "Orange", "Blue", "Yellow"];

printItems = item => console.log(item);

forEachLogic = (colours, print) => {
    for(let i = 0 ; i < colours.length ; i++) {
        print(colours[i]);
    }
};

forEachLogic(colours, printItems);
