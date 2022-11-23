import { app } from "./app";
import { BandRouter } from "./routes/BandRouter";
import { ShowRouter } from "./routes/ShowRouter";
import { UserRouter } from "./routes/UserRouter";


app.use("/user", UserRouter)

app.use("/band", BandRouter)

app.use("/show", ShowRouter)