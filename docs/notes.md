Had to change:
    if (process.env.USER) require("dotenv").config();
to:
    require("dotenv").config();
to make it work. What was that code supposed to do?