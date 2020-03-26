import crypto from "crypto";
import database from "../database/connection";

class ONGController {
  async store(req, res) {
    const { name, email, whatsapp, city, state } = req.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await database("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      state
    });

    return res.json({ id });
  }

  async index(req, res) {
    const ongs = await database("ongs").select("*");

    return res.json(ongs);
  }
}

export default new ONGController();
