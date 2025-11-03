import express from "express";

import authRoute from "./routes/auth.route.js";
import kehadiranRoute from "./routes/kehadiran.route.js";
import usersRoute from "./routes/users.route.js";
import presensiRoute from "./routes/presensi.route.js";

const app = express();
const port = 3030;
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/kehadiran", kehadiranRoute);
app.use("/api/presensi", presensiRoute);

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})